require('dotenv/config');

const plugins = [
  require('postcss-import'),
  require('postcss-at-rules-variables'),
  require('postcss-mixins'),
  require('postcss-nested'),
  require('postcss-custom-media'),
  require('postcss-pxtorem')({
    propWhiteList: [],
  }),
  require('postcss-sorting')({
    order: [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules',
      'rules',
    ],
    'properties-order': 'alphabetical',
    'unspecified-properties-position': 'bottom',
  }),
  require('autoprefixer'),
];

module.exports = {
  plugins: process.env.MINIFIED_CSS ? [...plugins, require('cssnano')] : plugins,
};
