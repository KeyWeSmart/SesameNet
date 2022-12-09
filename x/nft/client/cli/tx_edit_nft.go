package cli

import (
	"fmt"
	"strconv"

	"sesamenet/x/nft/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/version"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdEditNFT() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "edit [denom-id] [token-id]",
		Short: "Edit information of an existed NFT",
		Example: fmt.Sprintf(
			"$ %s tx nft edit <denom-id> <token-id> "+
				"--uri=<uri> "+
				"--from=<key-name> "+
				"--chain-id=<chain-id> "+
				"--fees=<fee>",
			version.Name,
		),
		Args: cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			tokenName, err := cmd.Flags().GetString(FlagTokenName)
			if err != nil {
				return err
			}
			tokenURI, err := cmd.Flags().GetString(FlagTokenURI)
			if err != nil {
				return err
			}
			tokenData, err := cmd.Flags().GetString(FlagTokenData)
			if err != nil {
				return err
			}

			msg := types.NewMsgEditNFT(
				clientCtx.GetFromAddress().String(),
				args[1],
				args[0],
				tokenName,
				tokenURI,
				tokenData,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	cmd.Flags().AddFlagSet(FsEditNFT)
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
