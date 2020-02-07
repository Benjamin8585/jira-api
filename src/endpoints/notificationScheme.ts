import { Method, NotificationSchemePaginatedParams, NotificationSchemeResult } from '../declaration';
import { JiraCoreApi } from '../core';

export class NotificationSchemeApi extends JiraCoreApi {

  url: string = '/notificationscheme';

  async getPaginated(params: NotificationSchemePaginatedParams): Promise<NotificationSchemeResult[]> {
    return (await this.sendRequest(this.endpoint(Method.GET, undefined, params))) as NotificationSchemeResult[];
  }

  async get(id: number): Promise<NotificationSchemeResult> {
    return (await this.sendRequest(this.endpoint(Method.GET, id))) as NotificationSchemeResult;
  }
}
