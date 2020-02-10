import {
  Method,
  ProjectResult,
  ProjectSmallResult,
  ProjectSearchParams,
  ProjectCreateParams,
  ProjectUpdateParams,
} from '../declaration';
import { JiraCoreApi } from '../core';

export class ProjectApi extends JiraCoreApi {
  url: string = '/project';

  async search(params: ProjectSearchParams): Promise<ProjectResult[]> {
    return (await this.sendRequest(this.endpoint(Method.GET, '/search', params))) as ProjectResult[];
  }

  async get(id: number): Promise<ProjectResult> {
    return (await this.sendRequest(this.endpoint(Method.GET, id))) as ProjectResult;
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
