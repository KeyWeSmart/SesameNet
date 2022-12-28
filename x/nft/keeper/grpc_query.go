package keeper

import (
	"github.com/keywesmart/sesamenet/x/nft/types"
)

var _ types.QueryServer = Keeper{}
