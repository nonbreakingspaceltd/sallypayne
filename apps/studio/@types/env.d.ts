/// <reference types="vite/client" />

interface ImportMetaEnv {
  DEV: boolean;
  SANITY_STUDIO_API_TOKEN: string;
  SANITY_STUDIO_PROJECT_ID: string;
  SANITY_STUDIO_DATASET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type Env = ImportMetaEnv;
