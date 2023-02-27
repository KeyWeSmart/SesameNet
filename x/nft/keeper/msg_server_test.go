package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/keywesmart/sesamenet/testutil/keeper"
	"github.com/keywesmart/sesamenet/x/nft/keeper"
	"github.com/keywesmart/sesamenet/x/nft/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NftKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
