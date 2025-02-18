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
proto.api = require('./gateway_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.GatewayServiceClient =
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
proto.api.GatewayServicePromiseClient =
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
 *   !proto.api.CreateGatewayRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_GatewayService_Create = new grpc.web.MethodDescriptor(
  '/api.GatewayService/Create',
  grpc.web.MethodType.UNARY,
  proto.api.CreateGatewayRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateGatewayRequest} request
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
 *   !proto.api.CreateGatewayRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_GatewayService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateGatewayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.CreateGatewayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GatewayServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.GatewayService/Create',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Create,
      callback);
};


/**
 * @param {!proto.api.CreateGatewayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.GatewayServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.GatewayService/Create',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetGatewayRequest,
 *   !proto.api.GetGatewayResponse>}
 */
const methodDescriptor_GatewayService_Get = new grpc.web.MethodDescriptor(
  '/api.GatewayService/Get',
  grpc.web.MethodType.UNARY,
  proto.api.GetGatewayRequest,
  proto.api.GetGatewayResponse,
  /**
   * @param {!proto.api.GetGatewayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetGatewayResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetGatewayRequest,
 *   !proto.api.GetGatewayResponse>}
 */
const methodInfo_GatewayService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetGatewayResponse,
  /**
   * @param {!proto.api.GetGatewayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetGatewayResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetGatewayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetGatewayResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetGatewayResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GatewayServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.GatewayService/Get',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Get,
      callback);
};


/**
 * @param {!proto.api.GetGatewayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetGatewayResponse>}
 *     Promise that resolves to the response
 */
proto.api.GatewayServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.GatewayService/Get',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateGatewayRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_GatewayService_Update = new grpc.web.MethodDescriptor(
  '/api.GatewayService/Update',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateGatewayRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateGatewayRequest} request
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
 *   !proto.api.UpdateGatewayRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_GatewayService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateGatewayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateGatewayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GatewayServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.GatewayService/Update',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Update,
      callback);
};


/**
 * @param {!proto.api.UpdateGatewayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.GatewayServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.GatewayService/Update',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteGatewayRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_GatewayService_Delete = new grpc.web.MethodDescriptor(
  '/api.GatewayService/Delete',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteGatewayRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteGatewayRequest} request
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
 *   !proto.api.DeleteGatewayRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_GatewayService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteGatewayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteGatewayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GatewayServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.GatewayService/Delete',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Delete,
      callback);
};


/**
 * @param {!proto.api.DeleteGatewayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.GatewayServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.GatewayService/Delete',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ListGatewaysRequest,
 *   !proto.api.ListGatewaysResponse>}
 */
const methodDescriptor_GatewayService_List = new grpc.web.MethodDescriptor(
  '/api.GatewayService/List',
  grpc.web.MethodType.UNARY,
  proto.api.ListGatewaysRequest,
  proto.api.ListGatewaysResponse,
  /**
   * @param {!proto.api.ListGatewaysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListGatewaysResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ListGatewaysRequest,
 *   !proto.api.ListGatewaysResponse>}
 */
const methodInfo_GatewayService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ListGatewaysResponse,
  /**
   * @param {!proto.api.ListGatewaysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListGatewaysResponse.deserializeBinary
);


/**
 * @param {!proto.api.ListGatewaysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ListGatewaysResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ListGatewaysResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GatewayServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.GatewayService/List',
      request,
      metadata || {},
      methodDescriptor_GatewayService_List,
      callback);
};


/**
 * @param {!proto.api.ListGatewaysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ListGatewaysResponse>}
 *     Promise that resolves to the response
 */
proto.api.GatewayServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.GatewayService/List',
      request,
      metadata || {},
      methodDescriptor_GatewayService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GenerateGatewayClientCertificateRequest,
 *   !proto.api.GenerateGatewayClientCertificateResponse>}
 */
const methodDescriptor_GatewayService_GenerateClientCertificate = new grpc.web.MethodDescriptor(
  '/api.GatewayService/GenerateClientCertificate',
  grpc.web.MethodType.UNARY,
  proto.api.GenerateGatewayClientCertificateRequest,
  proto.api.GenerateGatewayClientCertificateResponse,
  /**
   * @param {!proto.api.GenerateGatewayClientCertificateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GenerateGatewayClientCertificateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GenerateGatewayClientCertificateRequest,
 *   !proto.api.GenerateGatewayClientCertificateResponse>}
 */
const methodInfo_GatewayService_GenerateClientCertificate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GenerateGatewayClientCertificateResponse,
  /**
   * @param {!proto.api.GenerateGatewayClientCertificateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GenerateGatewayClientCertificateResponse.deserializeBinary
);


/**
 * @param {!proto.api.GenerateGatewayClientCertificateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GenerateGatewayClientCertificateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GenerateGatewayClientCertificateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GatewayServiceClient.prototype.generateClientCertificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.GatewayService/GenerateClientCertificate',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GenerateClientCertificate,
      callback);
};


/**
 * @param {!proto.api.GenerateGatewayClientCertificateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GenerateGatewayClientCertificateResponse>}
 *     Promise that resolves to the response
 */
proto.api.GatewayServicePromiseClient.prototype.generateClientCertificate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.GatewayService/GenerateClientCertificate',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GenerateClientCertificate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetGatewayStatsRequest,
 *   !proto.api.GetGatewayStatsResponse>}
 */
const methodDescriptor_GatewayService_GetStats = new grpc.web.MethodDescriptor(
  '/api.GatewayService/GetStats',
  grpc.web.MethodType.UNARY,
  proto.api.GetGatewayStatsRequest,
  proto.api.GetGatewayStatsResponse,
  /**
   * @param {!proto.api.GetGatewayStatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetGatewayStatsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetGatewayStatsRequest,
 *   !proto.api.GetGatewayStatsResponse>}
 */
const methodInfo_GatewayService_GetStats = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetGatewayStatsResponse,
  /**
   * @param {!proto.api.GetGatewayStatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetGatewayStatsResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetGatewayStatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetGatewayStatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetGatewayStatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GatewayServiceClient.prototype.getStats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.GatewayService/GetStats',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetStats,
      callback);
};


/**
 * @param {!proto.api.GetGatewayStatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetGatewayStatsResponse>}
 *     Promise that resolves to the response
 */
proto.api.GatewayServicePromiseClient.prototype.getStats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.GatewayService/GetStats',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetStats);
};


module.exports = proto.api;

