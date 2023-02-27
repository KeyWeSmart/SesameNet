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

func CmdDenomByName() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "name [denom-name]",
		Short:   "Query the denom by the specified denom name.",
		Example: fmt.Sprintf("$ %s query nft denom name <denom-name>", types.BinaryName),
		Args:    cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			if err := types.ValidateDenomName(args[0]); err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryDenomByNameRequest{
				DenomName: args[0],
			}

			res, err := queryClient.DenomByName(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
