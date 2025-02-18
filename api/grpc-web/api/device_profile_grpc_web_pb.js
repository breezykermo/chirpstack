/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var common_common_pb = require('../common/common_pb.js')
const proto = {};
proto.api = require('./device_profile_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.DeviceProfileServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.DeviceProfileServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreateDeviceProfileRequest,
 *   !proto.api.CreateDeviceProfileResponse>}
 */
const methodDescriptor_DeviceProfileService_Create = new grpc.web.MethodDescriptor(
  '/api.DeviceProfileService/Create',
  grpc.web.MethodType.UNARY,
  proto.api.CreateDeviceProfileRequest,
  proto.api.CreateDeviceProfileResponse,
  /**
   * @param {!proto.api.CreateDeviceProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CreateDeviceProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.CreateDeviceProfileRequest,
 *   !proto.api.CreateDeviceProfileResponse>}
 */
const methodInfo_DeviceProfileService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.CreateDeviceProfileResponse,
  /**
   * @param {!proto.api.CreateDeviceProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CreateDeviceProfileResponse.deserializeBinary
);


/**
 * @param {!proto.api.CreateDeviceProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.CreateDeviceProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.CreateDeviceProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.DeviceProfileServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.DeviceProfileService/Create',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_Create,
      callback);
};


/**
 * @param {!proto.api.CreateDeviceProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.CreateDeviceProfileResponse>}
 *     Promise that resolves to the response
 */
proto.api.DeviceProfileServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.DeviceProfileService/Create',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetDeviceProfileRequest,
 *   !proto.api.GetDeviceProfileResponse>}
 */
const methodDescriptor_DeviceProfileService_Get = new grpc.web.MethodDescriptor(
  '/api.DeviceProfileService/Get',
  grpc.web.MethodType.UNARY,
  proto.api.GetDeviceProfileRequest,
  proto.api.GetDeviceProfileResponse,
  /**
   * @param {!proto.api.GetDeviceProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetDeviceProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetDeviceProfileRequest,
 *   !proto.api.GetDeviceProfileResponse>}
 */
const methodInfo_DeviceProfileService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetDeviceProfileResponse,
  /**
   * @param {!proto.api.GetDeviceProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetDeviceProfileResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetDeviceProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetDeviceProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetDeviceProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.DeviceProfileServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.DeviceProfileService/Get',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_Get,
      callback);
};


/**
 * @param {!proto.api.GetDeviceProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetDeviceProfileResponse>}
 *     Promise that resolves to the response
 */
proto.api.DeviceProfileServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.DeviceProfileService/Get',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateDeviceProfileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DeviceProfileService_Update = new grpc.web.MethodDescriptor(
  '/api.DeviceProfileService/Update',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateDeviceProfileRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateDeviceProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.UpdateDeviceProfileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeviceProfileService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateDeviceProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateDeviceProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.DeviceProfileServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.DeviceProfileService/Update',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_Update,
      callback);
};


/**
 * @param {!proto.api.UpdateDeviceProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.DeviceProfileServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.DeviceProfileService/Update',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteDeviceProfileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DeviceProfileService_Delete = new grpc.web.MethodDescriptor(
  '/api.DeviceProfileService/Delete',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteDeviceProfileRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteDeviceProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.DeleteDeviceProfileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeviceProfileService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteDeviceProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteDeviceProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.DeviceProfileServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.DeviceProfileService/Delete',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_Delete,
      callback);
};


/**
 * @param {!proto.api.DeleteDeviceProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.DeviceProfileServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.DeviceProfileService/Delete',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ListDeviceProfilesRequest,
 *   !proto.api.ListDeviceProfilesResponse>}
 */
const methodDescriptor_DeviceProfileService_List = new grpc.web.MethodDescriptor(
  '/api.DeviceProfileService/List',
  grpc.web.MethodType.UNARY,
  proto.api.ListDeviceProfilesRequest,
  proto.api.ListDeviceProfilesResponse,
  /**
   * @param {!proto.api.ListDeviceProfilesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListDeviceProfilesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ListDeviceProfilesRequest,
 *   !proto.api.ListDeviceProfilesResponse>}
 */
const methodInfo_DeviceProfileService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ListDeviceProfilesResponse,
  /**
   * @param {!proto.api.ListDeviceProfilesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListDeviceProfilesResponse.deserializeBinary
);


/**
 * @param {!proto.api.ListDeviceProfilesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ListDeviceProfilesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ListDeviceProfilesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.DeviceProfileServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.DeviceProfileService/List',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_List,
      callback);
};


/**
 * @param {!proto.api.ListDeviceProfilesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ListDeviceProfilesResponse>}
 *     Promise that resolves to the response
 */
proto.api.DeviceProfileServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.DeviceProfileService/List',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.api.ListDeviceProfileAdrAlgorithmsResponse>}
 */
const methodDescriptor_DeviceProfileService_ListAdrAlgorithms = new grpc.web.MethodDescriptor(
  '/api.DeviceProfileService/ListAdrAlgorithms',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.api.ListDeviceProfileAdrAlgorithmsResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListDeviceProfileAdrAlgorithmsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.api.ListDeviceProfileAdrAlgorithmsResponse>}
 */
const methodInfo_DeviceProfileService_ListAdrAlgorithms = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ListDeviceProfileAdrAlgorithmsResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListDeviceProfileAdrAlgorithmsResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ListDeviceProfileAdrAlgorithmsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ListDeviceProfileAdrAlgorithmsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.DeviceProfileServiceClient.prototype.listAdrAlgorithms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.DeviceProfileService/ListAdrAlgorithms',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_ListAdrAlgorithms,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ListDeviceProfileAdrAlgorithmsResponse>}
 *     Promise that resolves to the response
 */
proto.api.DeviceProfileServicePromiseClient.prototype.listAdrAlgorithms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.DeviceProfileService/ListAdrAlgorithms',
      request,
      metadata || {},
      methodDescriptor_DeviceProfileService_ListAdrAlgorithms);
};


module.exports = proto.api;

