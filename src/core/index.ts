import axios, { AxiosInstance } from 'axios';
import { EndpointRequest, Method } from '../declaration';

export interface JiraClientOptions {
  host: string;
  email: string;
  token: string;
}

export abstract class JiraCoreApi {
  private readonly version: string = '3';
  private readonly host: string;
  private readonly email: string;
  private readonly token: string;

  private readonly instance: AxiosInstance;

  url: string;

  endpoint(method: Method, path?: string | number, query?: any, body?: any): EndpointRequest {
    let url = this.url;
    if (path) {
      if (typeof path === "number") {
        path = `/${path}`
      }
      url += path;
    }
    return {
      method,
      url,
      query,
      body,
    };
  }

  get apiUrl(): string {
    return `https://${this.host}/rest/api/${this.version}/`;
  }

  constructor(params: JiraClientOptions) {
    const { host, email, token } = params;
    this.host = host;
    this.email = email;
    this.token = token;
    this.instance = axios.create({
      baseURL: this.apiUrl,
      auth: { username: this.email, password: this.token },
      headers: { Accept: 'application/json' },
    });
  }

  sendRequest = async (req: EndpointRequest): Promise<any> => {
    return (await this.instance(req)).data;
  };
}
