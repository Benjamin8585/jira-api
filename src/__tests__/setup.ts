import { config } from "dotenv";

const result = config().parsed;
const {
  JIRA_HOST, JIRA_EMAIL, JIRA_TOKEN
} = result as {
  [key: string]: string,
};

import { JiraClient, ProjectCreateParams, ProjectSmallResult, } from '../index';

export class JiraService {

  client: JiraClient;

  constructor(host: string, email: string, token: string) {
    this.client = new JiraClient({ host, email, token });
  }

  async createProject(name: string, key?: string, description?: string, url?: string): Promise<ProjectSmallResult> {
    const params: ProjectCreateParams = {
      assigneeType: 'UNASSIGNED',
      avatarId: 10404,
      categoryId: 10005,
      description: description ?? '',
      key: key ?? name.slice(0, 3).toUpperCase(),
      leadAccountId: '5d08e22977d0d20c2f574367',
      notificationScheme: 10000,
      permissionScheme: 10009,
      url: url ?? '',
      name,
      projectTypeKey: 'software',
      projectTemplateKey: 'com.pyxis.greenhopper.jira:gh-simplified-scrum-classic'
    };
    return this.client.project.create(params);
  }
}

export const jiraAPI = new JiraService(JIRA_HOST, JIRA_EMAIL, JIRA_TOKEN);

test.skip('skip', () => {});
