# Developing packages for the mono-repo

## Installation

This repository uses Yarn workspaces. `yarn install` will bootstrap all local packages.

## Adding a new package

Create a new feature branch and add a new package to the `/packages` directory.

Multiple 'types' of packages are nested within directories to keep the repo tidier and collected (e.g `common` contains `components` and `styles`).

## Package naming conventions

Naming packages consistently, logically and in a predictable way will distinguish similar packages from one another at a glance.

Package names should always be lowercase and hyphenated, based on their heirarcy within the `packages` directory.

Pattern: `@{NAMESPACE}/{TYPE_OR_APP_NAME}`

```
/packages/web @sallypayne/web
/packages/studio @sallypayne/studio
/packages/common/styles @sallypayne/common-styles
/packages/common/assets @sallypayne/common-assets
```

## Package documentation

Each package should have it's own README.md documenting things such as third party integrations and URL's to external documentation and how to access secret keys.

**DO NOT** include secret keys directly in any package.
