package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// NewDenom return a new denom
func NewDenom(id, name, schema string, uri string, owner sdk.AccAddress, accessMap map[string]bool) Denom {
	return Denom{
		Id:        id,
		Name:      name,
		Schema:    schema,
		Owner:     owner.String(),
		Uri:       uri,
		AccessMap: accessMap,
	}
}

func ConvertDenomToQueryDenom(denom Denom) QueryDenom {
	return QueryDenom{
		Id:     denom.Id,
		Name:   denom.Name,
		Schema: denom.Schema,
		Owner:  denom.Owner,
		Uri:    denom.Uri,
	}
}
