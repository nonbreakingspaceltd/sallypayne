// sanity.config.js
import { defineConfig } from 'sanity';
import { schemas } from './schemas';
import { desk } from './desk';
import { visionTool } from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { dashboardTool } from '@sanity/dashboard';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import { Logo } from './plugins/Logo';

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
      structure: desk,
    }),
    visionTool(),
  ],
  scheduledPublishing: {
    enabled: false,
  },
  tasks: {
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
    types: schemas,
  },
  icon: Logo,
});
