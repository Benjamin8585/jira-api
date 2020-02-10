import { Dictionary } from './index';

export interface IssueSecuritySchemeResult {
  self: string;
  id: number;
  name: string;
  description: string;
  defaultSecurityLevelId: number;
}

export interface NotificationSchemeResult {
  expand: string;
  id: number;
  self: string;
  name: string;
  description: string;
  notificationSchemeEvents: any[];
}

export interface PermissionSchemeResult {
  id: number;
  self: string;
  name: string;
  description: string;
}


export interface ProjectResult {
  self: string;
  id: number;
  key: string;
  name: string;
  description: string;
  lead: any;
  components: any[];
  issueTypes: any[];
  url: string;
  email: string;
  assigneeType: string;
  versions: any[];
  roles: Dictionary<any>;
  avatarUrls: Dictionary<string>;
  projectCategory: ProjectCategoryResult;
  simplified: boolean;
  style: string;
  properties: any;
  insights: any;
}

export interface ProjectPageResult {
  self: string;
  nextPage: string;
  maxResults: number;
  startAt: number;
  total: number;
  isLast: boolean;
  values: ProjectResult[];
}

export interface ProjectSmallResult {
  self: string;
  id: number;
  key: string;
}

export interface ProjectCategoryResult {
  self: string;
  id: string;
  name: string;
  description: string;
}

export interface UserResult {
  self: string;
  accountId: string;
  accountType: string; // atlassian, app, customer
  emailAddress: string;
  avatarUrls: any[];
  displayName: string;
  active: boolean;
  timeZone: string;
  locale: string;
  groups: any[];
  applicationRoles: any[];
  expand: string;
}

export interface PageUserResult {
  self: string;
  maxResults: number;
  startAt: number;
  total: number;
  isLast: boolean;
  values: UserResult[]
}

export interface UserAccountIdResult {
  username: string;
  accountId: string;
}

export interface UserColumnResult {
  label: string;
  value: string;
}

export interface UserEmailResult {
  accountId: string;
  email: string;
}

export interface UserGroupResult {
  name: string;
  self: string;
}
