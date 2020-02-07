import {
  Method,
  PermissionSchemeCreateParams,
  PermissionSchemeGetAllParams,
  PermissionSchemeResult,
  PermissionSchemeUpdateParams,
} from '../declaration';
import { JiraCoreApi } from '../core';

export class PermissionSchemeApi extends JiraCoreApi {
  url: string = '/permissionscheme';

  async getAll(params: PermissionSchemeGetAllParams): Promise<PermissionSchemeResult[]> {
    return (await this.sendRequest(this.endpoint(Method.GET, undefined, params))) as PermissionSchemeResult[];
  }

  async get(id: number): Promise<PermissionSchemeResult> {
    return (await this.sendRequest(this.endpoint(Method.GET, id))) as PermissionSchemeResult;
  }

  async create(params: PermissionSchemeCreateParams): Promise<PermissionSchemeResult> {
    const { expand, ...other } = params;
    return (await this.sendRequest(this.endpoint(Method.POST, undefined, expand, other))) as PermissionSchemeResult;
  }

  async update(params: PermissionSchemeUpdateParams): Promise<PermissionSchemeResult> {
    const { id, expand, ...other } = params;
    return (await this.sendRequest(this.endpoint(Method.PUT, id, expand, other))) as PermissionSchemeResult;
  }

  async delete(id: number): Promise<void> {
    await this.sendRequest(this.endpoint(Method.DELETE, id));
  }
}
