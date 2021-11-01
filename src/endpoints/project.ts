import {
  Method,
  ProjectResult,
  ProjectSmallResult,
  ProjectSearchParams,
  ProjectCreateParams,
  ProjectUpdateParams,
  ProjectPageResult,
} from '../declaration';
import { JiraCoreApi } from '../core';

export class ProjectApi extends JiraCoreApi {
  url: string = '/project';

  async search(params: ProjectSearchParams): Promise<ProjectPageResult> {
    return (await this.sendRequest(this.endpoint(Method.GET, '/search', params))) as ProjectPageResult;
  }

  async get(id: number | string): Promise<ProjectResult | undefined> {
    try {
      return (await this.sendRequest(this.endpoint(Method.GET, `/${id}`))) as ProjectResult;
    } catch (e) {
      if (e.response?.status === 404) {
        return undefined;
      } else {
        throw e;
      }
    }
  }

  async create(params: ProjectCreateParams): Promise<ProjectSmallResult> {
    return (await this.sendRequest(this.endpoint(Method.POST, undefined, undefined, params))) as ProjectSmallResult;
  }

  async update(params: ProjectUpdateParams): Promise<ProjectResult> {
    const { id, expand, ...other } = params;
    return (await this.sendRequest(this.endpoint(Method.PUT, id, expand, other))) as ProjectResult;
  }

  async delete(id: number): Promise<void> {
    await this.sendRequest(this.endpoint(Method.DELETE, id));
  }
}
