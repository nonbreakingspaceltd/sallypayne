const { PurgeCSS } = require('purgecss');
// const PostCSS = require('postcss');
const fs = require('fs-extra');
const glob = require('glob');
const kleur = require('kleur');
const path = require('path');
// const postCssPlugins = require('../../postcss.config').plugins;

// relative to package root
const root = path.resolve(__dirname, '../');
const dist = path.resolve(root, './dist');

const purgeCssConfig = {
  safelist: {
    standard: ['body', 'html', 'img', 'a'],
    greedy: [/^is-/, /^has-/, /^js/, /^no-js/, /^data-/, /^disabled/],
  },
  variables: false,
};

glob('**/*.html', { root: dist }, (err, files) => {
  if (err) {
    throw err;
  }

  files.forEach(async (filePath) => {
    try {
      let html = await fs.readFileSync(filePath, 'utf-8');

      // get CSS file paths
      const cssFilePaths = html
        .match(/(?<=href=")[^"]+\.css/g)
        ?.map((file) => path.resolve(dist, file.replaceAll('../', '')))
        //.reverse();

      // console.log(filePath, cssFilePaths);

      // if no CSS files found
      if (!cssFilePaths) {
        // remove placeholders
        html.replace('<link id="inline-css">', '');
        html.replace('<link id="preload-fonts">', '');
        // write file
        await fs.outputFile(filePath, html);
        return;
      }

      // get CSS contents
      let css = [];
      if (cssFilePaths) {
        css = await Promise.all(
          cssFilePaths.map(async (cssFilePath) => {
            const cssContent = await fs.readFileSync(cssFilePath, 'utf-8');
            return cssContent;
          })
        );
      }

      // console.log(css)

      // output font preload tags
      const fontFilePaths = css.join(' ').match(/(\/.*\.(woff2)+)/g) || [];
      const fontPreloadLinks = fontFilePaths.map(
        (path) => `<link rel="preload" as="font" href="${path}" crossorigin />`
      );
      html = html.replace('<link id="preload-fonts">', fontPreloadLinks.join('\n'));

      // optimize CSS
      const purgeCssResults = await new PurgeCSS().purge({
        ...purgeCssConfig,
        content: [
          {
            raw: html,
            extension: 'html',
          },
        ],
        css: cssFilePaths,
      });
      const optimizedCss = purgeCssResults?.map(({ css }) => css).join('\n');
      // const orderedCss = await PostCSS(postCssPlugins).process(optimizedCss).then(css => css);

      // console.log(optimizedCss);

      // output inline CSS
      html = html.replace('<link id="inline-css">', `<style>${optimizedCss}</style>`);
      // html = html.replace('<link id="inline-css">', `<style>${orderedCss}</style>`);

      // remove external CSS links
      html = html.replace(/<link rel="stylesheet" href=".*\.css"[^>]+>/g, '');
      html = html.replace(/<link rel="stylesheet" type="text\/css" href=".*\.css"[^>]+>/g, '');

      // write file
      await fs.outputFile(filePath, html);

      // log success
      console.log(
        `[${kleur.bold().blue('transform:css')}]`,
        kleur.green('✔'),
        filePath.split(dist).pop()
      );
    } catch (error) {
      // log error
      console.error(error);
    }
  });
});
