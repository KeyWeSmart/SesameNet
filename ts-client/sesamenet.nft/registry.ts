import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgEditNFT } from "./types/sesamenet/nft/tx";
import { MsgMintNFT } from "./types/sesamenet/nft/tx";
import { MsgIssueDenom } from "./types/sesamenet/nft/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sesamenet.nft.MsgEditNFT", MsgEditNFT],
    ["/sesamenet.nft.MsgMintNFT", MsgMintNFT],
    ["/sesamenet.nft.MsgIssueDenom", MsgIssueDenom],
    
];

export { msgTypes }