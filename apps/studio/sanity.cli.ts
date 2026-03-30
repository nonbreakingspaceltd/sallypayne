// sanity.cli.js
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 's9bzuqxn',
    dataset: 'prod',
  },
  studioHost: 'sallypayne',
  deployment: {
    appId: '16b202c31788bef76971f6f8',
  },
});
