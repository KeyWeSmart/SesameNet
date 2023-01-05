/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { BaseNFT, Owner, QueryCollection, QueryDenom } from "./nft";
import { Params } from "./params";

export const protobufPackage = "keywesmart.sesamenet.nft";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QuerySupplyRequest {
  denomId: string;
  owner: string;
}

export interface QuerySupplyResponse {
  amount: number;
}

export interface QueryOwnerRequest {
  denomId: string;
  owner: string;
  pagination: PageRequest | undefined;
}

export interface QueryOwnerResponse {
  owner: Owner | undefined;
  pagination: PageResponse | undefined;
}

export interface QueryCollectionRequest {
  denomId: string;
  pagination: PageRequest | undefined;
}

export interface QueryCollectionResponse {
  collection: QueryCollection | undefined;
  pagination: PageResponse | undefined;
}

export interface QueryDenomRequest {
  denomId: string;
}

export interface QueryDenomResponse {
  denom: QueryDenom | undefined;
}

export interface QueryDenomByNameRequest {
  denomName: string;
}

export interface QueryDenomByNameResponse {
  denom: QueryDenom | undefined;
}

export interface QueryDenomsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryDenomsResponse {
  denoms: QueryDenom[];
  pagination: PageResponse | undefined;
}

export interface QueryNFTRequest {
  denomId: string;
  tokenId: string;
}

export interface QueryNFTResponse {
  nft: BaseNFT | undefined;
}

export interface QueryDenomsOfAddressRequest {
  address: string;
}

export interface QueryDenomsOfAddressResponse {
  denoms: QueryDenom[];
}

export interface QueryDenomsAccessMapRequest {
  denomId: string;
}

export interface QueryDenomsAccessMapResponse {
  accessMap: { [key: string]: boolean };
}

export interface QueryDenomsAccessMapResponse_AccessMapEntry {
  key: string;
  value: boolean;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return { denomId: "", owner: "" };
}

export const QuerySupplyRequest = {
  encode(message: QuerySupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(object: I): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return { amount: 0 };
}

export const QuerySupplyResponse = {
  encode(message: QuerySupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyResponse {
    return { amount: isSet(object.amount) ? Number(object.amount) : 0 };
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(object: I): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return { denomId: "", owner: "", pagination: undefined };
}

export const QueryOwnerRequest = {
  encode(message: QueryOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryOwnerRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerRequest>, I>>(object: I): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return { owner: undefined, pagination: undefined };
}

export const QueryOwnerResponse = {
  encode(message: QueryOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = Owner.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerResponse {
    return {
      owner: isSet(object.owner) ? Owner.fromJSON(object.owner) : undefined,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryOwnerResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner ? Owner.toJSON(message.owner) : undefined);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerResponse>, I>>(object: I): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = (object.owner !== undefined && object.owner !== null) ? Owner.fromPartial(object.owner) : undefined;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return { denomId: "", pagination: undefined };
}

export const QueryCollectionRequest = {
  encode(message: QueryCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCollectionRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionRequest>, I>>(object: I): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.denomId = object.denomId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return { collection: undefined, pagination: undefined };
}

export const QueryCollectionResponse = {
  encode(message: QueryCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collection !== undefined) {
      QueryCollection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = QueryCollection.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionResponse {
    return {
      collection: isSet(object.collection) ? QueryCollection.fromJSON(object.collection) : undefined,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined
      && (obj.collection = message.collection ? QueryCollection.toJSON(message.collection) : undefined);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionResponse>, I>>(object: I): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    message.collection = (object.collection !== undefined && object.collection !== null)
      ? QueryCollection.fromPartial(object.collection)
      : undefined;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDenomRequest(): QueryDenomRequest {
  return { denomId: "" };
}

export const QueryDenomRequest = {
  encode(message: QueryDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomRequest {
    return { denomId: isSet(object.denomId) ? String(object.denomId) : "" };
  },

  toJSON(message: QueryDenomRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomRequest>, I>>(object: I): QueryDenomRequest {
    const message = createBaseQueryDenomRequest();
    message.denomId = object.denomId ?? "";
    return message;
  },
};

function createBaseQueryDenomResponse(): QueryDenomResponse {
  return { denom: undefined };
}

export const QueryDenomResponse = {
  encode(message: QueryDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      QueryDenom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = QueryDenom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomResponse {
    return { denom: isSet(object.denom) ? QueryDenom.fromJSON(object.denom) : undefined };
  },

  toJSON(message: QueryDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? QueryDenom.toJSON(message.denom) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomResponse>, I>>(object: I): QueryDenomResponse {
    const message = createBaseQueryDenomResponse();
    message.denom = (object.denom !== undefined && object.denom !== null)
      ? QueryDenom.fromPartial(object.denom)
      : undefined;
    return message;
  },
};

function createBaseQueryDenomByNameRequest(): QueryDenomByNameRequest {
  return { denomName: "" };
}

export const QueryDenomByNameRequest = {
  encode(message: QueryDenomByNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomName !== "") {
      writer.uint32(10).string(message.denomName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomByNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomByNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomByNameRequest {
    return { denomName: isSet(object.denomName) ? String(object.denomName) : "" };
  },

  toJSON(message: QueryDenomByNameRequest): unknown {
    const obj: any = {};
    message.denomName !== undefined && (obj.denomName = message.denomName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomByNameRequest>, I>>(object: I): QueryDenomByNameRequest {
    const message = createBaseQueryDenomByNameRequest();
    message.denomName = object.denomName ?? "";
    return message;
  },
};

function createBaseQueryDenomByNameResponse(): QueryDenomByNameResponse {
  return { denom: undefined };
}

export const QueryDenomByNameResponse = {
  encode(message: QueryDenomByNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      QueryDenom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomByNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomByNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = QueryDenom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomByNameResponse {
    return { denom: isSet(object.denom) ? QueryDenom.fromJSON(object.denom) : undefined };
  },

  toJSON(message: QueryDenomByNameResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? QueryDenom.toJSON(message.denom) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomByNameResponse>, I>>(object: I): QueryDenomByNameResponse {
    const message = createBaseQueryDenomByNameResponse();
    message.denom = (object.denom !== undefined && object.denom !== null)
      ? QueryDenom.fromPartial(object.denom)
      : undefined;
    return message;
  },
};

function createBaseQueryDenomsRequest(): QueryDenomsRequest {
  return { pagination: undefined };
}

export const QueryDenomsRequest = {
  encode(message: QueryDenomsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryDenomsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsRequest>, I>>(object: I): QueryDenomsRequest {
    const message = createBaseQueryDenomsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDenomsResponse(): QueryDenomsResponse {
  return { denoms: [], pagination: undefined };
}

export const QueryDenomsResponse = {
  encode(message: QueryDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      QueryDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(QueryDenom.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsResponse {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => QueryDenom.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDenomsResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e ? QueryDenom.toJSON(e) : undefined);
    } else {
      obj.denoms = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsResponse>, I>>(object: I): QueryDenomsResponse {
    const message = createBaseQueryDenomsResponse();
    message.denoms = object.denoms?.map((e) => QueryDenom.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryNFTRequest(): QueryNFTRequest {
  return { denomId: "", tokenId: "" };
}

export const QueryNFTRequest = {
  encode(message: QueryNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTRequest>, I>>(object: I): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.denomId = object.denomId ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryNFTResponse(): QueryNFTResponse {
  return { nft: undefined };
}

export const QueryNFTResponse = {
  encode(message: QueryNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nft !== undefined) {
      BaseNFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = BaseNFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTResponse {
    return { nft: isSet(object.nft) ? BaseNFT.fromJSON(object.nft) : undefined };
  },

  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? BaseNFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTResponse>, I>>(object: I): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.nft = (object.nft !== undefined && object.nft !== null) ? BaseNFT.fromPartial(object.nft) : undefined;
    return message;
  },
};

function createBaseQueryDenomsOfAddressRequest(): QueryDenomsOfAddressRequest {
  return { address: "" };
}

export const QueryDenomsOfAddressRequest = {
  encode(message: QueryDenomsOfAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsOfAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsOfAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsOfAddressRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryDenomsOfAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsOfAddressRequest>, I>>(object: I): QueryDenomsOfAddressRequest {
    const message = createBaseQueryDenomsOfAddressRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryDenomsOfAddressResponse(): QueryDenomsOfAddressResponse {
  return { denoms: [] };
}

export const QueryDenomsOfAddressResponse = {
  encode(message: QueryDenomsOfAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      QueryDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsOfAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsOfAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(QueryDenom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsOfAddressResponse {
    return { denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => QueryDenom.fromJSON(e)) : [] };
  },

  toJSON(message: QueryDenomsOfAddressResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e ? QueryDenom.toJSON(e) : undefined);
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsOfAddressResponse>, I>>(object: I): QueryDenomsOfAddressResponse {
    const message = createBaseQueryDenomsOfAddressResponse();
    message.denoms = object.denoms?.map((e) => QueryDenom.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDenomsAccessMapRequest(): QueryDenomsAccessMapRequest {
  return { denomId: "" };
}

export const QueryDenomsAccessMapRequest = {
  encode(message: QueryDenomsAccessMapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsAccessMapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsAccessMapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsAccessMapRequest {
    return { denomId: isSet(object.denomId) ? String(object.denomId) : "" };
  },

  toJSON(message: QueryDenomsAccessMapRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsAccessMapRequest>, I>>(object: I): QueryDenomsAccessMapRequest {
    const message = createBaseQueryDenomsAccessMapRequest();
    message.denomId = object.denomId ?? "";
    return message;
  },
};

function createBaseQueryDenomsAccessMapResponse(): QueryDenomsAccessMapResponse {
  return { accessMap: {} };
}

export const QueryDenomsAccessMapResponse = {
  encode(message: QueryDenomsAccessMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.accessMap).forEach(([key, value]) => {
      QueryDenomsAccessMapResponse_AccessMapEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsAccessMapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsAccessMapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          const entry6 = QueryDenomsAccessMapResponse_AccessMapEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryDenomsAccessMapResponse {
    return {
      accessMap: isObject(object.accessMap)
        ? Object.entries(object.accessMap).reduce<{ [key: string]: boolean }>((acc, [key, value]) => {
          acc[key] = Boolean(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: QueryDenomsAccessMapResponse): unknown {
    const obj: any = {};
    obj.accessMap = {};
    if (message.accessMap) {
      Object.entries(message.accessMap).forEach(([k, v]) => {
        obj.accessMap[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsAccessMapResponse>, I>>(object: I): QueryDenomsAccessMapResponse {
    const message = createBaseQueryDenomsAccessMapResponse();
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

function createBaseQueryDenomsAccessMapResponse_AccessMapEntry(): QueryDenomsAccessMapResponse_AccessMapEntry {
  return { key: "", value: false };
}

export const QueryDenomsAccessMapResponse_AccessMapEntry = {
  encode(message: QueryDenomsAccessMapResponse_AccessMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsAccessMapResponse_AccessMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsAccessMapResponse_AccessMapEntry();
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

  fromJSON(object: any): QueryDenomsAccessMapResponse_AccessMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false,
    };
  },

  toJSON(message: QueryDenomsAccessMapResponse_AccessMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsAccessMapResponse_AccessMapEntry>, I>>(
    object: I,
  ): QueryDenomsAccessMapResponse_AccessMapEntry {
    const message = createBaseQueryDenomsAccessMapResponse_AccessMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Supply items. */
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /** Queries a list of Owner items. */
  Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
  /** Queries a list of Collection items. */
  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
  /** Queries a list of Denom items. */
  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
  /** Queries a list of DenomByName items. */
  DenomByName(request: QueryDenomByNameRequest): Promise<QueryDenomByNameResponse>;
  /** Queries a list of Denoms items. */
  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
  /** Queries a list of NFT items. */
  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
  /** Queries a list of DenomsOfAddress items. */
  DenomsOfAddress(request: QueryDenomsOfAddressRequest): Promise<QueryDenomsOfAddressResponse>;
  /** Queries a list of DenomsAccessMap items. */
  DenomsAccessMap(request: QueryDenomsAccessMapRequest): Promise<QueryDenomsAccessMapResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Supply = this.Supply.bind(this);
    this.Owner = this.Owner.bind(this);
    this.Collection = this.Collection.bind(this);
    this.Denom = this.Denom.bind(this);
    this.DenomByName = this.DenomByName.bind(this);
    this.Denoms = this.Denoms.bind(this);
    this.NFT = this.NFT.bind(this);
    this.DenomsOfAddress = this.DenomsOfAddress.bind(this);
    this.DenomsAccessMap = this.DenomsAccessMap.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Query", "Supply", data);
    return promise.then((data) => QuerySupplyResponse.decode(new _m0.Reader(data)));
  }

  Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse> {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Query", "Owner", data);
    return promise.then((data) => QueryOwnerResponse.decode(new _m0.Reader(data)));
  }

  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Query", "Collection", data);
    return promise.then((data) => QueryCollectionResponse.decode(new _m0.Reader(data)));
  }

  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryDenomRequest.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Query", "Denom", data);
    return promise.then((data) => QueryDenomResponse.decode(new _m0.Reader(data)));
  }

  DenomByName(request: QueryDenomByNameRequest): Promise<QueryDenomByNameResponse> {
    const data = QueryDenomByNameRequest.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Query", "DenomByName", data);
    return promise.then((data) => QueryDenomByNameResponse.decode(new _m0.Reader(data)));
  }

  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Query", "Denoms", data);
    return promise.then((data) => QueryDenomsResponse.decode(new _m0.Reader(data)));
  }

  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Query", "NFT", data);
    return promise.then((data) => QueryNFTResponse.decode(new _m0.Reader(data)));
  }

  DenomsOfAddress(request: QueryDenomsOfAddressRequest): Promise<QueryDenomsOfAddressResponse> {
    const data = QueryDenomsOfAddressRequest.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Query", "DenomsOfAddress", data);
    return promise.then((data) => QueryDenomsOfAddressResponse.decode(new _m0.Reader(data)));
  }

  DenomsAccessMap(request: QueryDenomsAccessMapRequest): Promise<QueryDenomsAccessMapResponse> {
    const data = QueryDenomsAccessMapRequest.encode(request).finish();
    const promise = this.rpc.request("keywesmart.sesamenet.nft.Query", "DenomsAccessMap", data);
    return promise.then((data) => QueryDenomsAccessMapResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
