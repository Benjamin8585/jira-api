import { config } from 'dotenv';

const result = config().parsed;
const { JIRA_HOST, JIRA_EMAIL, JIRA_TOKEN, JIRA_ACCOUNT_ID } = result as {
  [key: string]: string;
};

import { JiraClient, ProjectCreateParams, ProjectSmallResult } from '../index';

export class JiraService {
  client: JiraClient;

  constructor(host: string, email: string, token: string) {
    this.client = new JiraClient({ host, email, token });
  }

  async createProject(name: string, key?: string, description?: string, url?: string): Promise<ProjectSmallResult> {
    const params: ProjectCreateParams = {
      assigneeType: 'UNASSIGNED',
      avatarId: 10404,
      // categoryId: 10000,
      description: description ?? '',
      key: key ?? name.slice(0, 3).toUpperCase(),
      leadAccountId: JIRA_ACCOUNT_ID,
      notificationScheme: 10000,
      // permissionScheme: 10000, Only in paying versions
      url: url ?? '',
      name,
      projectTypeKey: 'software',
      projectTemplateKey: 'com.pyxis.greenhopper.jira:gh-simplified-scrum-classic',
    };
    return this.client.project.create(params);
  }
}

export const jiraAPI = new JiraService(JIRA_HOST, JIRA_EMAIL, JIRA_TOKEN);

test.skip('skip', () => {});
