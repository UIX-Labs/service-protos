import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "user";
export interface Status {
    success: boolean;
    errorName: string;
    errorCode: number;
    errorMsg: string;
}
export interface ServiceResponse {
    status: Status | undefined;
    data: {
        [key: string]: any;
    } | undefined;
}
export interface CreateUserRequest {
    phone: string;
    userName: string;
}
export interface CreateUserResponse {
    data: ServiceResponse | undefined;
}
export declare const Status: {
    encode(message: Status, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Status;
    fromJSON(object: any): Status;
    toJSON(message: Status): unknown;
    create<I extends Exact<DeepPartial<Status>, I>>(base?: I): Status;
    fromPartial<I extends Exact<DeepPartial<Status>, I>>(object: I): Status;
};
export declare const ServiceResponse: {
    encode(message: ServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceResponse;
    fromJSON(object: any): ServiceResponse;
    toJSON(message: ServiceResponse): unknown;
    create<I extends Exact<DeepPartial<ServiceResponse>, I>>(base?: I): ServiceResponse;
    fromPartial<I extends Exact<DeepPartial<ServiceResponse>, I>>(object: I): ServiceResponse;
};
export declare const CreateUserRequest: {
    encode(message: CreateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest;
    fromJSON(object: any): CreateUserRequest;
    toJSON(message: CreateUserRequest): unknown;
    create<I extends Exact<DeepPartial<CreateUserRequest>, I>>(base?: I): CreateUserRequest;
    fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(object: I): CreateUserRequest;
};
export declare const CreateUserResponse: {
    encode(message: CreateUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserResponse;
    fromJSON(object: any): CreateUserResponse;
    toJSON(message: CreateUserResponse): unknown;
    create<I extends Exact<DeepPartial<CreateUserResponse>, I>>(base?: I): CreateUserResponse;
    fromPartial<I extends Exact<DeepPartial<CreateUserResponse>, I>>(object: I): CreateUserResponse;
};
export type UserServiceService = typeof UserServiceService;
export declare const UserServiceService: {
    readonly registerCustomer: {
        readonly path: "/user.UserService/RegisterCustomer";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateUserRequest;
        readonly responseSerialize: (value: ServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ServiceResponse;
    };
};
export interface UserServiceServer extends UntypedServiceImplementation {
    registerCustomer: handleUnaryCall<CreateUserRequest, ServiceResponse>;
}
export interface UserServiceClient extends Client {
    registerCustomer(request: CreateUserRequest, callback: (error: ServiceError | null, response: ServiceResponse) => void): ClientUnaryCall;
    registerCustomer(request: CreateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ServiceResponse) => void): ClientUnaryCall;
    registerCustomer(request: CreateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ServiceResponse) => void): ClientUnaryCall;
}
export declare const UserServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserServiceClient;
    service: typeof UserServiceService;
    serviceName: string;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
