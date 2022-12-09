import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgMintNFT } from "./types/sesamenet/nft/tx";
import { MsgTransferNFT } from "./types/sesamenet/nft/tx";
import { MsgIssueDenom } from "./types/sesamenet/nft/tx";
import { MsgEditNFT } from "./types/sesamenet/nft/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sesamenet.nft.MsgMintNFT", MsgMintNFT],
    ["/sesamenet.nft.MsgTransferNFT", MsgTransferNFT],
    ["/sesamenet.nft.MsgIssueDenom", MsgIssueDenom],
    ["/sesamenet.nft.MsgEditNFT", MsgEditNFT],
    
];

export { msgTypes }