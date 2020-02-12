
import { JiraCoreApi } from '../core';
import { Method } from "../declaration";

export class ProjectValidationApi extends JiraCoreApi {

    url: string = '/projectvalidate';

    async getValidKey(key: string): Promise<string> {
        return (await this.sendRequest(this.endpoint(Method.GET, `/validProjectKey?key=${key}`, undefined, undefined)));
    }

    async getValidName(name: string): Promise<string> {
        return (await this.sendRequest(this.endpoint(Method.GET, `/validProjectName?name=${name}`, undefined, undefined)));
    }
}
