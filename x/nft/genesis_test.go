package nft_test

import (
	"testing"

	keepertest "sesamenet/testutil/keeper"
	"sesamenet/testutil/nullify"
	"sesamenet/x/nft"
	"sesamenet/x/nft/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NftKeeper(t)
	nft.InitGenesis(ctx, *k, genesisState)
	got := nft.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
