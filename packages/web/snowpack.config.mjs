// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

export default {
  plugins: ['snowpack-vue-svg-plugin', '@snowpack/plugin-postcss'],
  knownEntrypoints: ['vue/server-renderer'],
};
