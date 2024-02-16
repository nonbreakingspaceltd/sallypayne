import 'dotenv/config';
import svgLoader from 'vite-svg-loader';
import env from 'vite-plugin-environment';
import vue from '@astrojs/vue';

const devPort = 3000;

function siteUrl() {
  let url = `https://localhost:${devPort}/`;
  if (process.env.CONTEXT === 'production') {
    url = process.env.SITE_URL;
  } else if (process.env.NETLIFY) {
    url = process.env.URL;
  }
  return url;
}

export default {
  site: siteUrl(),
  build: {
    assets: 'assets',
  },
  integrations: [vue()],
  vite: {
    plugins: [
      env('all', {
        prefix: 'PUBLIC_',
      }),
      svgLoader(),
    ],
    noExternal: ['@astrojs/vue'],
    build: {
      sourcemap: process.env.PUBLIC_SOURCEMAPS === 'true',
      assetsInlineLimit: 0,
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
};
