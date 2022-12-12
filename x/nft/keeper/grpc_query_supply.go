package keeper

import (
	"context"

	"sesamenet/x/nft/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Supply(goCtx context.Context, req *types.QuerySupplyRequest) (*types.QuerySupplyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var supply uint64
	switch {
	case len(req.Owner) == 0 && len(req.DenomId) > 0:
		supply = k.GetTotalSupply(ctx, req.DenomId)
	default:
		owner, err := sdk.AccAddressFromBech32(req.Owner)
		if err != nil {
			return nil, status.Errorf(codes.InvalidArgument, "invalid owner address %s", req.Owner)
		}
		supply = k.GetTotalSupplyOfOwner(ctx, req.DenomId, owner)
	}

	return &types.QuerySupplyResponse{Amount: supply}, nil
}
