export interface Dictionary<T> {
  [Key: string]: T;
}

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface EndpointRequest {
  method: Method;
  url: string;
  query?: any;
  data?: any;
}

export * from './params';
export * from './model';
