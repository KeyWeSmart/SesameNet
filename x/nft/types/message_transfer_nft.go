package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgTransferNFT = "transfer_nft"

var _ sdk.Msg = &MsgTransferNFT{}

func NewMsgTransferNFT(sender string, id string, denomId string, recipient string) *MsgTransferNFT {
	return &MsgTransferNFT{
		Sender:    sender,
		Id:        id,
		DenomId:   denomId,
		Recipient: recipient,
	}
}

func (msg *MsgTransferNFT) Route() string {
	return RouterKey
}

func (msg *MsgTransferNFT) Type() string {
	return TypeMsgTransferNFT
}

func (msg *MsgTransferNFT) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgTransferNFT) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgTransferNFT) ValidateBasic() error {
	if err := ValidateDenomID(msg.DenomId); err != nil {
		return err
	}

	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}

	recipient, err := sdk.AccAddressFromBech32(msg.Recipient)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid recipient address (%s)", err)
	}

	if sender.String() == recipient.String() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "send and recipient is the same address")
	}

	return ValidateTokenID(msg.Id)
}
