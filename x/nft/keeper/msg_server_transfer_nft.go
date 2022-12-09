package keeper

import (
	"context"

	"sesamenet/x/nft/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) TransferNFT(goCtx context.Context, msg *types.MsgTransferNFT) (*types.MsgTransferNFTResponse, error) {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return nil, err
	}

	recipient, err := sdk.AccAddressFromBech32(msg.Recipient)
	if err != nil {
		return nil, err
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	if err := k.Keeper.TransferOwner(ctx, msg.DenomId, msg.Id,
		sender,
		recipient,
	); err != nil {
		return nil, err
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeTransfer,
			sdk.NewAttribute(types.AttributeKeyTokenID, msg.Id),
			sdk.NewAttribute(types.AttributeKeyDenomID, msg.DenomId),
			sdk.NewAttribute(types.AttributeKeySender, msg.Sender),
			sdk.NewAttribute(types.AttributeKeyRecipient, msg.Recipient),
		),
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.AttributeValueCategory),
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Sender),
		),
	})

	return &types.MsgTransferNFTResponse{}, nil
}
