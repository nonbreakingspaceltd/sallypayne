import 'dotenv/config';
import svgLoader from 'vite-svg-loader';
import env from 'vite-plugin-environment';
import vue from '@astrojs/vue';
import compress from 'astro-compress';
import purgecss from 'astro-purgecss';
import { defineConfig } from 'astro/config';

const devPort = 4321;

function siteUrl() {
  let url;
  if (process.env.CONTEXT === 'production') {
    url = process.env.SITE_URL;
  } else if (process.env.NETLIFY) {
    url = process.env.URL;
  }
  return url || `https://localhost:${devPort}/`;
}

export default defineConfig({
  site: siteUrl(),
  build: {
    assets: 'assets',
  },
  server: {
    port: devPort,
  },
  integrations: [
    vue(),
    purgecss({
      safelist: {
        standard: ['body', 'html', 'img', 'a', ':lang'],
        greedy: [
          /^is-/,
          /^has-/,
          /^js/,
          /^no-js/,
          /^data-/,
          /^disabled/,
          /^[src$=".svg"]/,
          /^[src*=".svg"]/,
          /^cookie/,
        ],
      },
      variables: false,
    }),
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
      }),
      svgLoader(),
    ],
    ssr: {
      noExternal: ['@astrojs/vue'],
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
          hoistTransitiveImports: false,
        },
      },
    },
  },
});
