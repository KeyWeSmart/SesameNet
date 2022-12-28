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

func (k Keeper) Owner(goCtx context.Context, req *types.QueryOwnerRequest) (*types.QueryOwnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	ownerAddress, err := sdk.AccAddressFromBech32(req.Owner)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid owner address %s", req.Owner)
	}

	owner := types.Owner{
		Address:       ownerAddress.String(),
		IDCollections: types.IDCollections{},
	}
	idsMap := make(map[string][]string)
	store := ctx.KVStore(k.storeKey)
	nftStore := prefix.NewStore(store, types.KeyOwner(ownerAddress, req.DenomId, ""))
	pageRes, err := query.Paginate(nftStore, req.Pagination, func(key, value []byte) error {
		denomID := req.DenomId
		tokenID := string(key)

		if len(req.DenomId) == 0 {
			denomID, tokenID, err = types.SplitKeyDenom(key)
			if err != nil {
				return err
			}
		}

		if ids, ok := idsMap[denomID]; ok {
			idsMap[denomID] = append(ids, tokenID)
		} else {
			idsMap[denomID] = []string{tokenID}
			owner.IDCollections = append(owner.IDCollections, types.IDCollection{DenomId: denomID})
		}

		return nil
	})

	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "paginate: %v", err)
	}

	for i := 0; i < len(owner.IDCollections); i++ {
		owner.IDCollections[i].TokenIds = idsMap[owner.IDCollections[i].DenomId]
	}

	return &types.QueryOwnerResponse{Owner: &owner, Pagination: pageRes}, nil
}
