// sanity.config.js

import { dashboardTool } from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import { structureTool } from 'sanity/structure';
import { Logo } from './plugins/Logo';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

export default defineConfig({
  title: 'Sally Payne',
  projectId: 's9bzuqxn',
  dataset: 'prod',
  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Deploy',
          sites: [
            {
              title: 'Sally Payne Website',
              apiId: '012cbb34-aa49-495c-8b38-5c32000aeeaf',
              buildHookId: '637217133de31a1723d37f3e',
              name: 'sallypayne',
              url: 'https://www.sallypayne.com',
            },
          ],
        }),
      ],
    }),
    structureTool({
      structure,
    }),
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
      if (type === 'global') {
        return prev.filter((template) => template.templateId !== 'settings');
      }
      return prev;
    },
  },
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== 'vision');
  },
  schema: {
    types: schemaTypes,
  },
  icon: Logo,
});
