package cli

import (
	"fmt"
	"strconv"

	"github.com/keywesmart/sesamenet/x/nft/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdDenom() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "denom [denom-id]",
		Long:    "Query the denom by the specified denom id.",
		Example: fmt.Sprintf("$ %s query nft denom <denom-id>", types.BinaryName),
		Args:    cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			if err := types.ValidateDenomIDWithIBC(args[0]); err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryDenomRequest{
				DenomId: args[0],
			}

			res, err := queryClient.Denom(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
