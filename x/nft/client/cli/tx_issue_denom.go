package cli

import (
	"fmt"
	"os"
	"strconv"

	"github.com/keywesmart/sesamenet/x/nft/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdIssueDenom() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "issue [denom-id]",
		Short: "Issue new NFT denomination",
		Example: fmt.Sprintf(
			"$ %s tx nft denom issue <denom-id> "+
				"--name=<denom-name> "+
				"--schema=<schema-content or path to schema.json> "+
				"--uri=<uri of denom> "+
				"--from=<key-name>",
			types.BinaryName,
		),
		Args: cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			denomName, err := cmd.Flags().GetString(FlagDenomName)
			if err != nil {
				return err
			}
			schema, err := cmd.Flags().GetString(FlagSchema)
			if err != nil {
				return err
			}
			uri, err := cmd.Flags().GetString(FlagDenomURI)
			if err != nil {
				return err
			}
			optionsContent, err := os.ReadFile(schema)
			if err == nil {
				schema = string(optionsContent)
			}

			msg := types.NewMsgIssueDenom(
				clientCtx.GetFromAddress().String(),
				args[0],
				denomName,
				schema,
				uri,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	cmd.Flags().AddFlagSet(FsIssueDenom)
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
