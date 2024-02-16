import 'dotenv/config';

import postcssImport from 'postcss-import';
import postcssAtRulesVariables from 'postcss-at-rules-variables';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssCustomMedia from 'postcss-custom-media';
import postcssPxtorem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

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
