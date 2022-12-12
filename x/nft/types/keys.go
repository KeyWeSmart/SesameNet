package types

import (
	"bytes"
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	// ModuleName defines the module name
	ModuleName = "nft"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_nft"

	BinaryName = "sesame"
)

var (
	PrefixNFT        = []byte{0x01}
	PrefixOwners     = []byte{0x02} // key for a owner
	PrefixCollection = []byte{0x03} // key for balance of NFTs held by the denom
	PrefixDenom      = []byte{0x04} // key for denom of the nft
	PrefixDenomName  = []byte{0x05} // key for denom name of the nft

	delimiter = []byte("|")
)

// SplitKeyOwner return the address,denom,id from the key of stored owner
func SplitKeyOwner(key []byte) (address sdk.AccAddress, denomID, tokenID string, err error) {
	key = key[len(PrefixOwners)+len(delimiter):]
	keys := bytes.Split(key, delimiter)
	if len(keys) != 3 {
		return address, denomID, tokenID, errors.New("wrong KeyOwner")
	}

	address, err = sdk.AccAddressFromBech32(string(keys[0]))

	if err != nil {
		return address, denomID, tokenID, err
	}

	denomID = string(keys[1])
	tokenID = string(keys[2])

	return
}

func SplitKeyDenom(key []byte) (denomID, tokenID string, err error) {
	keys := bytes.Split(key, delimiter)

	switch len(keys) {
	case 2:
		{
			denomID = string(keys[0])
			tokenID = string(keys[1])
		}
	case 3:
		{
			if string(keys[0]) == "ibc" {
				denomID = "ibc/" + string(keys[1])
				tokenID = string(keys[2])
			} else {
				return denomID, tokenID, errors.New("wrong KeyOwner")
			}
		}
	default:
		{
			return denomID, tokenID, errors.New("wrong KeyOwner")
		}
	}

	return
}

// KeyOwner gets the key of a collection owned by an account address
func KeyOwner(address sdk.AccAddress, denomID, tokenID string) []byte {
	key := append(PrefixOwners, delimiter...) // nolint:gocritic
	if address != nil {
		key = append(key, []byte(address.String())...)
		key = append(key, delimiter...)
	}

	if address != nil && len(denomID) > 0 {
		key = append(key, []byte(denomID)...)
		key = append(key, delimiter...)
	}

	if address != nil && len(denomID) > 0 && len(tokenID) > 0 {
		key = append(key, []byte(tokenID)...)
	}
	return key
}

// KeyNFT gets the key of nft stored by an denom and id
func KeyNFT(denomID, tokenID string) []byte {
	key := append(PrefixNFT, delimiter...) // nolint:gocritic
	if len(denomID) > 0 {
		key = append(key, []byte(denomID)...)
		key = append(key, delimiter...)
	}

	if len(denomID) > 0 && len(tokenID) > 0 {
		key = append(key, []byte(tokenID)...)
	}
	return key
}

// KeyCollection gets the storeKey by the collection
func KeyCollection(denomID string) []byte {
	key := append(PrefixCollection, delimiter...) // nolint:gocritic
	return append(key, []byte(denomID)...)
}

// KeyDenomID gets the storeKey by the denom id
func KeyDenomID(id string) []byte {
	key := append(PrefixDenom, delimiter...) // nolint:gocritic
	return append(key, []byte(id)...)
}

// KeyDenomName gets the storeKey by the denom name
func KeyDenomName(name string) []byte {
	key := append(PrefixDenomName, delimiter...) // nolint:gocritic
	return append(key, []byte(name)...)
}
