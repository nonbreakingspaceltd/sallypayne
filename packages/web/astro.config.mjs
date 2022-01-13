import 'dotenv/config';
import svgLoader from 'vite-svg-loader';

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
  projectRoot: '.',
  pages: './src/pages',
  dist: './dist',
  public: './public',
  buildOptions: {
    site: siteUrl(),
    sitemap: true,
  },
  devOptions: {
    port: devPort,
  },
  renderers: ['@astrojs/renderer-vue'],
  vite: {
    plugins: [svgLoader()],
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          return `assets/[hash].[ext]`;
        },
        chunkFileNames: (chunkInfo) => {
          return `assets/[hash].js`;
        },
        entryFileNames: (chunkInfo) => {
          return useDefault ? '[name].js' : `assets/[hash].js`;
        },
      },
    },
  },
};
