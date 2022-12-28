package keeper

import (
	"context"

	"github.com/keywesmart/sesamenet/x/nft/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Collection(goCtx context.Context, req *types.QueryCollectionRequest) (*types.QueryCollectionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	collection, pageRes, err := k.GetPaginateCollection(ctx, req, req.DenomId)
	if err != nil {
		return nil, err
	}

	return &types.QueryCollectionResponse{Collection: &collection, Pagination: pageRes}, nil
}
