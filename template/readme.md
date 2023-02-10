## Get started with your new npm package in seconds

To clone the repository

```bash
git clone https://github.com/himanshubhardwaz/npm-typescript-starter-template
```

Install dependencies:

```bash
yarn add
```

### src/index.ts will be compiled to JavaScript and will be uploaded to npm, so make sure to export required functions from this file.

Changes guide:

1. After making changes in the repository, run

```bash
yarn changeset
```

and select the update type

2. After that to version your changes and update .changeset directory run

```bash
yarn changeset version
```

3. Then push these changes to repository.

```bash
git add .
git commit -m "commit message"
```

Github actions setup:

1. I recommend using PAT (personal access token) to push changes to github.
   Generate a pat with required access to read and write to the repository and add the token to repository secrets.
   settings > secrets and variable > Actions > New repository secret.

2. Add NPM_TOKEN in repository secrets as well. You can follow this blog: https://dev.to/astagi/publish-to-npm-using-github-actions-23fn

![Alt text](images/secrets.png?raw=true "Secrets")

3. You'll also need to give read and write access to github action.
   settings > Actions > General > Workflow permission > Allow read and write access

![Alt text](images/access.png?raw=true "Access")
