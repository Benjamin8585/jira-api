import { config } from "dotenv";

const result = config().parsed;
const {
  JIRA_HOST, JIRA_EMAIL, JIRA_TOKEN
} = result as {
  [key: string]: string,
};

import { JiraClient, ProjectCreateParams, ProjectPageResult, ProjectResult, ProjectSmallResult, } from '../index';

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

  async getFirstByName(name: string): Promise<ProjectResult | undefined> {
    const projectPage: ProjectPageResult = await this.client.project.search({ query: name, maxResults: 1 });
    console.log('Project page result: ', projectPage);
    const matchingName = projectPage.values.filter((value => value.name === name));
    return matchingName.length > 0 ? matchingName[0] : undefined;
  }
}

let projectId: number;
let projectKey: string;

describe('JIRAClient', () => {

  const jiraAPI = new JiraService(JIRA_HOST, JIRA_EMAIL, JIRA_TOKEN);

  const name = 'testing-cli';

  test('create project should work', async () => {
    const project = await jiraAPI.createProject(name, 'CLI12', 'Direct test');
    expect(project).toBeDefined();
    projectId = project.id;
    projectKey = project.key;
  });

  test('getProject should work', async () => {
    const project = await jiraAPI.client.project.get(projectId);
    console.log('Project found with id: ', project);
    const project2 = await jiraAPI.client.project.get('djsbvdjbv');
    console.log('Project 2 found with id: ', project2);
  });

  test('getFirstByName should work', async () => {
    const project = await jiraAPI.getFirstByName(name);
    const project2 = await jiraAPI.getFirstByName('dibvudsbvbbvsudjbv');
    console.log('Project found by name: ', project);
    console.log('Project 2 found by name: ', project2);
  });

  test('delete project should work', async () => {
    await jiraAPI.client.project.delete(projectId);
  });

});

