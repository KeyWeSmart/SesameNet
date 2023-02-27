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

func CmdNFT() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "token [denom-id] [token-id]",
		Long:    "Query a single NFT from a collection.",
		Example: fmt.Sprintf("$ %s query nft token <denom-id> <token-id>", types.BinaryName),
		Args:    cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			if err := types.ValidateDenomIDWithIBC(args[0]); err != nil {
				return err
			}

			if err := types.ValidateTokenID(args[1]); err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryNFTRequest{
				DenomId: args[0],
				TokenId: args[1],
			}

			res, err := queryClient.NFT(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
