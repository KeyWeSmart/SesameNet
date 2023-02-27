package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// NewDenom return a new denom
func NewDenom(id, name, schema string, uri string, owner sdk.AccAddress, accessList map[string]bool) Denom {
	return Denom{
		Id:         id,
		Name:       name,
		Schema:     schema,
		Owner:      owner.String(),
		Uri:        uri,
		AccessList: accessList,
	}
}
