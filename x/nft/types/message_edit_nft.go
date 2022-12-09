package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgEditNFT = "edit_nft"

var _ sdk.Msg = &MsgEditNFT{}

func NewMsgEditNFT(sender string, id string, denomId string, name string, uri string, data string) *MsgEditNFT {
	return &MsgEditNFT{
		Sender:  sender,
		Id:      id,
		DenomId: denomId,
		Name:    name,
		URI:     uri,
		Data:    data,
	}
}

func (msg *MsgEditNFT) Route() string {
	return RouterKey
}

func (msg *MsgEditNFT) Type() string {
	return TypeMsgEditNFT
}

func (msg *MsgEditNFT) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgEditNFT) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgEditNFT) ValidateBasic() error {
	if _, err := sdk.AccAddressFromBech32(msg.Sender); err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}

	if err := ValidateDenomID(msg.DenomId); err != nil {
		return err
	}

	if err := ValidateTokenURI(msg.URI); err != nil {
		return err
	}

	return ValidateTokenID(msg.Id)
}
