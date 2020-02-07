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
