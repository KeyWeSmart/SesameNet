package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/nft module sentinel errors
var (
	ErrInvalidCollection = sdkerrors.Register(ModuleName, 102, "invalid nft collection")
	ErrUnknownCollection = sdkerrors.Register(ModuleName, 103, "unknown nft collection")
	ErrInvalidNFT        = sdkerrors.Register(ModuleName, 104, "invalid nft")
	ErrNFTAlreadyExists  = sdkerrors.Register(ModuleName, 105, "nft already exists")
	ErrUnknownNFT        = sdkerrors.Register(ModuleName, 106, "unknown nft")
	ErrEmptyTokenData    = sdkerrors.Register(ModuleName, 107, "nft data can't be empty")
	ErrUnauthorized      = sdkerrors.Register(ModuleName, 108, "unauthorized address")
	ErrInvalidDenom      = sdkerrors.Register(ModuleName, 109, "invalid denom")
	ErrInvalidTokenID    = sdkerrors.Register(ModuleName, 110, "invalid nft id")
	ErrInvalidTokenURI   = sdkerrors.Register(ModuleName, 111, "invalid nft uri")
	ErrInvalidDenomName  = sdkerrors.Register(ModuleName, 112, "invalid denom name")
)
