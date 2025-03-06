# @sallypayne/web

[![Build website](https://github.com/nonbreakingspaceltd/sallypayne/actions/workflows/build-website.yml/badge.svg?branch=main)](https://github.com/nonbreakingspaceltd/sallypayne/actions/workflows/build-website.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/012cbb34-aa49-495c-8b38-5c32000aeeaf/deploy-status)](https://app.netlify.com/sites/sallypayne/deploys)

## Commands

- `pnpm dev` – Spins up development environment
- `pnpm build` – Builds production ready code
- `pnpm serve` – Builds and serves production ready code

## Studio/CMS and Data Sources

Content is sourced from Sanity - [/apps/studio](./apps/studio)

### Sanity Config

Configure the Sanity Token, Project ID and Dataset. Add the following to a `.env` file at the root of this package:

```bash
PUBLIC_SANITY_STUDIO_API_PROJECT_ID=<string>
PUBLIC_SANITY_STUDIO_API_DATASET=<string>
PUBLIC_SANITY_STUDIO_API_VERSION=<string> (e.g. 2021-03-25)
PUBLIC_SANITY_STUDIO_API_TOKEN=<string>
```

### Etsy Config

Configure the Etsy Token and Store ID. Add the following to a `.env` file at the root of this package:

```bash
PUBLIC_ETSY_STORE_ID=<string>
PUBLIC_ETSY_API_TOKEN=<string>
```

To gain access to Tokens and ID's, please contact a project owner.

## Additional Environment Variables

```bash
MINIFIED_CSS=<boolean>
SITE_URL=<string> (e.g. https://www.sallypayne.com)
```

## URL's

- Netlify Deployment - <https://sallypayne.netlify.app/>
- Netlify Settings - <https://app.netlify.com/sites/sallypayne/overview>

## Using Vue with Astro

This example showcases Astro's built-in support for [Vue](https://v3.vuejs.org/).
