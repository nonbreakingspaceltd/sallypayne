const plugins = [
  require('postcss-import'),
  require('postcss-custom-media'),
  require('postcss-at-rules-variables'),
  require('postcss-nested'),
  require('postcss-pxtorem')({
    propWhiteList: [],
  }),
  require('autoprefixer'),
];

module.exports = {
  plugins: process.env.MINIFIED ? [...plugins, require('cssnano')] : plugins,
};
