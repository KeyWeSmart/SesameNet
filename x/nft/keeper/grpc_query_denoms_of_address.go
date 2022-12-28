package keeper

import (
	"context"

	"github.com/keywesmart/sesamenet/x/nft/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DenomsOfAddress(goCtx context.Context, req *types.QueryDenomsOfAddressRequest) (*types.QueryDenomsOfAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	address, err := sdk.AccAddressFromBech32(req.Address)
	if err != nil {
		return nil, err
	}

	denoms := k.GetAllDenomsOfAddress(ctx, address)

	return &types.QueryDenomsOfAddressResponse{Denoms: denoms}, nil
}
