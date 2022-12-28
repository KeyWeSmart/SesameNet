package keeper

import (
	"context"

	"github.com/keywesmart/sesamenet/x/nft/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DenomsAccessMap(goCtx context.Context, req *types.QueryDenomsAccessMapRequest) (*types.QueryDenomsAccessMapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	denom, err := k.GetDenom(ctx, req.DenomId)
	if err != nil {
		return nil, err
	}

	return &types.QueryDenomsAccessMapResponse{AccessMap: denom.AccessMap}, nil
}
