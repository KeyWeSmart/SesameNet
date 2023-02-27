package utils

import (
	"crypto/sha256"
	"encoding/hex"
)

// SHA256 hash the NFT id & name for denom access control map
func CreateAccessMapTokenHash(denomID, tokenID string) string {
	h := sha256.New()
	preString := denomID + tokenID
	h.Write([]byte(preString))
	bs := h.Sum(nil)
	hashResult := hex.EncodeToString(bs)

	return hashResult
}
