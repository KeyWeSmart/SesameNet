package cli

import (
	"fmt"
	"strconv"

	"sesamenet/x/nft/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdTransferNFT() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "transfer [recipient] [denom-id] [token-id]",
		Short: "Transfer an NFT to a recipient",
		Example: fmt.Sprintf(
			"$ %s tx nft token transfer <recipient> <denom-id> <token-id> --from=<key-name>",
			types.BinaryName,
		),
		Args: cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			if _, err := sdk.AccAddressFromBech32(args[0]); err != nil {
				return err
			}

			msg := types.NewMsgTransferNFT(
				clientCtx.GetFromAddress().String(),
				args[2],
				args[1],
				args[0],
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	cmd.Flags().AddFlagSet(FsTransferNFT)
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
