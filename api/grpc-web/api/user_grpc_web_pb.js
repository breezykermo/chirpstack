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
proto.api = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.UserServiceClient =
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
proto.api.UserServicePromiseClient =
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
 *   !proto.api.CreateUserRequest,
 *   !proto.api.CreateUserResponse>}
 */
const methodDescriptor_UserService_Create = new grpc.web.MethodDescriptor(
  '/api.UserService/Create',
  grpc.web.MethodType.UNARY,
  proto.api.CreateUserRequest,
  proto.api.CreateUserResponse,
  /**
   * @param {!proto.api.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CreateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.CreateUserRequest,
 *   !proto.api.CreateUserResponse>}
 */
const methodInfo_UserService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.CreateUserResponse,
  /**
   * @param {!proto.api.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.api.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.UserServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create,
      callback);
};


/**
 * @param {!proto.api.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.CreateUserResponse>}
 *     Promise that resolves to the response
 */
proto.api.UserServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetUserRequest,
 *   !proto.api.GetUserResponse>}
 */
const methodDescriptor_UserService_Get = new grpc.web.MethodDescriptor(
  '/api.UserService/Get',
  grpc.web.MethodType.UNARY,
  proto.api.GetUserRequest,
  proto.api.GetUserResponse,
  /**
   * @param {!proto.api.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetUserRequest,
 *   !proto.api.GetUserResponse>}
 */
const methodInfo_UserService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetUserResponse,
  /**
   * @param {!proto.api.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.UserServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.UserService/Get',
      request,
      metadata || {},
      methodDescriptor_UserService_Get,
      callback);
};


/**
 * @param {!proto.api.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetUserResponse>}
 *     Promise that resolves to the response
 */
proto.api.UserServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.UserService/Get',
      request,
      metadata || {},
      methodDescriptor_UserService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_Update = new grpc.web.MethodDescriptor(
  '/api.UserService/Update',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateUserRequest} request
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
 *   !proto.api.UpdateUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.UserServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update,
      callback);
};


/**
 * @param {!proto.api.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.UserServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_Delete = new grpc.web.MethodDescriptor(
  '/api.UserService/Delete',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteUserRequest} request
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
 *   !proto.api.DeleteUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.UserServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete,
      callback);
};


/**
 * @param {!proto.api.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.UserServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ListUsersRequest,
 *   !proto.api.ListUsersResponse>}
 */
const methodDescriptor_UserService_List = new grpc.web.MethodDescriptor(
  '/api.UserService/List',
  grpc.web.MethodType.UNARY,
  proto.api.ListUsersRequest,
  proto.api.ListUsersResponse,
  /**
   * @param {!proto.api.ListUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ListUsersRequest,
 *   !proto.api.ListUsersResponse>}
 */
const methodInfo_UserService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ListUsersResponse,
  /**
   * @param {!proto.api.ListUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListUsersResponse.deserializeBinary
);


/**
 * @param {!proto.api.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ListUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ListUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.UserServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.UserService/List',
      request,
      metadata || {},
      methodDescriptor_UserService_List,
      callback);
};


/**
 * @param {!proto.api.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ListUsersResponse>}
 *     Promise that resolves to the response
 */
proto.api.UserServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.UserService/List',
      request,
      metadata || {},
      methodDescriptor_UserService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateUserPasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_UpdatePassword = new grpc.web.MethodDescriptor(
  '/api.UserService/UpdatePassword',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateUserPasswordRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateUserPasswordRequest} request
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
 *   !proto.api.UpdateUserPasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_UpdatePassword = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.api.UpdateUserPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.api.UpdateUserPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.UserServiceClient.prototype.updatePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.UserService/UpdatePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdatePassword,
      callback);
};


/**
 * @param {!proto.api.UpdateUserPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.api.UserServicePromiseClient.prototype.updatePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.UserService/UpdatePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdatePassword);
};


module.exports = proto.api;

