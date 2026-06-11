import 'dotenv/config';

import netlify from '@astrojs/netlify';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import env from 'vite-plugin-environment';
import svgLoader from 'vite-svg-loader';

const devPort = 4321;

function siteUrl() {
  let url: string | undefined;
  if (process.env.CONTEXT === 'production') {
    url = process.env.SITE_URL;
  } else if (process.env.NETLIFY) {
    url = process.env.URL;
  }
  return url || `https://localhost:${devPort}/`;
}

export default defineConfig({
  site: siteUrl(),
  // Sanity-driven routes opt out of prerendering with `export const
  // prerender = false`, so published content goes live without a redeploy.
  // PurgeCSS was removed with the move to SSR: it scans built HTML, and
  // server-rendered pages emit none, so their styles would be purged.
  adapter: netlify(),
  build: {
    assets: 'assets',
  },
  server: {
    port: devPort,
  },
  integrations: [
    vue(),
    compress({
      CSS: true,
      HTML: false,
      Image: true,
      JavaScript: true,
      SVG: true,
      Logger: 1,
    }),
  ],
  vite: {
    plugins: [
      env('all', {
        prefix: 'PUBLIC_',
      }) as any,
      svgLoader() as any,
    ],
    ssr: {
      noExternal: ['@astrojs/vue', '@portabletext/vue'],
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
          hoistTransitiveImports: true,
        },
      },
    },
    optimizeDeps: {
      exclude: ['@portabletext/vue'],
    },
  },
});
