import { Method } from '../declaration';
import { JiraCoreApi } from '../core';
import { IssueSecuritySchemeResult } from '../declaration';

export class IssueSecuritySchemeApi extends JiraCoreApi {

  url: string = '/issuesecurityschemes';

  async getAll(): Promise<IssueSecuritySchemeResult[]> {
    return (await this.sendRequest(this.endpoint(Method.GET))) as IssueSecuritySchemeResult[];
  }

  async get(id: number): Promise<IssueSecuritySchemeResult> {
    return (await this.sendRequest(this.endpoint(Method.GET, id))) as IssueSecuritySchemeResult;
  }
}
