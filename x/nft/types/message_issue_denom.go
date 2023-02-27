package types

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgIssueDenom = "issue_denom"

var _ sdk.Msg = &MsgIssueDenom{}

func NewMsgIssueDenom(sender string, id string, name string, schema string, uri string) *MsgIssueDenom {
	return &MsgIssueDenom{
		Sender: sender,
		Id:     id,
		Name:   name,
		Schema: schema,
		Uri:    uri,
	}
}

func (msg *MsgIssueDenom) Route() string {
	return RouterKey
}

func (msg *MsgIssueDenom) Type() string {
	return TypeMsgIssueDenom
}

func (msg *MsgIssueDenom) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgIssueDenom) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgIssueDenom) ValidateBasic() error {
	if err := ValidateDenomID(msg.Id); err != nil {
		return err
	}

	fmt.Println("aaaaaaaa", msg.Sender)
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}

	return ValidateDenomName(msg.Name)
}
