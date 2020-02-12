import { jiraAPI } from "./setup";

describe('projectKeyNameValidation', () => {

    test('validProjectKey should work if key is not taken', async () => {
        const result = await jiraAPI.client.projectKeyNameValidation.getValidKey('DONOTTAKE');
        expect(result).toEqual('DONOTTAKE');
    });

    test('validProjectName should work if not taken', async () => {
        const result = await jiraAPI.client.projectKeyNameValidation.getValidName('do-not-take-this-name');
        expect(result).toEqual('do-not-take-this-name');
    });
});
