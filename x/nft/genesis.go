package nft

import (
	"github.com/keywesmart/sesamenet/x/nft/keeper"
	"github.com/keywesmart/sesamenet/x/nft/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	if err := genState.Validate(); err != nil {
		panic(err.Error())
	}

	for _, c := range genState.Collections {
		if err := k.SetDenom(ctx, c.Denom); err != nil {
			panic(err)
		}

		if err := k.SetGenesisCollection(ctx, c); err != nil {
			panic(err)
		}
	}
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	// this line is used by starport scaffolding # genesis/module/export
	return types.NewGenesisState(k.GetCollections(ctx))
}
