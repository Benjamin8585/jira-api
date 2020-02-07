import { Method } from '../declaration';
import { JiraCoreApi } from '../core';
import { ProjectCategoryCreateParams, ProjectCategoryUpdateParams, ProjectCategoryResult } from '../declaration';

export class ProjectCategoryApi extends JiraCoreApi {
  url: string = '/projectCategory';

  async getAll(): Promise<ProjectCategoryResult[]> {
    return (await this.sendRequest(this.endpoint(Method.GET))) as ProjectCategoryResult[];
  }

  async get(id: number): Promise<ProjectCategoryResult> {
    return (await this.sendRequest(this.endpoint(Method.GET, id))) as ProjectCategoryResult;
  }

  async create(params: ProjectCategoryCreateParams): Promise<ProjectCategoryResult> {
    return (await this.sendRequest(this.endpoint(Method.POST, undefined, undefined, params))) as ProjectCategoryResult;
  }

  async update(params: ProjectCategoryUpdateParams): Promise<ProjectCategoryResult> {
    const { id, ...other } = params;
    return (await this.sendRequest(this.endpoint(Method.PUT, id, undefined, other))) as ProjectCategoryResult;
  }

  async delete(id: number): Promise<void> {
    await this.sendRequest(this.endpoint(Method.DELETE, id));
  }
}
