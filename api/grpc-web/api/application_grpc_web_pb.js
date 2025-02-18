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
const proto = {};
proto.api = require('./application_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.ApplicationServiceClient =
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
proto.api.ApplicationServicePromiseClient =
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
 *   !proto.api.CreateApplicationRequest,
 *   !proto.api.CreateApplicationResponse>}
 */
const methodDescriptor_ApplicationService_Create = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/Create',
  grpc.web.MethodType.UNARY,
  proto.api.CreateApplicationRequest,
  proto.api.CreateApplicationResponse,
  /**
   * @param {!proto.api.CreateApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CreateApplicationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.CreateApplicationRequest,
 *   !proto.api.CreateApplicationResponse>}
 */
const methodInfo_ApplicationService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.CreateApplicationResponse,
  /**
   * @param {!proto.api.CreateApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CreateApplicationResponse.deserializeBinary
);


/**
 * @param {!proto.api.CreateApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.CreateApplicationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.CreateApplicationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/Create',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_Create,
      callback);
};


/**
 * @param {!proto.api.CreateApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.CreateApplicationResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/Create',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetApplicationRequest,
 *   !proto.api.GetApplicationResponse>}
 */
const methodDescriptor_ApplicationService_Get = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/Get',
  grpc.web.MethodType.UNARY,
  proto.api.GetApplicationRequest,
  proto.api.GetApplicationResponse,
  /**
   * @param {!proto.api.GetApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetApplicationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetApplicationRequest,
 *   !proto.api.GetApplicationResponse>}
 */
const methodInfo_ApplicationService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetApplicationResponse,
  /**
   * @param {!proto.api.GetApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetApplicationResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetApplicationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetApplicationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/Get',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_Get,
      callback);
};


/**
 * @param {!proto.api.GetApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetApplicationResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/Get',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateApplicationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_Update = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/Update',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateApplicationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateApplicationRequest} request
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
 *   !proto.api.UpdateApplicationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/Update',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_Update,
      callback);
};


/**
 * @param {!proto.api.UpdateApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/Update',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteApplicationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_Delete = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/Delete',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteApplicationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteApplicationRequest} request
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
 *   !proto.api.DeleteApplicationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/Delete',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_Delete,
      callback);
};


/**
 * @param {!proto.api.DeleteApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/Delete',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ListApplicationsRequest,
 *   !proto.api.ListApplicationsResponse>}
 */
const methodDescriptor_ApplicationService_List = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/List',
  grpc.web.MethodType.UNARY,
  proto.api.ListApplicationsRequest,
  proto.api.ListApplicationsResponse,
  /**
   * @param {!proto.api.ListApplicationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListApplicationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ListApplicationsRequest,
 *   !proto.api.ListApplicationsResponse>}
 */
const methodInfo_ApplicationService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ListApplicationsResponse,
  /**
   * @param {!proto.api.ListApplicationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListApplicationsResponse.deserializeBinary
);


/**
 * @param {!proto.api.ListApplicationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ListApplicationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ListApplicationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/List',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_List,
      callback);
};


/**
 * @param {!proto.api.ListApplicationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ListApplicationsResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/List',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ListIntegrationsRequest,
 *   !proto.api.ListIntegrationsResponse>}
 */
const methodDescriptor_ApplicationService_ListIntegrations = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/ListIntegrations',
  grpc.web.MethodType.UNARY,
  proto.api.ListIntegrationsRequest,
  proto.api.ListIntegrationsResponse,
  /**
   * @param {!proto.api.ListIntegrationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListIntegrationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ListIntegrationsRequest,
 *   !proto.api.ListIntegrationsResponse>}
 */
const methodInfo_ApplicationService_ListIntegrations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ListIntegrationsResponse,
  /**
   * @param {!proto.api.ListIntegrationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListIntegrationsResponse.deserializeBinary
);


/**
 * @param {!proto.api.ListIntegrationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ListIntegrationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ListIntegrationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.listIntegrations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/ListIntegrations',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_ListIntegrations,
      callback);
};


/**
 * @param {!proto.api.ListIntegrationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ListIntegrationsResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.listIntegrations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/ListIntegrations',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_ListIntegrations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreateHttpIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_CreateHttpIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/CreateHttpIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.CreateHttpIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateHttpIntegrationRequest} request
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
 *   !proto.api.CreateHttpIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_CreateHttpIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateHttpIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.CreateHttpIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.createHttpIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/CreateHttpIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateHttpIntegration,
      callback);
};


/**
 * @param {!proto.api.CreateHttpIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.createHttpIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/CreateHttpIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateHttpIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetHttpIntegrationRequest,
 *   !proto.api.GetHttpIntegrationResponse>}
 */
const methodDescriptor_ApplicationService_GetHttpIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/GetHttpIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.GetHttpIntegrationRequest,
  proto.api.GetHttpIntegrationResponse,
  /**
   * @param {!proto.api.GetHttpIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetHttpIntegrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetHttpIntegrationRequest,
 *   !proto.api.GetHttpIntegrationResponse>}
 */
const methodInfo_ApplicationService_GetHttpIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetHttpIntegrationResponse,
  /**
   * @param {!proto.api.GetHttpIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetHttpIntegrationResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetHttpIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetHttpIntegrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetHttpIntegrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.getHttpIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/GetHttpIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetHttpIntegration,
      callback);
};


/**
 * @param {!proto.api.GetHttpIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetHttpIntegrationResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.getHttpIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/GetHttpIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetHttpIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateHttpIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_UpdateHttpIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/UpdateHttpIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateHttpIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateHttpIntegrationRequest} request
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
 *   !proto.api.UpdateHttpIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_UpdateHttpIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateHttpIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateHttpIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.updateHttpIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/UpdateHttpIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateHttpIntegration,
      callback);
};


/**
 * @param {!proto.api.UpdateHttpIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.updateHttpIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/UpdateHttpIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateHttpIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteHttpIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_DeleteHttpIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/DeleteHttpIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteHttpIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteHttpIntegrationRequest} request
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
 *   !proto.api.DeleteHttpIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_DeleteHttpIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteHttpIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteHttpIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.deleteHttpIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/DeleteHttpIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteHttpIntegration,
      callback);
};


/**
 * @param {!proto.api.DeleteHttpIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.deleteHttpIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/DeleteHttpIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteHttpIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreateInfluxDbIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_CreateInfluxDbIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/CreateInfluxDbIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.CreateInfluxDbIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateInfluxDbIntegrationRequest} request
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
 *   !proto.api.CreateInfluxDbIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_CreateInfluxDbIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateInfluxDbIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.CreateInfluxDbIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.createInfluxDbIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/CreateInfluxDbIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateInfluxDbIntegration,
      callback);
};


/**
 * @param {!proto.api.CreateInfluxDbIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.createInfluxDbIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/CreateInfluxDbIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateInfluxDbIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetInfluxDbIntegrationRequest,
 *   !proto.api.GetInfluxDbIntegrationResponse>}
 */
const methodDescriptor_ApplicationService_GetInfluxDbIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/GetInfluxDbIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.GetInfluxDbIntegrationRequest,
  proto.api.GetInfluxDbIntegrationResponse,
  /**
   * @param {!proto.api.GetInfluxDbIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetInfluxDbIntegrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetInfluxDbIntegrationRequest,
 *   !proto.api.GetInfluxDbIntegrationResponse>}
 */
const methodInfo_ApplicationService_GetInfluxDbIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetInfluxDbIntegrationResponse,
  /**
   * @param {!proto.api.GetInfluxDbIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetInfluxDbIntegrationResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetInfluxDbIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetInfluxDbIntegrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetInfluxDbIntegrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.getInfluxDbIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/GetInfluxDbIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetInfluxDbIntegration,
      callback);
};


/**
 * @param {!proto.api.GetInfluxDbIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetInfluxDbIntegrationResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.getInfluxDbIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/GetInfluxDbIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetInfluxDbIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateInfluxDbIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_UpdateInfluxDbIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/UpdateInfluxDbIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateInfluxDbIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateInfluxDbIntegrationRequest} request
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
 *   !proto.api.UpdateInfluxDbIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_UpdateInfluxDbIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateInfluxDbIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateInfluxDbIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.updateInfluxDbIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/UpdateInfluxDbIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateInfluxDbIntegration,
      callback);
};


/**
 * @param {!proto.api.UpdateInfluxDbIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.updateInfluxDbIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/UpdateInfluxDbIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateInfluxDbIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteInfluxDbIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_DeleteInfluxDbIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/DeleteInfluxDbIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteInfluxDbIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteInfluxDbIntegrationRequest} request
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
 *   !proto.api.DeleteInfluxDbIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_DeleteInfluxDbIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteInfluxDbIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteInfluxDbIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.deleteInfluxDbIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/DeleteInfluxDbIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteInfluxDbIntegration,
      callback);
};


/**
 * @param {!proto.api.DeleteInfluxDbIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.deleteInfluxDbIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/DeleteInfluxDbIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteInfluxDbIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreateThingsBoardIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_CreateThingsBoardIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/CreateThingsBoardIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.CreateThingsBoardIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateThingsBoardIntegrationRequest} request
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
 *   !proto.api.CreateThingsBoardIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_CreateThingsBoardIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateThingsBoardIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.CreateThingsBoardIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.createThingsBoardIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/CreateThingsBoardIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateThingsBoardIntegration,
      callback);
};


/**
 * @param {!proto.api.CreateThingsBoardIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.createThingsBoardIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/CreateThingsBoardIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateThingsBoardIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetThingsBoardIntegrationRequest,
 *   !proto.api.GetThingsBoardIntegrationResponse>}
 */
const methodDescriptor_ApplicationService_GetThingsBoardIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/GetThingsBoardIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.GetThingsBoardIntegrationRequest,
  proto.api.GetThingsBoardIntegrationResponse,
  /**
   * @param {!proto.api.GetThingsBoardIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetThingsBoardIntegrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetThingsBoardIntegrationRequest,
 *   !proto.api.GetThingsBoardIntegrationResponse>}
 */
const methodInfo_ApplicationService_GetThingsBoardIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetThingsBoardIntegrationResponse,
  /**
   * @param {!proto.api.GetThingsBoardIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetThingsBoardIntegrationResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetThingsBoardIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetThingsBoardIntegrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetThingsBoardIntegrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.getThingsBoardIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/GetThingsBoardIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetThingsBoardIntegration,
      callback);
};


/**
 * @param {!proto.api.GetThingsBoardIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetThingsBoardIntegrationResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.getThingsBoardIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/GetThingsBoardIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetThingsBoardIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateThingsBoardIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_UpdateThingsBoardIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/UpdateThingsBoardIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateThingsBoardIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateThingsBoardIntegrationRequest} request
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
 *   !proto.api.UpdateThingsBoardIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_UpdateThingsBoardIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateThingsBoardIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateThingsBoardIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.updateThingsBoardIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/UpdateThingsBoardIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateThingsBoardIntegration,
      callback);
};


/**
 * @param {!proto.api.UpdateThingsBoardIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.updateThingsBoardIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/UpdateThingsBoardIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateThingsBoardIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteThingsBoardIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_DeleteThingsBoardIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/DeleteThingsBoardIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteThingsBoardIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteThingsBoardIntegrationRequest} request
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
 *   !proto.api.DeleteThingsBoardIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_DeleteThingsBoardIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteThingsBoardIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteThingsBoardIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.deleteThingsBoardIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/DeleteThingsBoardIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteThingsBoardIntegration,
      callback);
};


/**
 * @param {!proto.api.DeleteThingsBoardIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.deleteThingsBoardIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/DeleteThingsBoardIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteThingsBoardIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreateMyDevicesIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_CreateMyDevicesIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/CreateMyDevicesIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.CreateMyDevicesIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateMyDevicesIntegrationRequest} request
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
 *   !proto.api.CreateMyDevicesIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_CreateMyDevicesIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateMyDevicesIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.CreateMyDevicesIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.createMyDevicesIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/CreateMyDevicesIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateMyDevicesIntegration,
      callback);
};


/**
 * @param {!proto.api.CreateMyDevicesIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.createMyDevicesIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/CreateMyDevicesIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateMyDevicesIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetMyDevicesIntegrationRequest,
 *   !proto.api.GetMyDevicesIntegrationResponse>}
 */
const methodDescriptor_ApplicationService_GetMyDevicesIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/GetMyDevicesIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.GetMyDevicesIntegrationRequest,
  proto.api.GetMyDevicesIntegrationResponse,
  /**
   * @param {!proto.api.GetMyDevicesIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetMyDevicesIntegrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetMyDevicesIntegrationRequest,
 *   !proto.api.GetMyDevicesIntegrationResponse>}
 */
const methodInfo_ApplicationService_GetMyDevicesIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetMyDevicesIntegrationResponse,
  /**
   * @param {!proto.api.GetMyDevicesIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetMyDevicesIntegrationResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetMyDevicesIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetMyDevicesIntegrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetMyDevicesIntegrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.getMyDevicesIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/GetMyDevicesIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetMyDevicesIntegration,
      callback);
};


/**
 * @param {!proto.api.GetMyDevicesIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetMyDevicesIntegrationResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.getMyDevicesIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/GetMyDevicesIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetMyDevicesIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateMyDevicesIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_UpdateMyDevicesIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/UpdateMyDevicesIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateMyDevicesIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateMyDevicesIntegrationRequest} request
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
 *   !proto.api.UpdateMyDevicesIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_UpdateMyDevicesIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateMyDevicesIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateMyDevicesIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.updateMyDevicesIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/UpdateMyDevicesIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateMyDevicesIntegration,
      callback);
};


/**
 * @param {!proto.api.UpdateMyDevicesIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.updateMyDevicesIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/UpdateMyDevicesIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateMyDevicesIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteMyDevicesIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_DeleteMyDevicesIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/DeleteMyDevicesIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteMyDevicesIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteMyDevicesIntegrationRequest} request
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
 *   !proto.api.DeleteMyDevicesIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_DeleteMyDevicesIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteMyDevicesIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteMyDevicesIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.deleteMyDevicesIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/DeleteMyDevicesIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteMyDevicesIntegration,
      callback);
};


/**
 * @param {!proto.api.DeleteMyDevicesIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.deleteMyDevicesIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/DeleteMyDevicesIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteMyDevicesIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreateLoraCloudIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_CreateLoraCloudIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/CreateLoraCloudIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.CreateLoraCloudIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateLoraCloudIntegrationRequest} request
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
 *   !proto.api.CreateLoraCloudIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_CreateLoraCloudIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateLoraCloudIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.CreateLoraCloudIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.createLoraCloudIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/CreateLoraCloudIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateLoraCloudIntegration,
      callback);
};


/**
 * @param {!proto.api.CreateLoraCloudIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.createLoraCloudIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/CreateLoraCloudIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateLoraCloudIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetLoraCloudIntegrationRequest,
 *   !proto.api.GetLoraCloudIntegrationResponse>}
 */
const methodDescriptor_ApplicationService_GetLoraCloudIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/GetLoraCloudIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.GetLoraCloudIntegrationRequest,
  proto.api.GetLoraCloudIntegrationResponse,
  /**
   * @param {!proto.api.GetLoraCloudIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetLoraCloudIntegrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetLoraCloudIntegrationRequest,
 *   !proto.api.GetLoraCloudIntegrationResponse>}
 */
const methodInfo_ApplicationService_GetLoraCloudIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetLoraCloudIntegrationResponse,
  /**
   * @param {!proto.api.GetLoraCloudIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetLoraCloudIntegrationResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetLoraCloudIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetLoraCloudIntegrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetLoraCloudIntegrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.getLoraCloudIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/GetLoraCloudIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetLoraCloudIntegration,
      callback);
};


/**
 * @param {!proto.api.GetLoraCloudIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetLoraCloudIntegrationResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.getLoraCloudIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/GetLoraCloudIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetLoraCloudIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateLoraCloudIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_UpdateLoraCloudIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/UpdateLoraCloudIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateLoraCloudIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateLoraCloudIntegrationRequest} request
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
 *   !proto.api.UpdateLoraCloudIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_UpdateLoraCloudIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateLoraCloudIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateLoraCloudIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.updateLoraCloudIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/UpdateLoraCloudIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateLoraCloudIntegration,
      callback);
};


/**
 * @param {!proto.api.UpdateLoraCloudIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.updateLoraCloudIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/UpdateLoraCloudIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateLoraCloudIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteLoraCloudIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_DeleteLoraCloudIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/DeleteLoraCloudIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteLoraCloudIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteLoraCloudIntegrationRequest} request
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
 *   !proto.api.DeleteLoraCloudIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_DeleteLoraCloudIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteLoraCloudIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteLoraCloudIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.deleteLoraCloudIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/DeleteLoraCloudIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteLoraCloudIntegration,
      callback);
};


/**
 * @param {!proto.api.DeleteLoraCloudIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.deleteLoraCloudIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/DeleteLoraCloudIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteLoraCloudIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreateGcpPubSubIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_CreateGcpPubSubIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/CreateGcpPubSubIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.CreateGcpPubSubIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateGcpPubSubIntegrationRequest} request
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
 *   !proto.api.CreateGcpPubSubIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_CreateGcpPubSubIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateGcpPubSubIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.CreateGcpPubSubIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.createGcpPubSubIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/CreateGcpPubSubIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateGcpPubSubIntegration,
      callback);
};


/**
 * @param {!proto.api.CreateGcpPubSubIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.createGcpPubSubIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/CreateGcpPubSubIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateGcpPubSubIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetGcpPubSubIntegrationRequest,
 *   !proto.api.GetGcpPubSubIntegrationResponse>}
 */
const methodDescriptor_ApplicationService_GetGcpPubSubIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/GetGcpPubSubIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.GetGcpPubSubIntegrationRequest,
  proto.api.GetGcpPubSubIntegrationResponse,
  /**
   * @param {!proto.api.GetGcpPubSubIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetGcpPubSubIntegrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetGcpPubSubIntegrationRequest,
 *   !proto.api.GetGcpPubSubIntegrationResponse>}
 */
const methodInfo_ApplicationService_GetGcpPubSubIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetGcpPubSubIntegrationResponse,
  /**
   * @param {!proto.api.GetGcpPubSubIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetGcpPubSubIntegrationResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetGcpPubSubIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetGcpPubSubIntegrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetGcpPubSubIntegrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.getGcpPubSubIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/GetGcpPubSubIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetGcpPubSubIntegration,
      callback);
};


/**
 * @param {!proto.api.GetGcpPubSubIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetGcpPubSubIntegrationResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.getGcpPubSubIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/GetGcpPubSubIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetGcpPubSubIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateGcpPubSubIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_UpdateGcpPubSubIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/UpdateGcpPubSubIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateGcpPubSubIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateGcpPubSubIntegrationRequest} request
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
 *   !proto.api.UpdateGcpPubSubIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_UpdateGcpPubSubIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateGcpPubSubIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateGcpPubSubIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.updateGcpPubSubIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/UpdateGcpPubSubIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateGcpPubSubIntegration,
      callback);
};


/**
 * @param {!proto.api.UpdateGcpPubSubIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.updateGcpPubSubIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/UpdateGcpPubSubIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateGcpPubSubIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteGcpPubSubIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_DeleteGcpPubSubIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/DeleteGcpPubSubIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteGcpPubSubIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteGcpPubSubIntegrationRequest} request
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
 *   !proto.api.DeleteGcpPubSubIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_DeleteGcpPubSubIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteGcpPubSubIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteGcpPubSubIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.deleteGcpPubSubIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/DeleteGcpPubSubIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteGcpPubSubIntegration,
      callback);
};


/**
 * @param {!proto.api.DeleteGcpPubSubIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.deleteGcpPubSubIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/DeleteGcpPubSubIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteGcpPubSubIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreateAwsSnsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_CreateAwsSnsIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/CreateAwsSnsIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.CreateAwsSnsIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateAwsSnsIntegrationRequest} request
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
 *   !proto.api.CreateAwsSnsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_CreateAwsSnsIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateAwsSnsIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.CreateAwsSnsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.createAwsSnsIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/CreateAwsSnsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateAwsSnsIntegration,
      callback);
};


/**
 * @param {!proto.api.CreateAwsSnsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.createAwsSnsIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/CreateAwsSnsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateAwsSnsIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetAwsSnsIntegrationRequest,
 *   !proto.api.GetAwsSnsIntegrationResponse>}
 */
const methodDescriptor_ApplicationService_GetAwsSnsIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/GetAwsSnsIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.GetAwsSnsIntegrationRequest,
  proto.api.GetAwsSnsIntegrationResponse,
  /**
   * @param {!proto.api.GetAwsSnsIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetAwsSnsIntegrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetAwsSnsIntegrationRequest,
 *   !proto.api.GetAwsSnsIntegrationResponse>}
 */
const methodInfo_ApplicationService_GetAwsSnsIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetAwsSnsIntegrationResponse,
  /**
   * @param {!proto.api.GetAwsSnsIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetAwsSnsIntegrationResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetAwsSnsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetAwsSnsIntegrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetAwsSnsIntegrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.getAwsSnsIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/GetAwsSnsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetAwsSnsIntegration,
      callback);
};


/**
 * @param {!proto.api.GetAwsSnsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetAwsSnsIntegrationResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.getAwsSnsIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/GetAwsSnsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetAwsSnsIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateAwsSnsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_UpdateAwsSnsIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/UpdateAwsSnsIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateAwsSnsIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateAwsSnsIntegrationRequest} request
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
 *   !proto.api.UpdateAwsSnsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_UpdateAwsSnsIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateAwsSnsIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateAwsSnsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.updateAwsSnsIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/UpdateAwsSnsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateAwsSnsIntegration,
      callback);
};


/**
 * @param {!proto.api.UpdateAwsSnsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.updateAwsSnsIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/UpdateAwsSnsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateAwsSnsIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteAwsSnsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_DeleteAwsSnsIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/DeleteAwsSnsIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteAwsSnsIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteAwsSnsIntegrationRequest} request
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
 *   !proto.api.DeleteAwsSnsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_DeleteAwsSnsIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteAwsSnsIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteAwsSnsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.deleteAwsSnsIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/DeleteAwsSnsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteAwsSnsIntegration,
      callback);
};


/**
 * @param {!proto.api.DeleteAwsSnsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.deleteAwsSnsIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/DeleteAwsSnsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteAwsSnsIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreateAzureServiceBusIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_CreateAzureServiceBusIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/CreateAzureServiceBusIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.CreateAzureServiceBusIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateAzureServiceBusIntegrationRequest} request
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
 *   !proto.api.CreateAzureServiceBusIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_CreateAzureServiceBusIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreateAzureServiceBusIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.CreateAzureServiceBusIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.createAzureServiceBusIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/CreateAzureServiceBusIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateAzureServiceBusIntegration,
      callback);
};


/**
 * @param {!proto.api.CreateAzureServiceBusIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.createAzureServiceBusIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/CreateAzureServiceBusIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreateAzureServiceBusIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetAzureServiceBusIntegrationRequest,
 *   !proto.api.GetAzureServiceBusIntegrationResponse>}
 */
const methodDescriptor_ApplicationService_GetAzureServiceBusIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/GetAzureServiceBusIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.GetAzureServiceBusIntegrationRequest,
  proto.api.GetAzureServiceBusIntegrationResponse,
  /**
   * @param {!proto.api.GetAzureServiceBusIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetAzureServiceBusIntegrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetAzureServiceBusIntegrationRequest,
 *   !proto.api.GetAzureServiceBusIntegrationResponse>}
 */
const methodInfo_ApplicationService_GetAzureServiceBusIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetAzureServiceBusIntegrationResponse,
  /**
   * @param {!proto.api.GetAzureServiceBusIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetAzureServiceBusIntegrationResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetAzureServiceBusIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetAzureServiceBusIntegrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetAzureServiceBusIntegrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.getAzureServiceBusIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/GetAzureServiceBusIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetAzureServiceBusIntegration,
      callback);
};


/**
 * @param {!proto.api.GetAzureServiceBusIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetAzureServiceBusIntegrationResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.getAzureServiceBusIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/GetAzureServiceBusIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetAzureServiceBusIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateAzureServiceBusIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_UpdateAzureServiceBusIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/UpdateAzureServiceBusIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateAzureServiceBusIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateAzureServiceBusIntegrationRequest} request
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
 *   !proto.api.UpdateAzureServiceBusIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_UpdateAzureServiceBusIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateAzureServiceBusIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateAzureServiceBusIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.updateAzureServiceBusIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/UpdateAzureServiceBusIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateAzureServiceBusIntegration,
      callback);
};


/**
 * @param {!proto.api.UpdateAzureServiceBusIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.updateAzureServiceBusIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/UpdateAzureServiceBusIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdateAzureServiceBusIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteAzureServiceBusIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_DeleteAzureServiceBusIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/DeleteAzureServiceBusIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteAzureServiceBusIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteAzureServiceBusIntegrationRequest} request
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
 *   !proto.api.DeleteAzureServiceBusIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_DeleteAzureServiceBusIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteAzureServiceBusIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteAzureServiceBusIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.deleteAzureServiceBusIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/DeleteAzureServiceBusIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteAzureServiceBusIntegration,
      callback);
};


/**
 * @param {!proto.api.DeleteAzureServiceBusIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.deleteAzureServiceBusIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/DeleteAzureServiceBusIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeleteAzureServiceBusIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreatePilotThingsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_CreatePilotThingsIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/CreatePilotThingsIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.CreatePilotThingsIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreatePilotThingsIntegrationRequest} request
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
 *   !proto.api.CreatePilotThingsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_CreatePilotThingsIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.CreatePilotThingsIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.CreatePilotThingsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.createPilotThingsIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/CreatePilotThingsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreatePilotThingsIntegration,
      callback);
};


/**
 * @param {!proto.api.CreatePilotThingsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.createPilotThingsIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/CreatePilotThingsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_CreatePilotThingsIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetPilotThingsIntegrationRequest,
 *   !proto.api.GetPilotThingsIntegrationResponse>}
 */
const methodDescriptor_ApplicationService_GetPilotThingsIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/GetPilotThingsIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.GetPilotThingsIntegrationRequest,
  proto.api.GetPilotThingsIntegrationResponse,
  /**
   * @param {!proto.api.GetPilotThingsIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetPilotThingsIntegrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetPilotThingsIntegrationRequest,
 *   !proto.api.GetPilotThingsIntegrationResponse>}
 */
const methodInfo_ApplicationService_GetPilotThingsIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetPilotThingsIntegrationResponse,
  /**
   * @param {!proto.api.GetPilotThingsIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetPilotThingsIntegrationResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetPilotThingsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetPilotThingsIntegrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetPilotThingsIntegrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.getPilotThingsIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/GetPilotThingsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetPilotThingsIntegration,
      callback);
};


/**
 * @param {!proto.api.GetPilotThingsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetPilotThingsIntegrationResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.getPilotThingsIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/GetPilotThingsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GetPilotThingsIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdatePilotThingsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_UpdatePilotThingsIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/UpdatePilotThingsIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.UpdatePilotThingsIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdatePilotThingsIntegrationRequest} request
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
 *   !proto.api.UpdatePilotThingsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_UpdatePilotThingsIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdatePilotThingsIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdatePilotThingsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.updatePilotThingsIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/UpdatePilotThingsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdatePilotThingsIntegration,
      callback);
};


/**
 * @param {!proto.api.UpdatePilotThingsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.updatePilotThingsIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/UpdatePilotThingsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_UpdatePilotThingsIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeletePilotThingsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ApplicationService_DeletePilotThingsIntegration = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/DeletePilotThingsIntegration',
  grpc.web.MethodType.UNARY,
  proto.api.DeletePilotThingsIntegrationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeletePilotThingsIntegrationRequest} request
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
 *   !proto.api.DeletePilotThingsIntegrationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ApplicationService_DeletePilotThingsIntegration = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeletePilotThingsIntegrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeletePilotThingsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.deletePilotThingsIntegration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/DeletePilotThingsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeletePilotThingsIntegration,
      callback);
};


/**
 * @param {!proto.api.DeletePilotThingsIntegrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.deletePilotThingsIntegration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/DeletePilotThingsIntegration',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_DeletePilotThingsIntegration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GenerateMqttIntegrationClientCertificateRequest,
 *   !proto.api.GenerateMqttIntegrationClientCertificateResponse>}
 */
const methodDescriptor_ApplicationService_GenerateMqttIntegrationClientCertificate = new grpc.web.MethodDescriptor(
  '/api.ApplicationService/GenerateMqttIntegrationClientCertificate',
  grpc.web.MethodType.UNARY,
  proto.api.GenerateMqttIntegrationClientCertificateRequest,
  proto.api.GenerateMqttIntegrationClientCertificateResponse,
  /**
   * @param {!proto.api.GenerateMqttIntegrationClientCertificateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GenerateMqttIntegrationClientCertificateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GenerateMqttIntegrationClientCertificateRequest,
 *   !proto.api.GenerateMqttIntegrationClientCertificateResponse>}
 */
const methodInfo_ApplicationService_GenerateMqttIntegrationClientCertificate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GenerateMqttIntegrationClientCertificateResponse,
  /**
   * @param {!proto.api.GenerateMqttIntegrationClientCertificateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GenerateMqttIntegrationClientCertificateResponse.deserializeBinary
);


/**
 * @param {!proto.api.GenerateMqttIntegrationClientCertificateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GenerateMqttIntegrationClientCertificateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GenerateMqttIntegrationClientCertificateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApplicationServiceClient.prototype.generateMqttIntegrationClientCertificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApplicationService/GenerateMqttIntegrationClientCertificate',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GenerateMqttIntegrationClientCertificate,
      callback);
};


/**
 * @param {!proto.api.GenerateMqttIntegrationClientCertificateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GenerateMqttIntegrationClientCertificateResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApplicationServicePromiseClient.prototype.generateMqttIntegrationClientCertificate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApplicationService/GenerateMqttIntegrationClientCertificate',
      request,
      metadata || {},
      methodDescriptor_ApplicationService_GenerateMqttIntegrationClientCertificate);
};


module.exports = proto.api;

