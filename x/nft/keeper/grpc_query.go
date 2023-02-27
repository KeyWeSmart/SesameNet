package keeper

import (
	"sesamenet/x/nft/types"
)

var _ types.QueryServer = Keeper{}
