package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/keywesmart/sesamenet/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgEditNFT_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgEditNFT
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgEditNFT{
				Sender: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgEditNFT{
				Sender: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
