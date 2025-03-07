/// <reference types="vite/client" />

interface ImportMetaEnv {
  DEV: boolean;
  SANITY_STUDIO_API_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type Env = ImportMetaEnv;
