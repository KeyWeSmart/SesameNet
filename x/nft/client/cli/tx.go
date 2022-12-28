package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/keywesmart/sesamenet/x/nft/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(
		GetDenomTxCmd(),
		GetTokenTxCmd(),
	)
	// this line is used by starport scaffolding # 1

	return cmd
}

func GetDenomTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "denom",
		Short:                      "All subcommands for denomination transaction of NFT module",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdIssueDenom())

	return cmd
}

func GetTokenTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        "token",
		Short:                      "All subcommands for token transaction of NFT module",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(
		CmdMintNFT(),
		CmdEditNFT(),
		CmdTransferNFT(),
		CmdBurnNFT(),
	)

	return cmd
}
