import { JiraCoreApi } from '../core';
import {
    PageUserResult,
    UserAccountIdResult,
    UserColumnResult, UserEmailResult, UserGroupResult,
    UserResult
} from '../declaration';
import {
    Method,
    UserBulkGetParams,
    UserCreateParams,
    UserGetAccountIdsParams, UserGetAllUsersParams,
    UserGetParams,
    UserSetDefaultColumnsParams
} from '../declaration';

export class UserApi extends JiraCoreApi {
    url: string = '/user';

    // (method: Method, path?: string | number, query?: any, body?: any)
    async get(params: UserGetParams): Promise<UserResult> {
        return (await this.sendRequest(this.endpoint(Method.GET, undefined,  params))) as UserResult;
    }

    async create(params: UserCreateParams): Promise<UserResult> {
        return (await this.sendRequest(this.endpoint(Method.POST, undefined, undefined, params))) as UserResult;
    }

    async delete(accountId: string): Promise<void> {
        return (await this.sendRequest(this.endpoint(Method.DELETE, undefined, { accountId })));
    }

    async bulkGet(params: UserBulkGetParams): Promise<PageUserResult> {
        return (await this.sendRequest(this.endpoint(Method.GET, '/bulk', params))) as PageUserResult;
    }

    async getAccountIds(params: UserGetAccountIdsParams): Promise<UserAccountIdResult[]> {
        return (await this.sendRequest(this.endpoint(Method.GET, '/bulk/migration', params))) as UserAccountIdResult[];
    }

    async getDefaultColumns(accountId: string): Promise<UserColumnResult[]> {
        return (await this.sendRequest(this.endpoint(Method.GET, '/columns', { accountId }))) as UserColumnResult[];
    }

    async setDefaultColumns(params: UserSetDefaultColumnsParams): Promise<any> {
        const { accountId, ...body } = params;
        return (await this.sendRequest(this.endpoint(Method.PUT, '/columns', { accountId }, body)));
    }

    async resetDefaultColumns(accountId: string): Promise<void> {
        return (await this.sendRequest(this.endpoint(Method.DELETE, '/columns', { accountId })));
    }

    async getEmail(accountId: string): Promise<UserEmailResult> {
        return (await this.sendRequest(this.endpoint(Method.GET, '/email', { accountId }))) as UserEmailResult;
    }

    async getEmailBulk(accountIds: string[]): Promise<UserEmailResult[]> {
        return (await this.sendRequest(this.endpoint(Method.GET, '/email/bulk', { accountId: accountIds}))) as UserEmailResult[];
    }

    async getUserGroups(accountId: string): Promise<UserGroupResult[]> {
        return (await this.sendRequest(this.endpoint(Method.GET, '/groups', { accountId }))) as UserGroupResult[];
    }

    async getAllDefault(params: UserGetAllUsersParams): Promise<UserResult[]> {
        return (await this.sendRequest(this.endpoint(Method.GET, 's', params))) as UserResult[];
    }

    async getAll(params: UserGetAllUsersParams): Promise<UserResult[]> {
        return (await this.sendRequest(this.endpoint(Method.GET, 's/search', params))) as UserResult[];
    }
}
