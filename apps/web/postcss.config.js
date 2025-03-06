import 'dotenv/config';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssAtRulesVariables from 'postcss-at-rules-variables';
import postcssCustomMedia from 'postcss-custom-media';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssPxtorem from 'postcss-pxtorem';

const plugins = [
  postcssImport,
  postcssAtRulesVariables,
  postcssMixins,
  postcssNested,
  postcssCustomMedia,
  postcssPxtorem({
    propWhiteList: [],
  }),
  autoprefixer,
];

export default {
  plugins: process.env.MINIFIED_CSS ? [...plugins, cssnano] : plugins,
};
