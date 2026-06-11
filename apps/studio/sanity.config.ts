// sanity.config.js

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';
import { env } from './loadEnv';
import { Logo } from './plugins/Logo';
import { refreshEtsyProducts } from './plugins/RefreshEtsyProducts';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

// 'releases' is the Scheduled Drafts tab (so titled when releases are off)
const hiddenTools = ['releases'];

export default defineConfig({
  title: 'Sally Payne',
  projectId: 's9bzuqxn',
  dataset: 'prod',
  plugins: [
    structureTool({
      structure,
    }),
    media(),
    refreshEtsyProducts(),
    visionTool(),
  ],
  scheduledPublishing: {
    enabled: false,
  },
  tasks: {
    enabled: false,
  },
  releases: {
    enabled: false,
  },
  document: {
    comments: {
      enabled: false,
    },
    newDocumentOptions: (prev, { creationContext }) => {
      const { type } = creationContext;
      // Products are synced from Etsy, never created by hand
      const filtered = prev.filter(
        (template) => template.templateId !== 'product',
      );
      if (type === 'global') {
        return filtered.filter(
          (template) => template.templateId !== 'settings',
        );
      }
      return filtered;
    },
  },
  tools: (prev) => {
    const tools = prev.filter((tool) => !hiddenTools.includes(tool.name));
    if (env.DEV) {
      return tools;
    }
    return tools.filter((tool) => tool.name !== 'vision');
  },
  schema: {
    types: schemaTypes,
  },
  icon: Logo,
});
