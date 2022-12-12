package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"sesamenet/x/nft/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group nft queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(
		CmdQueryParams(),
		CmdSupply(),
		CmdCollection(),
		GetDenomQueryCmd(),
		GetTokenQueryCmd(),
	)

	// this line is used by starport scaffolding # 1

	return cmd
}

func GetDenomQueryCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "denom",
		Short:                      "All subcommands for denominations querying of NFT module",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(
		CmdDenom(),
		CmdDenomByName(),
		CmdDenoms(),
	)

	return cmd
}

func GetTokenQueryCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "token",
		Short:                      "All subcommands for tokens querying of NFT module",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(
		CmdOwner(),
		CmdNFT(),
	)

	return cmd
}
