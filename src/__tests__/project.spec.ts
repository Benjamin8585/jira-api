import { jiraAPI } from "./setup";

let projectId: number;
let projectKey: string;
const name = 'testing-cli';

describe('project', () => {
    test('create project should work', async () => {
        const project = await jiraAPI.createProject(name, 'CLI12', 'Direct test');
        expect(project).toBeDefined();
        projectId = project.id;
        projectKey = project.key;
    });

    test('getProject should work', async () => {
        const project = await jiraAPI.client.project.get(projectId);
        expect(project).not.toEqual(undefined);
        const project2 = await jiraAPI.client.project.get('djsbvdjbv');
        expect(project2).toEqual(undefined);
    });

    test('delete project should work', async () => {
        await jiraAPI.client.project.delete(projectId);
    });
});
