const core = require('@actions/core');
const github = require('@actions/github');


try {
    // `who-to-greet` input defined in action metadata file
    const issueKey = core.getInput('issue-key');
    const jiraUrl = 'https://temperworks.atlassian.net';
    const jiraApiUrl = `${jiraUrl}/rest/api/2/issue/${issue_key}`;
    console.log(`Adding a comment to JIRA issue ${issueKey}!`);
    console.log(`The branch name: ${github.head_ref}`);
    console.log(`JIRA API URL: ${jiraApiUrl}`);
} catch (error) {
    core.setFailed(error.message);
}




