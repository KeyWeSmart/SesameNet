package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBurnNFT = "burn_nft"

var _ sdk.Msg = &MsgBurnNFT{}

func NewMsgBurnNFT(sender string, id string, denomId string) *MsgBurnNFT {
	return &MsgBurnNFT{
		Sender:  sender,
		Id:      id,
		DenomId: denomId,
	}
}

func (msg *MsgBurnNFT) Route() string {
	return RouterKey
}

func (msg *MsgBurnNFT) Type() string {
	return TypeMsgBurnNFT
}

func (msg *MsgBurnNFT) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgBurnNFT) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBurnNFT) ValidateBasic() error {
	if _, err := sdk.AccAddressFromBech32(msg.Sender); err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}

	if err := ValidateDenomID(msg.DenomId); err != nil {
		return err
	}

	return ValidateTokenID(msg.Id)
}
