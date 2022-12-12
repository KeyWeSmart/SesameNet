package cli

import (
	"fmt"
	"strconv"

	"sesamenet/x/nft/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdDenomsOfAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "address [address]",
		Short:   "Query all denominations of a specific address.",
		Example: fmt.Sprintf("$ %s query nft denom address <address>", types.BinaryName),
		Args:    cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryDenomsOfAddressRequest{
				Address: args[0],
			}

			res, err := queryClient.DenomsOfAddress(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
