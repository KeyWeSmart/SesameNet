package keeper

import (
	"context"

	"github.com/keywesmart/sesamenet/x/nft/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DenomByName(goCtx context.Context, req *types.QueryDenomByNameRequest) (*types.QueryDenomByNameResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	denom, err := k.GetDenomByName(ctx, req.DenomName)
	if err != nil {
		return nil, err
	}

	queryDenom := types.ConvertDenomToQueryDenom(denom)

	return &types.QueryDenomByNameResponse{Denom: &queryDenom}, nil
}
