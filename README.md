# Sally Payne

> Sally&#39;s world of illustration and surface pattern design

This project contains the sorce code for Sally Payne. It is structured as a mono-repo, utilising Yarn workspaces, to facilitate easier maintenance of websites and applications.

## Setup

1. Clone the mono-repo
2. `cd` into the project directory
3. Run `yarn install`

## Continuous Integration (CI) / Continuous Delivery (CD)
Tests, Linting and Builds run as Github Actions. Please see the [`Actions`](https://github.com/nonbreakingspaceltd/sallypayne/actions)
tab for more details on CI workflow.

Websites are deployed on Netlify automatically when code is merged into `main`.

### Workflow guidelines
- The `main` branch is always production-ready/deployable.
- New development is done on feature branches, with frequent rebasing onto `main`.
- All pull requests (PR's) on development branches must be up to date with `main` and tested with the latest code.

[Read the GitHub flow guide for more information](https://guides.github.com/introduction/flow/)

### URL's
Every pull request (PR) will trigger a build, allowing reviewers to test work. The PR deployment URL is posted as a comment on the PR.

## Debugging
If for any instance you hit issues with development builds etc. try:

- Run `yarn install` - it may be that packages have not been symlinked or you're missing new packages.
- Sometimes node packages can get mixed up. Start fresh. Remove all `node_modules` and `yarn.lock` files. This can be done by running the script `yarn reset`.
- Check the error stack - Is there an issue with the code or could it be an issue with the content source?
