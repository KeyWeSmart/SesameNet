/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "keywesmart.sesamenet.nft";

export interface MsgIssueDenom {
  id: string;
  name: string;
  schema: string;
  sender: string;
  uri: string;
}

export interface MsgIssueDenomResponse {
}

export interface MsgMintNFT {
  id: string;
  denomId: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  recipient: string;
}

export interface MsgMintNFTResponse {
}

export interface MsgEditNFT {
  id: string;
  denomId: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
}

export interface MsgEditNFTResponse {
}

export interface MsgTransferNFT {
  id: string;
  denomId: string;
  sender: string;
  recipient: string;
}

export interface MsgTransferNFTResponse {
}

export interface MsgBurnNFT {
  id: string;
  denomId: string;
  sender: string;
}

export interface MsgBurnNFTResponse {
}

function createBaseMsgIssueDenom(): MsgIssueDenom {
  return { id: "", name: "", schema: "", sender: "", uri: "" };
}

export const MsgIssueDenom = {
  encode(message: MsgIssueDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.schema = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueDenom {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      schema: isSet(object.schema) ? String(object.schema) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
    };
  },

  toJSON(message: MsgIssueDenom): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.schema !== undefined && (obj.schema = message.schema);
    message.sender !== undefined && (obj.sender = message.sender);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueDenom>, I>>(object: I): MsgIssueDenom {
    const message = createBaseMsgIssueDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.schema = object.schema ?? "";
    message.sender = object.sender ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

function createBaseMsgIssueDenomResponse(): MsgIssueDenomResponse {
  return {};
}

export const MsgIssueDenomResponse = {
  encode(_: MsgIssueDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgIssueDenomResponse {
    return {};
  },

  toJSON(_: MsgIssueDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueDenomResponse>, I>>(_: I): MsgIssueDenomResponse {
    const message = createBaseMsgIssueDenomResponse();
    return message;
  },
};

function createBaseMsgMintNFT(): MsgMintNFT {
  return { id: "", denomId: "", name: "", uri: "", data: "", sender: "", recipient: "" };
}

export const MsgMintNFT = {
  encode(message: MsgMintNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.sender = reader.string();
          break;
        case 7:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      data: isSet(object.data) ? String(object.data) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgMintNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.data !== undefined && (obj.data = message.data);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFT>, I>>(object: I): MsgMintNFT {
    const message = createBaseMsgMintNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.data = object.data ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return {};
}

export const MsgMintNFTResponse = {
  encode(_: MsgMintNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMintNFTResponse {
    return {};
  },

  toJSON(_: MsgMintNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFTResponse>, I>>(_: I): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    return message;
  },
};

function createBaseMsgEditNFT(): MsgEditNFT {
  return { id: "", denomId: "", name: "", uri: "", data: "", sender: "" };
}

export const MsgEditNFT = {
  encode(message: MsgEditNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      data: isSet(object.data) ? String(object.data) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgEditNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.data !== undefined && (obj.data = message.data);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditNFT>, I>>(object: I): MsgEditNFT {
    const message = createBaseMsgEditNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.data = object.data ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgEditNFTResponse(): MsgEditNFTResponse {
  return {};
}

export const MsgEditNFTResponse = {
  encode(_: MsgEditNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgEditNFTResponse {
    return {};
  },

  toJSON(_: MsgEditNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditNFTResponse>, I>>(_: I): MsgEditNFTResponse {
    const message = createBaseMsgEditNFTResponse();
    return message;
  },
};

function createBaseMsgTransferNFT(): MsgTransferNFT {
  return { id: "", denomId: "", sender: "", recipient: "" };
}

export const MsgTransferNFT = {
  encode(message: MsgTransferNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgTransferNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFT>, I>>(object: I): MsgTransferNFT {
    const message = createBaseMsgTransferNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgTransferNFTResponse(): MsgTransferNFTResponse {
  return {};
}

export const MsgTransferNFTResponse = {
  encode(_: MsgTransferNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTransferNFTResponse {
    return {};
  },

  toJSON(_: MsgTransferNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFTResponse>, I>>(_: I): MsgTransferNFTResponse {
    const message = createBaseMsgTransferNFTResponse();
    return message;
  },
};

function createBaseMsgBurnNFT(): MsgBurnNFT {
  return { id: "", denomId: "", sender: "" };
}

export const MsgBurnNFT = {
  encode(message: MsgBurnNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgBurnNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFT>, I>>(object: I): MsgBurnNFT {
    const message = createBaseMsgBurnNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgBurnNFTResponse(): MsgBurnNFTResponse {
  return {};
}

export const MsgBurnNFTResponse = {
  encode(_: MsgBurnNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBurnNFTResponse {
    return {};
  },

  toJSON(_: MsgBurnNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFTResponse>, I>>(_: I): MsgBurnNFTResponse {
    const message = createBaseMsgBurnNFTResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  IssueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse>;
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  EditNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse>;
  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IssueDenom = this.IssueDenom.bind(this);
    this.MintNFT = this.MintNFT.bind(this);
    this.EditNFT = this.EditNFT.bind(this);
    this.TransferNFT = this.TransferNFT.bind(this);
    this.BurnNFT = this.BurnNFT.bind(this);
  }
  IssueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse> {
    const data = MsgIssueDenom.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Msg", "IssueDenom", data);
    return promise.then((data) => MsgIssueDenomResponse.decode(new _m0.Reader(data)));
  }

  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Msg", "MintNFT", data);
    return promise.then((data) => MsgMintNFTResponse.decode(new _m0.Reader(data)));
  }

  EditNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse> {
    const data = MsgEditNFT.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Msg", "EditNFT", data);
    return promise.then((data) => MsgEditNFTResponse.decode(new _m0.Reader(data)));
  }

  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse> {
    const data = MsgTransferNFT.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Msg", "TransferNFT", data);
    return promise.then((data) => MsgTransferNFTResponse.decode(new _m0.Reader(data)));
  }

  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Msg", "BurnNFT", data);
    return promise.then((data) => MsgBurnNFTResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
