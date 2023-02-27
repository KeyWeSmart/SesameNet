package keeper

import (
	"context"
	"crypto/sha256"
	"encoding/hex"

	"github.com/keywesmart/sesamenet/x/nft/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MintNFT(goCtx context.Context, msg *types.MsgMintNFT) (*types.MsgMintNFTResponse, error) {
	recipient, err := sdk.AccAddressFromBech32(msg.Recipient)
	if err != nil {
		return nil, err
	}

	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return nil, err
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// mint nft
	if err := k.Keeper.MintNFT(ctx, msg.DenomId, msg.Id,
		msg.Name,
		msg.URI,
		msg.Data,
		sender,
		recipient,
	); err != nil {
		return nil, err
	}

	// SHA256 hash the NFT name for denom access control map
	h := sha256.New()
	h.Write([]byte(msg.Id))
	bs := h.Sum(nil)
	hashTokenID := hex.EncodeToString(bs)

	// update denomination access control map
	if err := k.Keeper.UpdateDenomAccessMap(ctx, msg.DenomId, hashTokenID); err != nil {
		return nil, err
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeMintNFT,
			sdk.NewAttribute(types.AttributeKeyTokenID, msg.Id),
			sdk.NewAttribute(types.AttributeKeyDenomID, msg.DenomId),
			sdk.NewAttribute(types.AttributeKeyTokenURI, msg.URI),
			sdk.NewAttribute(types.AttributeKeyRecipient, msg.Recipient),
		),
		sdk.NewEvent(
			types.EventTypeUpdateDenomAccessMap,
			sdk.NewAttribute(types.AttributeKeyDenomID, msg.DenomId),
			sdk.NewAttribute(types.AttributeKeyDenomAccessMap, hashTokenID),
		),
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.AttributeValueCategory),
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Sender),
		),
	})

	return &types.MsgMintNFTResponse{}, nil
}
