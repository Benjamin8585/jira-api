export interface NotificationSchemePaginatedParams {
  startAt: number;
  maxResults: number;
  expand: string; // all,field,group,notificationSchemeEvents,projectRole,user
}

export interface PermissionSchemeGetAllParams {
  expand: string; // all,field,group,permissions,projectRole,user
}

export interface PermissionSchemeCreateParams {
  expand: string; // all,field,group,permissions,projectRole,user
  description: string;
  scope: any;
  permissions: any[];
  additional?: any; // You can pass anything here
}

export interface PermissionSchemeUpdateParams {
  id: number;
  expand?: string;
  name: string;
  description?: string;
  scope?: any;
  permissions?: any[];
  additional?: any; // You can pass anything here
}

export interface ProjectCreateParams {
  key: string;
  name: string;
  projectTypeKey: string;
  projectTemplateKey: string;
  description: string;
  leadAccountId: string;
  url: string;
  assigneeType: string;
  avatarId: number;
  issueSecurityScheme: number;
  permissionScheme: number;
  notificationScheme: number;
  categoryId: number;
}

export interface ProjectUpdateParams {
  id: string;
  expand: string;
  key?: string;
  name?: string;
  description: string;
  leadAccountId?: string;
  url: string;
  assigneeType: string;
  avatarId: number;
  issueSecurityScheme: number;
  permissionScheme: number;
  notificationScheme: number;
  categoryId: number;
}

export interface ProjectSearchParams {
  startAt: number;
  maxResults: number;
  orderBy: string;
  query: string;
  typeKey: string;
  categoryId: number;
  searchBy: string;
  action: string;
  expand: string;
}

export interface ProjectCategoryCreateParams {
  name: string;
  description: string;
}

export interface ProjectCategoryUpdateParams {
  id: string;
  name?: string;
  description?: string;
}
