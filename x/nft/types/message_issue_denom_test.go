package types

import (
	"testing"

	"github.com/keywesmart/sesamenet/testutil/sample"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgIssueDenom_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgIssueDenom
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgIssueDenom{
				Sender: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgIssueDenom{
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
