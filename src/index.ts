import {
  ProjectCategoryApi,
  IssueSecuritySchemeApi,
  NotificationSchemeApi,
  PermissionSchemeApi,
  ProjectApi,
  UserApi,
  ProjectValidationApi,
} from './endpoints';
import { JiraClientOptions } from './core';

export class JiraClient {
  securityScheme: IssueSecuritySchemeApi;
  notificationScheme: NotificationSchemeApi;
  permissionScheme: PermissionSchemeApi;
  project: ProjectApi;
  projectCategory: ProjectCategoryApi;
  projectKeyNameValidation: ProjectValidationApi;
  user: UserApi;

  constructor(options: JiraClientOptions) {
    this.securityScheme = new IssueSecuritySchemeApi(options);
    this.notificationScheme = new NotificationSchemeApi(options);
    this.permissionScheme = new PermissionSchemeApi(options);
    this.project = new ProjectApi(options);
    this.projectCategory = new ProjectCategoryApi(options);
    this.projectKeyNameValidation = new ProjectValidationApi(options);
    this.user = new UserApi(options);
  }
}

export * from './declaration';
