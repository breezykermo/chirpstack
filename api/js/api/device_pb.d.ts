// package: api
// file: api/device.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Device extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getApplicationId(): string;
  setApplicationId(value: string): void;

  getDeviceProfileId(): string;
  setDeviceProfileId(value: string): void;

  getSkipFcntCheck(): boolean;
  setSkipFcntCheck(value: boolean): void;

  getIsDisabled(): boolean;
  setIsDisabled(value: boolean): void;

  getVariablesMap(): jspb.Map<string, string>;
  clearVariablesMap(): void;
  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    devEui: string,
    name: string,
    description: string,
    applicationId: string,
    deviceProfileId: string,
    skipFcntCheck: boolean,
    isDisabled: boolean,
    variablesMap: Array<[string, string]>,
    tagsMap: Array<[string, string]>,
  }
}

export class DeviceStatus extends jspb.Message {
  getMargin(): number;
  setMargin(value: number): void;

  getExternalPowerSource(): boolean;
  setExternalPowerSource(value: boolean): void;

  getBatteryLevel(): number;
  setBatteryLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceStatus): DeviceStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceStatus;
  static deserializeBinaryFromReader(message: DeviceStatus, reader: jspb.BinaryReader): DeviceStatus;
}

export namespace DeviceStatus {
  export type AsObject = {
    margin: number,
    externalPowerSource: boolean,
    batteryLevel: number,
  }
}

export class DeviceListItem extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastSeenAt(): boolean;
  clearLastSeenAt(): void;
  getLastSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDeviceProfileId(): string;
  setDeviceProfileId(value: string): void;

  getDeviceProfileName(): string;
  setDeviceProfileName(value: string): void;

  hasDeviceStatus(): boolean;
  clearDeviceStatus(): void;
  getDeviceStatus(): DeviceStatus | undefined;
  setDeviceStatus(value?: DeviceStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceListItem.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceListItem): DeviceListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceListItem;
  static deserializeBinaryFromReader(message: DeviceListItem, reader: jspb.BinaryReader): DeviceListItem;
}

export namespace DeviceListItem {
  export type AsObject = {
    devEui: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    description: string,
    deviceProfileId: string,
    deviceProfileName: string,
    deviceStatus?: DeviceStatus.AsObject,
  }
}

export class DeviceKeys extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  getNwkKey(): string;
  setNwkKey(value: string): void;

  getAppKey(): string;
  setAppKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceKeys.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceKeys): DeviceKeys.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceKeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceKeys;
  static deserializeBinaryFromReader(message: DeviceKeys, reader: jspb.BinaryReader): DeviceKeys;
}

export namespace DeviceKeys {
  export type AsObject = {
    devEui: string,
    nwkKey: string,
    appKey: string,
  }
}

export class CreateDeviceRequest extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceRequest): CreateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceRequest;
  static deserializeBinaryFromReader(message: CreateDeviceRequest, reader: jspb.BinaryReader): CreateDeviceRequest;
}

export namespace CreateDeviceRequest {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class GetDeviceRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceRequest): GetDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceRequest;
  static deserializeBinaryFromReader(message: GetDeviceRequest, reader: jspb.BinaryReader): GetDeviceRequest;
}

export namespace GetDeviceRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class GetDeviceResponse extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastSeenAt(): boolean;
  clearLastSeenAt(): void;
  getLastSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeviceStatus(): boolean;
  clearDeviceStatus(): void;
  getDeviceStatus(): DeviceStatus | undefined;
  setDeviceStatus(value?: DeviceStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceResponse): GetDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceResponse;
  static deserializeBinaryFromReader(message: GetDeviceResponse, reader: jspb.BinaryReader): GetDeviceResponse;
}

export namespace GetDeviceResponse {
  export type AsObject = {
    device?: Device.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deviceStatus?: DeviceStatus.AsObject,
  }
}

export class UpdateDeviceRequest extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeviceRequest): UpdateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeviceRequest;
  static deserializeBinaryFromReader(message: UpdateDeviceRequest, reader: jspb.BinaryReader): UpdateDeviceRequest;
}

export namespace UpdateDeviceRequest {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class DeleteDeviceRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceRequest): DeleteDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceRequest;
  static deserializeBinaryFromReader(message: DeleteDeviceRequest, reader: jspb.BinaryReader): DeleteDeviceRequest;
}

export namespace DeleteDeviceRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class ListDevicesRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getSearch(): string;
  setSearch(value: string): void;

  getApplicationId(): string;
  setApplicationId(value: string): void;

  getMulticastGroupId(): string;
  setMulticastGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDevicesRequest): ListDevicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDevicesRequest;
  static deserializeBinaryFromReader(message: ListDevicesRequest, reader: jspb.BinaryReader): ListDevicesRequest;
}

export namespace ListDevicesRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    search: string,
    applicationId: string,
    multicastGroupId: string,
  }
}

export class ListDevicesResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<DeviceListItem>;
  setResultList(value: Array<DeviceListItem>): void;
  addResult(value?: DeviceListItem, index?: number): DeviceListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDevicesResponse): ListDevicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDevicesResponse;
  static deserializeBinaryFromReader(message: ListDevicesResponse, reader: jspb.BinaryReader): ListDevicesResponse;
}

export namespace ListDevicesResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<DeviceListItem.AsObject>,
  }
}

export class CreateDeviceKeysRequest extends jspb.Message {
  hasDeviceKeys(): boolean;
  clearDeviceKeys(): void;
  getDeviceKeys(): DeviceKeys | undefined;
  setDeviceKeys(value?: DeviceKeys): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceKeysRequest): CreateDeviceKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeviceKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceKeysRequest;
  static deserializeBinaryFromReader(message: CreateDeviceKeysRequest, reader: jspb.BinaryReader): CreateDeviceKeysRequest;
}

export namespace CreateDeviceKeysRequest {
  export type AsObject = {
    deviceKeys?: DeviceKeys.AsObject,
  }
}

export class GetDeviceKeysRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceKeysRequest): GetDeviceKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceKeysRequest;
  static deserializeBinaryFromReader(message: GetDeviceKeysRequest, reader: jspb.BinaryReader): GetDeviceKeysRequest;
}

export namespace GetDeviceKeysRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class GetDeviceKeysResponse extends jspb.Message {
  hasDeviceKeys(): boolean;
  clearDeviceKeys(): void;
  getDeviceKeys(): DeviceKeys | undefined;
  setDeviceKeys(value?: DeviceKeys): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceKeysResponse): GetDeviceKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceKeysResponse;
  static deserializeBinaryFromReader(message: GetDeviceKeysResponse, reader: jspb.BinaryReader): GetDeviceKeysResponse;
}

export namespace GetDeviceKeysResponse {
  export type AsObject = {
    deviceKeys?: DeviceKeys.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateDeviceKeysRequest extends jspb.Message {
  hasDeviceKeys(): boolean;
  clearDeviceKeys(): void;
  getDeviceKeys(): DeviceKeys | undefined;
  setDeviceKeys(value?: DeviceKeys): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeviceKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeviceKeysRequest): UpdateDeviceKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeviceKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeviceKeysRequest;
  static deserializeBinaryFromReader(message: UpdateDeviceKeysRequest, reader: jspb.BinaryReader): UpdateDeviceKeysRequest;
}

export namespace UpdateDeviceKeysRequest {
  export type AsObject = {
    deviceKeys?: DeviceKeys.AsObject,
  }
}

export class DeleteDeviceKeysRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceKeysRequest): DeleteDeviceKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeviceKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceKeysRequest;
  static deserializeBinaryFromReader(message: DeleteDeviceKeysRequest, reader: jspb.BinaryReader): DeleteDeviceKeysRequest;
}

export namespace DeleteDeviceKeysRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class DeviceActivation extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  getDevAddr(): string;
  setDevAddr(value: string): void;

  getAppSKey(): string;
  setAppSKey(value: string): void;

  getNwkSEncKey(): string;
  setNwkSEncKey(value: string): void;

  getSNwkSIntKey(): string;
  setSNwkSIntKey(value: string): void;

  getFNwkSIntKey(): string;
  setFNwkSIntKey(value: string): void;

  getFCntUp(): number;
  setFCntUp(value: number): void;

  getNFCntDown(): number;
  setNFCntDown(value: number): void;

  getAFCntDown(): number;
  setAFCntDown(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceActivation.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceActivation): DeviceActivation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceActivation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceActivation;
  static deserializeBinaryFromReader(message: DeviceActivation, reader: jspb.BinaryReader): DeviceActivation;
}

export namespace DeviceActivation {
  export type AsObject = {
    devEui: string,
    devAddr: string,
    appSKey: string,
    nwkSEncKey: string,
    sNwkSIntKey: string,
    fNwkSIntKey: string,
    fCntUp: number,
    nFCntDown: number,
    aFCntDown: number,
  }
}

export class ActivateDeviceRequest extends jspb.Message {
  hasDeviceActivation(): boolean;
  clearDeviceActivation(): void;
  getDeviceActivation(): DeviceActivation | undefined;
  setDeviceActivation(value?: DeviceActivation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateDeviceRequest): ActivateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateDeviceRequest;
  static deserializeBinaryFromReader(message: ActivateDeviceRequest, reader: jspb.BinaryReader): ActivateDeviceRequest;
}

export namespace ActivateDeviceRequest {
  export type AsObject = {
    deviceActivation?: DeviceActivation.AsObject,
  }
}

export class DeactivateDeviceRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateDeviceRequest): DeactivateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeactivateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateDeviceRequest;
  static deserializeBinaryFromReader(message: DeactivateDeviceRequest, reader: jspb.BinaryReader): DeactivateDeviceRequest;
}

export namespace DeactivateDeviceRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class GetDeviceActivationRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceActivationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceActivationRequest): GetDeviceActivationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceActivationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceActivationRequest;
  static deserializeBinaryFromReader(message: GetDeviceActivationRequest, reader: jspb.BinaryReader): GetDeviceActivationRequest;
}

export namespace GetDeviceActivationRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class GetDeviceActivationResponse extends jspb.Message {
  hasDeviceActivation(): boolean;
  clearDeviceActivation(): void;
  getDeviceActivation(): DeviceActivation | undefined;
  setDeviceActivation(value?: DeviceActivation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceActivationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceActivationResponse): GetDeviceActivationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceActivationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceActivationResponse;
  static deserializeBinaryFromReader(message: GetDeviceActivationResponse, reader: jspb.BinaryReader): GetDeviceActivationResponse;
}

export namespace GetDeviceActivationResponse {
  export type AsObject = {
    deviceActivation?: DeviceActivation.AsObject,
  }
}

export class GetRandomDevAddrRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRandomDevAddrRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRandomDevAddrRequest): GetRandomDevAddrRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRandomDevAddrRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRandomDevAddrRequest;
  static deserializeBinaryFromReader(message: GetRandomDevAddrRequest, reader: jspb.BinaryReader): GetRandomDevAddrRequest;
}

export namespace GetRandomDevAddrRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class GetRandomDevAddrResponse extends jspb.Message {
  getDevAddr(): string;
  setDevAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRandomDevAddrResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRandomDevAddrResponse): GetRandomDevAddrResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRandomDevAddrResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRandomDevAddrResponse;
  static deserializeBinaryFromReader(message: GetRandomDevAddrResponse, reader: jspb.BinaryReader): GetRandomDevAddrResponse;
}

export namespace GetRandomDevAddrResponse {
  export type AsObject = {
    devAddr: string,
  }
}

export class GetDeviceStatsRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceStatsRequest): GetDeviceStatsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceStatsRequest;
  static deserializeBinaryFromReader(message: GetDeviceStatsRequest, reader: jspb.BinaryReader): GetDeviceStatsRequest;
}

export namespace GetDeviceStatsRequest {
  export type AsObject = {
    devEui: string,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetDeviceStatsResponse extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<DeviceStats>;
  setResultList(value: Array<DeviceStats>): void;
  addResult(value?: DeviceStats, index?: number): DeviceStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceStatsResponse): GetDeviceStatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceStatsResponse;
  static deserializeBinaryFromReader(message: GetDeviceStatsResponse, reader: jspb.BinaryReader): GetDeviceStatsResponse;
}

export namespace GetDeviceStatsResponse {
  export type AsObject = {
    resultList: Array<DeviceStats.AsObject>,
  }
}

export class DeviceStats extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRxPackets(): number;
  setRxPackets(value: number): void;

  getGwRssi(): number;
  setGwRssi(value: number): void;

  getGwSnr(): number;
  setGwSnr(value: number): void;

  getRxPacketsPerFrequencyMap(): jspb.Map<number, number>;
  clearRxPacketsPerFrequencyMap(): void;
  getRxPacketsPerDrMap(): jspb.Map<number, number>;
  clearRxPacketsPerDrMap(): void;
  getErrorsMap(): jspb.Map<string, number>;
  clearErrorsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceStats.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceStats): DeviceStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceStats;
  static deserializeBinaryFromReader(message: DeviceStats, reader: jspb.BinaryReader): DeviceStats;
}

export namespace DeviceStats {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    rxPackets: number,
    gwRssi: number,
    gwSnr: number,
    rxPacketsPerFrequencyMap: Array<[number, number]>,
    rxPacketsPerDrMap: Array<[number, number]>,
    errorsMap: Array<[string, number]>,
  }
}

export class DeviceQueueItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDevEui(): string;
  setDevEui(value: string): void;

  getConfirmed(): boolean;
  setConfirmed(value: boolean): void;

  getFPort(): number;
  setFPort(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasObject(): boolean;
  clearObject(): void;
  getObject(): google_protobuf_struct_pb.Struct | undefined;
  setObject(value?: google_protobuf_struct_pb.Struct): void;

  getIsPending(): boolean;
  setIsPending(value: boolean): void;

  getFCntDown(): number;
  setFCntDown(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceQueueItem.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceQueueItem): DeviceQueueItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceQueueItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceQueueItem;
  static deserializeBinaryFromReader(message: DeviceQueueItem, reader: jspb.BinaryReader): DeviceQueueItem;
}

export namespace DeviceQueueItem {
  export type AsObject = {
    id: string,
    devEui: string,
    confirmed: boolean,
    fPort: number,
    data: Uint8Array | string,
    object?: google_protobuf_struct_pb.Struct.AsObject,
    isPending: boolean,
    fCntDown: number,
  }
}

export class EnqueueDeviceQueueItemRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): DeviceQueueItem | undefined;
  setItem(value?: DeviceQueueItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueDeviceQueueItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueDeviceQueueItemRequest): EnqueueDeviceQueueItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueDeviceQueueItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueDeviceQueueItemRequest;
  static deserializeBinaryFromReader(message: EnqueueDeviceQueueItemRequest, reader: jspb.BinaryReader): EnqueueDeviceQueueItemRequest;
}

export namespace EnqueueDeviceQueueItemRequest {
  export type AsObject = {
    item?: DeviceQueueItem.AsObject,
  }
}

export class EnqueueDeviceQueueItemResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueDeviceQueueItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueDeviceQueueItemResponse): EnqueueDeviceQueueItemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueDeviceQueueItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueDeviceQueueItemResponse;
  static deserializeBinaryFromReader(message: EnqueueDeviceQueueItemResponse, reader: jspb.BinaryReader): EnqueueDeviceQueueItemResponse;
}

export namespace EnqueueDeviceQueueItemResponse {
  export type AsObject = {
    id: string,
  }
}

export class FlushDeviceQueueRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlushDeviceQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FlushDeviceQueueRequest): FlushDeviceQueueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlushDeviceQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlushDeviceQueueRequest;
  static deserializeBinaryFromReader(message: FlushDeviceQueueRequest, reader: jspb.BinaryReader): FlushDeviceQueueRequest;
}

export namespace FlushDeviceQueueRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class GetDeviceQueueItemsRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  getCountOnly(): boolean;
  setCountOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceQueueItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceQueueItemsRequest): GetDeviceQueueItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceQueueItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceQueueItemsRequest;
  static deserializeBinaryFromReader(message: GetDeviceQueueItemsRequest, reader: jspb.BinaryReader): GetDeviceQueueItemsRequest;
}

export namespace GetDeviceQueueItemsRequest {
  export type AsObject = {
    devEui: string,
    countOnly: boolean,
  }
}

export class GetDeviceQueueItemsResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<DeviceQueueItem>;
  setResultList(value: Array<DeviceQueueItem>): void;
  addResult(value?: DeviceQueueItem, index?: number): DeviceQueueItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceQueueItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceQueueItemsResponse): GetDeviceQueueItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceQueueItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceQueueItemsResponse;
  static deserializeBinaryFromReader(message: GetDeviceQueueItemsResponse, reader: jspb.BinaryReader): GetDeviceQueueItemsResponse;
}

export namespace GetDeviceQueueItemsResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<DeviceQueueItem.AsObject>,
  }
}

export class FlushDevNoncesRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlushDevNoncesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FlushDevNoncesRequest): FlushDevNoncesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlushDevNoncesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlushDevNoncesRequest;
  static deserializeBinaryFromReader(message: FlushDevNoncesRequest, reader: jspb.BinaryReader): FlushDevNoncesRequest;
}

export namespace FlushDevNoncesRequest {
  export type AsObject = {
    devEui: string,
  }
}

