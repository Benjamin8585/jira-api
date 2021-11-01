
## Setup tests locally

Create an `.env` file with this values:

- `JIRA_HOST = yourhostname.atlassian.net` (without `https://`)
- `JIRA_EMAIL = your@jira.email`
- `JIRA_TOKEN = your_jira_token`
- `JIRA_ACCOUNT_ID = your_account_id`

Then you can run `npm run test` and the tests should work properly with your JIRA instance

## TO-DO

### v3.1.x (Beta version)

- Add badges:
    - Language
    - Coverage
- Automatically publish library
- CI Setup
- Renovate setup
- Implement missing endpoints
- Reach 100% Coverage
- Conventions for commits and pull requests
- Add License
- Switch to eslint
- Support of non-cloud instances