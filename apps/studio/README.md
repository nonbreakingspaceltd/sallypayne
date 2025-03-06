# @sallypayne/studio

Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

[View the Sanity documentation](https://www.sanity.io/docs)

## Commands

- `pnpm start` – Spins up development environment
- `pnpm build` – Builds production ready code
- `pnpm deploy` – Deploys studio to Sanity

## Sanity Config

By default, Sanity will use the default dataset specified in the configured Sanity studio settings file (`sanity.json` at the root of this package). To override this, create a `.env.development` file at the root of this package:

```bash
SANITY_STUDIO_API_DATASET=<string>
```

See [Studio Environment Variables](https://www.sanity.io/docs/studio-environment-variables) for more information.

## URL's

- Production Studio - <https://sallypayne.sanity.studio>

## Suggested Reading

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
