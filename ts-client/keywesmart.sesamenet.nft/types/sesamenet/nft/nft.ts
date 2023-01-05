/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "keywesmart.sesamenet.nft";

/** BaseNFT defines a non-fungible token */
export interface BaseNFT {
  id: string;
  name: string;
  uri: string;
  data: string;
  owner: string;
}

/** Denom defines a type of NFT */
export interface Denom {
  id: string;
  name: string;
  schema: string;
  owner: string;
  /** This was added because Cosmos SDK's native NFT module has uri as a parameter for class which is needed for nft transfers */
  uri: string;
  /** This field represent all device (nft) that can access to this doorlock (denom) */
  accessMap: { [key: string]: boolean };
}

export interface Denom_AccessMapEntry {
  key: string;
  value: boolean;
}

export interface QueryDenom {
  id: string;
  name: string;
  schema: string;
  owner: string;
  /** This was added because Cosmos SDK's native NFT module has uri as a parameter for class which is needed for nft transfers */
  uri: string;
}

/** IDCollection defines a type of collection with specified ID */
export interface IDCollection {
  denomId: string;
  tokenIds: string[];
}

/** Owner defines a type of owner */
export interface Owner {
  address: string;
  idCollections: IDCollection[];
}

/** Collection defines a type of collection */
export interface Collection {
  denom: Denom | undefined;
  nfts: BaseNFT[];
}

export interface QueryCollection {
  denom: QueryDenom | undefined;
  nfts: BaseNFT[];
}

function createBaseBaseNFT(): BaseNFT {
  return { id: "", name: "", uri: "", data: "", owner: "" };
}

export const BaseNFT = {
  encode(message: BaseNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseNFT();
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
          message.uri = reader.string();
          break;
        case 4:
          message.data = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      data: isSet(object.data) ? String(object.data) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: BaseNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.data !== undefined && (obj.data = message.data);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BaseNFT>, I>>(object: I): BaseNFT {
    const message = createBaseBaseNFT();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.data = object.data ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseDenom(): Denom {
  return { id: "", name: "", schema: "", owner: "", uri: "", accessMap: {} };
}

export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    Object.entries(message.accessMap).forEach(([key, value]) => {
      Denom_AccessMapEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
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
          message.owner = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          const entry6 = Denom_AccessMapEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.accessMap[entry6.key] = entry6.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Denom {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      schema: isSet(object.schema) ? String(object.schema) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      accessMap: isObject(object.accessMap)
        ? Object.entries(object.accessMap).reduce<{ [key: string]: boolean }>((acc, [key, value]) => {
          acc[key] = Boolean(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Denom): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.schema !== undefined && (obj.schema = message.schema);
    message.owner !== undefined && (obj.owner = message.owner);
    message.uri !== undefined && (obj.uri = message.uri);
    obj.accessMap = {};
    if (message.accessMap) {
      Object.entries(message.accessMap).forEach(([k, v]) => {
        obj.accessMap[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Denom>, I>>(object: I): Denom {
    const message = createBaseDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.schema = object.schema ?? "";
    message.owner = object.owner ?? "";
    message.uri = object.uri ?? "";
    message.accessMap = Object.entries(object.accessMap ?? {}).reduce<{ [key: string]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Boolean(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseDenom_AccessMapEntry(): Denom_AccessMapEntry {
  return { key: "", value: false };
}

export const Denom_AccessMapEntry = {
  encode(message: Denom_AccessMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Denom_AccessMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom_AccessMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Denom_AccessMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false,
    };
  },

  toJSON(message: Denom_AccessMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Denom_AccessMapEntry>, I>>(object: I): Denom_AccessMapEntry {
    const message = createBaseDenom_AccessMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseQueryDenom(): QueryDenom {
  return { id: "", name: "", schema: "", owner: "", uri: "" };
}

export const QueryDenom = {
  encode(message: QueryDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenom();
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
          message.owner = reader.string();
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

  fromJSON(object: any): QueryDenom {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      schema: isSet(object.schema) ? String(object.schema) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
    };
  },

  toJSON(message: QueryDenom): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.schema !== undefined && (obj.schema = message.schema);
    message.owner !== undefined && (obj.owner = message.owner);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenom>, I>>(object: I): QueryDenom {
    const message = createBaseQueryDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.schema = object.schema ?? "";
    message.owner = object.owner ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

function createBaseIDCollection(): IDCollection {
  return { denomId: "", tokenIds: [] };
}

export const IDCollection = {
  encode(message: IDCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    for (const v of message.tokenIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.tokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IDCollection {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      tokenIds: Array.isArray(object?.tokenIds) ? object.tokenIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: IDCollection): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IDCollection>, I>>(object: I): IDCollection {
    const message = createBaseIDCollection();
    message.denomId = object.denomId ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseOwner(): Owner {
  return { address: "", idCollections: [] };
}

export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.idCollections) {
      IDCollection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.idCollections.push(IDCollection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Owner {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      idCollections: Array.isArray(object?.idCollections)
        ? object.idCollections.map((e: any) => IDCollection.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.idCollections) {
      obj.idCollections = message.idCollections.map((e) => e ? IDCollection.toJSON(e) : undefined);
    } else {
      obj.idCollections = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Owner>, I>>(object: I): Owner {
    const message = createBaseOwner();
    message.address = object.address ?? "";
    message.idCollections = object.idCollections?.map((e) => IDCollection.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCollection(): Collection {
  return { denom: undefined, nfts: [] };
}

export const Collection = {
  encode(message: Collection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nfts) {
      BaseNFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        case 2:
          message.nfts.push(BaseNFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Collection {
    return {
      denom: isSet(object.denom) ? Denom.fromJSON(object.denom) : undefined,
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => BaseNFT.fromJSON(e)) : [],
    };
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => e ? BaseNFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Collection>, I>>(object: I): Collection {
    const message = createBaseCollection();
    message.denom = (object.denom !== undefined && object.denom !== null) ? Denom.fromPartial(object.denom) : undefined;
    message.nfts = object.nfts?.map((e) => BaseNFT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryCollection(): QueryCollection {
  return { denom: undefined, nfts: [] };
}

export const QueryCollection = {
  encode(message: QueryCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      QueryDenom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nfts) {
      BaseNFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = QueryDenom.decode(reader, reader.uint32());
          break;
        case 2:
          message.nfts.push(BaseNFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollection {
    return {
      denom: isSet(object.denom) ? QueryDenom.fromJSON(object.denom) : undefined,
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => BaseNFT.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryCollection): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? QueryDenom.toJSON(message.denom) : undefined);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => e ? BaseNFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollection>, I>>(object: I): QueryCollection {
    const message = createBaseQueryCollection();
    message.denom = (object.denom !== undefined && object.denom !== null)
      ? QueryDenom.fromPartial(object.denom)
      : undefined;
    message.nfts = object.nfts?.map((e) => BaseNFT.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
