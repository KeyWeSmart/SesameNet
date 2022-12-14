package nft

import (
	"math/rand"

	"github.com/keywesmart/sesamenet/testutil/sample"
	nftsimulation "github.com/keywesmart/sesamenet/x/nft/simulation"
	"github.com/keywesmart/sesamenet/x/nft/types"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = nftsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgIssueDenom = "op_weight_msg_issue_denom"
	// TODO: Determine the simulation weight value
	defaultWeightMsgIssueDenom int = 100

	opWeightMsgMintNFT = "op_weight_msg_mint_nft"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMintNFT int = 100

	opWeightMsgEditNFT = "op_weight_msg_edit_nft"
	// TODO: Determine the simulation weight value
	defaultWeightMsgEditNFT int = 100

	opWeightMsgTransferNFT = "op_weight_msg_transfer_nft"
	// TODO: Determine the simulation weight value
	defaultWeightMsgTransferNFT int = 100

	opWeightMsgBurnNFT = "op_weight_msg_burn_nft"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBurnNFT int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	nftGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&nftGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgIssueDenom int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgIssueDenom, &weightMsgIssueDenom, nil,
		func(_ *rand.Rand) {
			weightMsgIssueDenom = defaultWeightMsgIssueDenom
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgIssueDenom,
		nftsimulation.SimulateMsgIssueDenom(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMintNFT int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMintNFT, &weightMsgMintNFT, nil,
		func(_ *rand.Rand) {
			weightMsgMintNFT = defaultWeightMsgMintNFT
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMintNFT,
		nftsimulation.SimulateMsgMintNFT(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgEditNFT int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgEditNFT, &weightMsgEditNFT, nil,
		func(_ *rand.Rand) {
			weightMsgEditNFT = defaultWeightMsgEditNFT
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgEditNFT,
		nftsimulation.SimulateMsgEditNFT(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgTransferNFT int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgTransferNFT, &weightMsgTransferNFT, nil,
		func(_ *rand.Rand) {
			weightMsgTransferNFT = defaultWeightMsgTransferNFT
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgTransferNFT,
		nftsimulation.SimulateMsgTransferNFT(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBurnNFT int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBurnNFT, &weightMsgBurnNFT, nil,
		func(_ *rand.Rand) {
			weightMsgBurnNFT = defaultWeightMsgBurnNFT
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBurnNFT,
		nftsimulation.SimulateMsgBurnNFT(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
