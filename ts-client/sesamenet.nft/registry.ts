import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgIssueDenom } from "./types/sesamenet/nft/tx";
import { MsgMintNFT } from "./types/sesamenet/nft/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sesamenet.nft.MsgIssueDenom", MsgIssueDenom],
    ["/sesamenet.nft.MsgMintNFT", MsgMintNFT],
    
];

export { msgTypes }