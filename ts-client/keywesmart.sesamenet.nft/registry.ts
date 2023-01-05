import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgIssueDenom } from "./types/sesamenet/nft/tx";
import { MsgMintNFT } from "./types/sesamenet/nft/tx";
import { MsgTransferNFT } from "./types/sesamenet/nft/tx";
import { MsgBurnNFT } from "./types/sesamenet/nft/tx";
import { MsgEditNFT } from "./types/sesamenet/nft/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/keywesmart.sesamenet.nft.MsgIssueDenom", MsgIssueDenom],
    ["/keywesmart.sesamenet.nft.MsgMintNFT", MsgMintNFT],
    ["/keywesmart.sesamenet.nft.MsgTransferNFT", MsgTransferNFT],
    ["/keywesmart.sesamenet.nft.MsgBurnNFT", MsgBurnNFT],
    ["/keywesmart.sesamenet.nft.MsgEditNFT", MsgEditNFT],
    
];

export { msgTypes }