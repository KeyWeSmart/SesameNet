// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgTransferNFT } from "./types/sesamenet/nft/tx";
import { MsgIssueDenom } from "./types/sesamenet/nft/tx";
import { MsgMintNFT } from "./types/sesamenet/nft/tx";
import { MsgEditNFT } from "./types/sesamenet/nft/tx";
import { MsgBurnNFT } from "./types/sesamenet/nft/tx";


export { MsgTransferNFT, MsgIssueDenom, MsgMintNFT, MsgEditNFT, MsgBurnNFT };

type sendMsgTransferNFTParams = {
  value: MsgTransferNFT,
  fee?: StdFee,
  memo?: string
};

type sendMsgIssueDenomParams = {
  value: MsgIssueDenom,
  fee?: StdFee,
  memo?: string
};

type sendMsgMintNFTParams = {
  value: MsgMintNFT,
  fee?: StdFee,
  memo?: string
};

type sendMsgEditNFTParams = {
  value: MsgEditNFT,
  fee?: StdFee,
  memo?: string
};

type sendMsgBurnNFTParams = {
  value: MsgBurnNFT,
  fee?: StdFee,
  memo?: string
};


type msgTransferNFTParams = {
  value: MsgTransferNFT,
};

type msgIssueDenomParams = {
  value: MsgIssueDenom,
};

type msgMintNFTParams = {
  value: MsgMintNFT,
};

type msgEditNFTParams = {
  value: MsgEditNFT,
};

type msgBurnNFTParams = {
  value: MsgBurnNFT,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgTransferNFT({ value, fee, memo }: sendMsgTransferNFTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTransferNFT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgTransferNFT({ value: MsgTransferNFT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTransferNFT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgIssueDenom({ value, fee, memo }: sendMsgIssueDenomParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgIssueDenom: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgIssueDenom({ value: MsgIssueDenom.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgIssueDenom: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgMintNFT({ value, fee, memo }: sendMsgMintNFTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgMintNFT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgMintNFT({ value: MsgMintNFT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgMintNFT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgEditNFT({ value, fee, memo }: sendMsgEditNFTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgEditNFT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgEditNFT({ value: MsgEditNFT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgEditNFT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgBurnNFT({ value, fee, memo }: sendMsgBurnNFTParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBurnNFT: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBurnNFT({ value: MsgBurnNFT.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBurnNFT: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgTransferNFT({ value }: msgTransferNFTParams): EncodeObject {
			try {
				return { typeUrl: "/sesamenet.nft.MsgTransferNFT", value: MsgTransferNFT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTransferNFT: Could not create message: ' + e.message)
			}
		},
		
		msgIssueDenom({ value }: msgIssueDenomParams): EncodeObject {
			try {
				return { typeUrl: "/sesamenet.nft.MsgIssueDenom", value: MsgIssueDenom.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgIssueDenom: Could not create message: ' + e.message)
			}
		},
		
		msgMintNFT({ value }: msgMintNFTParams): EncodeObject {
			try {
				return { typeUrl: "/sesamenet.nft.MsgMintNFT", value: MsgMintNFT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgMintNFT: Could not create message: ' + e.message)
			}
		},
		
		msgEditNFT({ value }: msgEditNFTParams): EncodeObject {
			try {
				return { typeUrl: "/sesamenet.nft.MsgEditNFT", value: MsgEditNFT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgEditNFT: Could not create message: ' + e.message)
			}
		},
		
		msgBurnNFT({ value }: msgBurnNFTParams): EncodeObject {
			try {
				return { typeUrl: "/sesamenet.nft.MsgBurnNFT", value: MsgBurnNFT.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBurnNFT: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			SesamenetNft: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;