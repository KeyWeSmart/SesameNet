package keeper

import (
	"context"

	"github.com/keywesmart/sesamenet/x/nft/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Denoms(goCtx context.Context, req *types.QueryDenomsRequest) (*types.QueryDenomsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var denoms []types.QueryDenom
	store := ctx.KVStore(k.storeKey)
	denomStore := prefix.NewStore(store, types.KeyDenomID(""))
	pageRes, err := query.Paginate(denomStore, req.Pagination, func(key, value []byte) error {
		var denom types.Denom
		k.cdc.MustUnmarshal(value, &denom)
		queryDenom := types.ConvertDenomToQueryDenom(denom)
		denoms = append(denoms, queryDenom)

		return nil
	})
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "paginate: %v", err)
	}

	return &types.QueryDenomsResponse{Denoms: denoms, Pagination: pageRes}, nil
}
