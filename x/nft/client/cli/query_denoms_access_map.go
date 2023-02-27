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

func CmdDenomsAccessMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "access-map [denom-id]",
		Short:   "Query access control map of an denomination",
		Example: fmt.Sprintf("$ %s query nft access-map <denom-id>", types.BinaryName),
		Args:    cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			err = types.ValidateDenomIDWithIBC(args[0])
			if err != nil {
				return
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryDenomsAccessMapRequest{
				DenomId: args[0],
			}

			res, err := queryClient.DenomsAccessMap(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
