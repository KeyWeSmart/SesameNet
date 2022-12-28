package cli

import (
	"fmt"
	"strconv"

	"github.com/keywesmart/sesamenet/x/nft/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdBurnNFT() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "burn [denom-id] [token-id]",
		Short: "Burn a NFT",
		Example: fmt.Sprintf(
			"$ %s tx nft token burn <denom-id> <token-id> --from=<key-name>",
			types.BinaryName,
		),
		Args: cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBurnNFT(
				clientCtx.GetFromAddress().String(),
				args[1],
				args[0],
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	cmd.Flags().AddFlagSet(FsBurnNFT)
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
