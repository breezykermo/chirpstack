import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as api_gateway_pb from '../api/gateway_pb';


export class GatewayServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: api_gateway_pb.CreateGatewayRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  get(
    request: api_gateway_pb.GetGatewayRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_gateway_pb.GetGatewayResponse) => void
  ): grpcWeb.ClientReadableStream<api_gateway_pb.GetGatewayResponse>;

  update(
    request: api_gateway_pb.UpdateGatewayRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  delete(
    request: api_gateway_pb.DeleteGatewayRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  list(
    request: api_gateway_pb.ListGatewaysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_gateway_pb.ListGatewaysResponse) => void
  ): grpcWeb.ClientReadableStream<api_gateway_pb.ListGatewaysResponse>;

  generateClientCertificate(
    request: api_gateway_pb.GenerateGatewayClientCertificateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_gateway_pb.GenerateGatewayClientCertificateResponse) => void
  ): grpcWeb.ClientReadableStream<api_gateway_pb.GenerateGatewayClientCertificateResponse>;

  getStats(
    request: api_gateway_pb.GetGatewayStatsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: api_gateway_pb.GetGatewayStatsResponse) => void
  ): grpcWeb.ClientReadableStream<api_gateway_pb.GetGatewayStatsResponse>;

}

export class GatewayServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: api_gateway_pb.CreateGatewayRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  get(
    request: api_gateway_pb.GetGatewayRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_gateway_pb.GetGatewayResponse>;

  update(
    request: api_gateway_pb.UpdateGatewayRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  delete(
    request: api_gateway_pb.DeleteGatewayRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  list(
    request: api_gateway_pb.ListGatewaysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_gateway_pb.ListGatewaysResponse>;

  generateClientCertificate(
    request: api_gateway_pb.GenerateGatewayClientCertificateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_gateway_pb.GenerateGatewayClientCertificateResponse>;

  getStats(
    request: api_gateway_pb.GetGatewayStatsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_gateway_pb.GetGatewayStatsResponse>;

}

