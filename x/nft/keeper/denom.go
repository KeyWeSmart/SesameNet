package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/keywesmart/sesamenet/x/nft/types"
)

// HasDenomID returns whether the specified denom ID exists
func (k Keeper) HasDenomID(ctx sdk.Context, id string) bool {
	store := ctx.KVStore(k.storeKey)
	return store.Has(types.KeyDenomID(id))
}

// HasDenomNm returns whether the specified denom name exists
func (k Keeper) HasDenomNm(ctx sdk.Context, name string) bool {
	store := ctx.KVStore(k.storeKey)
	return store.Has(types.KeyDenomName(name))
}

// SetDenom is responsible for saving the definition of denom
func (k Keeper) SetDenom(ctx sdk.Context, denom types.Denom) error {
	if k.HasDenomID(ctx, denom.Id) {
		return sdkerrors.Wrapf(types.ErrInvalidDenom, "denomID %s has already exists", denom.Id)
	}

	if k.HasDenomNm(ctx, denom.Name) {
		return sdkerrors.Wrapf(types.ErrInvalidDenom, "denomName %s has already exists", denom.Name)
	}

	store := ctx.KVStore(k.storeKey)
	bz := k.cdc.MustMarshal(&denom)
	store.Set(types.KeyDenomID(denom.Id), bz)
	store.Set(types.KeyDenomName(denom.Name), []byte(denom.Id))
	return nil
}

// UpdateDenom is responsible for updating denomination information
func (k Keeper) UpdateDenom(ctx sdk.Context, denom types.Denom) error {
	if !k.HasDenomID(ctx, denom.Id) {
		return sdkerrors.Wrapf(types.ErrInvalidDenom, "denomID %s does not exist", denom.Id)
	}

	if !k.HasDenomNm(ctx, denom.Name) {
		return sdkerrors.Wrapf(types.ErrInvalidDenom, "denomName %s does not exist", denom.Name)
	}

	store := ctx.KVStore(k.storeKey)
	bz := k.cdc.MustMarshal(&denom)
	store.Set(types.KeyDenomID(denom.Id), bz)
	store.Set(types.KeyDenomName(denom.Name), []byte(denom.Id))
	return nil
}

// GetDenom returns the denom by id
func (k Keeper) GetDenom(ctx sdk.Context, id string) (denom types.Denom, err error) {
	store := ctx.KVStore(k.storeKey)

	bz := store.Get(types.KeyDenomID(id))
	if len(bz) == 0 {
		return denom, sdkerrors.Wrapf(types.ErrInvalidDenom, "not found denomID: %s", id)
	}

	k.cdc.MustUnmarshal(bz, &denom)
	return denom, nil
}

// GetDenom returns the denom by name
func (k Keeper) GetDenomByName(ctx sdk.Context, name string) (denom types.Denom, err error) {
	store := ctx.KVStore(k.storeKey)

	bz := store.Get(types.KeyDenomName(name))
	denomID := string(bz)

	return k.GetDenom(ctx, denomID)
}

// GetDenoms returns all the denoms
func (k Keeper) GetDenoms(ctx sdk.Context) (denoms []types.Denom) {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.KeyDenomID(""))
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var denom types.Denom
		k.cdc.MustUnmarshal(iterator.Value(), &denom)
		denoms = append(denoms, denom)
	}
	return denoms
}

// IsDenomOwner checks if address is the owner of Denom
// Return the Denom if true, an error otherwise
func (k Keeper) IsDenomOwner(ctx sdk.Context, denomID string, address sdk.AccAddress) (types.Denom, error) {
	denom, err := k.GetDenom(ctx, denomID)
	if err != nil {
		return types.Denom{}, err
	}

	owner, err := sdk.AccAddressFromBech32(denom.Owner)
	if err != nil {
		panic(err)
	}

	if !owner.Equals(address) {
		return types.Denom{}, sdkerrors.Wrapf(types.ErrUnauthorized, "%s is not the owner of %s", address, denomID)
	}

	return denom, nil
}

// IssueDenom issues a denom according to the given params
func (k Keeper) IssueDenom(ctx sdk.Context,
	id, name, schema, uri string,
	creator sdk.AccAddress, accessMap map[string]bool) error {
	return k.SetDenom(ctx, types.NewDenom(id, name, schema, uri, creator, accessMap))
}

func (k Keeper) UpdateDenomAccessMap(ctx sdk.Context, denomID, hashName string) error {
	denom, err := k.GetDenom(ctx, denomID)
	if err != nil {
		return err
	}

	if len(denom.AccessMap) == 0 {
		temp := make(map[string]bool)
		temp[hashName] = true
		denom.AccessMap = temp
	} else {
		denom.AccessMap[hashName] = true
	}

	return k.UpdateDenom(ctx, denom)
}
