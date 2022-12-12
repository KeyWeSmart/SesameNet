import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgBurnNFT } from "./types/sesamenet/nft/tx";
import { MsgEditNFT } from "./types/sesamenet/nft/tx";
import { MsgIssueDenom } from "./types/sesamenet/nft/tx";
import { MsgMintNFT } from "./types/sesamenet/nft/tx";
import { MsgTransferNFT } from "./types/sesamenet/nft/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sesamenet.nft.MsgBurnNFT", MsgBurnNFT],
    ["/sesamenet.nft.MsgEditNFT", MsgEditNFT],
    ["/sesamenet.nft.MsgIssueDenom", MsgIssueDenom],
    ["/sesamenet.nft.MsgMintNFT", MsgMintNFT],
    ["/sesamenet.nft.MsgTransferNFT", MsgTransferNFT],
    
];

export { msgTypes }