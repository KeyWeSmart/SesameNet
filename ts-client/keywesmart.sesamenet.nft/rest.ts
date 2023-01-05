/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface NftBaseNFT {
  id?: string;
  name?: string;
  uri?: string;
  data?: string;
  owner?: string;
}

export interface NftIDCollection {
  denom_id?: string;
  token_ids?: string[];
}

export type NftMsgBurnNFTResponse = object;

export type NftMsgEditNFTResponse = object;

export type NftMsgIssueDenomResponse = object;

export type NftMsgMintNFTResponse = object;

export type NftMsgTransferNFTResponse = object;

export interface NftOwner {
  address?: string;
  id_collections?: NftIDCollection[];
}

/**
 * Params defines the parameters for the module.
 */
export type NftParams = object;

export interface NftQueryCollection {
  denom?: NftQueryDenom;
  nfts?: NftBaseNFT[];
}

export interface NftQueryCollectionResponse {
  collection?: NftQueryCollection;

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface NftQueryDenom {
  id?: string;
  name?: string;
  schema?: string;
  owner?: string;

  /** This was added because Cosmos SDK's native NFT module has uri as a parameter for class which is needed for nft transfers */
  uri?: string;
}

export interface NftQueryDenomByNameResponse {
  denom?: NftQueryDenom;
}

export interface NftQueryDenomResponse {
  denom?: NftQueryDenom;
}

export interface NftQueryDenomsAccessMapResponse {
  access_map?: Record<string, boolean>;
}

export interface NftQueryDenomsOfAddressResponse {
  denoms?: NftQueryDenom[];
}

export interface NftQueryDenomsResponse {
  denoms?: NftQueryDenom[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface NftQueryNFTResponse {
  nft?: NftBaseNFT;
}

export interface NftQueryOwnerResponse {
  owner?: NftOwner;

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface NftQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: NftParams;
}

export interface NftQuerySupplyResponse {
  /** @format uint64 */
  amount?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title sesamenet/nft/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryDenomsAccessMap
   * @summary Queries a list of DenomsAccessMap items.
   * @request GET:/keywesmart/sesamenet/nft/access-map/{denom_id}
   */
  queryDenomsAccessMap = (denomId: string, params: RequestParams = {}) =>
    this.request<NftQueryDenomsAccessMapResponse, RpcStatus>({
      path: `/keywesmart/sesamenet/nft/access-map/${denomId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCollection
   * @summary Queries a list of Collection items.
   * @request GET:/keywesmart/sesamenet/nft/collections/{denom_id}
   */
  queryCollection = (
    denomId: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftQueryCollectionResponse, RpcStatus>({
      path: `/keywesmart/sesamenet/nft/collections/${denomId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySupply
   * @summary Queries a list of Supply items.
   * @request GET:/keywesmart/sesamenet/nft/collections/{denom_id}/supply
   */
  querySupply = (denomId: string, query?: { owner?: string }, params: RequestParams = {}) =>
    this.request<NftQuerySupplyResponse, RpcStatus>({
      path: `/keywesmart/sesamenet/nft/collections/${denomId}/supply`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDenoms
   * @summary Queries a list of Denoms items.
   * @request GET:/keywesmart/sesamenet/nft/denoms
   */
  queryDenoms = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftQueryDenomsResponse, RpcStatus>({
      path: `/keywesmart/sesamenet/nft/denoms`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDenomsOfAddress
   * @summary Queries a list of DenomsOfAddress items.
   * @request GET:/keywesmart/sesamenet/nft/denoms/{address}
   */
  queryDenomsOfAddress = (address: string, params: RequestParams = {}) =>
    this.request<NftQueryDenomsOfAddressResponse, RpcStatus>({
      path: `/keywesmart/sesamenet/nft/denoms/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDenom
   * @summary Queries a list of Denom items.
   * @request GET:/keywesmart/sesamenet/nft/denoms/{denom_id}
   */
  queryDenom = (denomId: string, params: RequestParams = {}) =>
    this.request<NftQueryDenomResponse, RpcStatus>({
      path: `/keywesmart/sesamenet/nft/denoms/${denomId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDenomByName
   * @summary Queries a list of DenomByName items.
   * @request GET:/keywesmart/sesamenet/nft/denoms/{denom_name}
   */
  queryDenomByName = (denomName: string, params: RequestParams = {}) =>
    this.request<NftQueryDenomByNameResponse, RpcStatus>({
      path: `/keywesmart/sesamenet/nft/denoms/${denomName}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNft
   * @summary Queries a list of NFT items.
   * @request GET:/keywesmart/sesamenet/nft/nfts/{denom_id}/{token_id}
   */
  queryNft = (denomId: string, tokenId: string, params: RequestParams = {}) =>
    this.request<NftQueryNFTResponse, RpcStatus>({
      path: `/keywesmart/sesamenet/nft/nfts/${denomId}/${tokenId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOwner
   * @summary Queries a list of Owner items.
   * @request GET:/keywesmart/sesamenet/nft/nfts/{owner}
   */
  queryOwner = (
    owner: string,
    query?: {
      denom_id?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<NftQueryOwnerResponse, RpcStatus>({
      path: `/keywesmart/sesamenet/nft/nfts/${owner}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/keywesmart/sesamenet/nft/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<NftQueryParamsResponse, RpcStatus>({
      path: `/keywesmart/sesamenet/nft/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}