const { PurgeCSS } = require('purgecss');
const fs = require('fs-extra');
const glob = require('glob');
const kleur = require('kleur');

// relative to package root
const baseDir = './dist';

const purgeCssConfig = {
  safelist: {
    standard: ['body', 'html', 'img', 'a'],
    greedy: [/^is-/, /^has-/, /^js/, /^no-js/, /^data-/, /^disabled/],
  },
};

glob('**/*.html', { root: baseDir }, (err, files) => {
  if (err) {
    throw err;
  }

  files.forEach(async (filePath) => {
    try {
      let html = await fs.readFileSync(filePath, 'utf-8');

      // get CSS file paths
      const cssFilePaths = html
        .match(/(?<=href=")[^."]+\.css/g)
        ?.map((file) => baseDir + file)
        .reverse();

      // get CSS contents
      let css = '';
      if (cssFilePaths) {
        await Promise.all(
          cssFilePaths.map(async (cssFilePath) => {
            const cssContent = await fs.readFileSync(cssFilePath, 'utf-8');
            css += cssContent;
          })
        );
      }

      // output font preload tags
      const fontFilePaths = css.match(/(\/.*\.(woff2)+)/g) || [];
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

      // output inline CSS
      html = html.replace('<link id="inline-css">', `<style>${optimizedCss}</style>`);

      // remove external CSS links
      html = html.replace(/<link rel="stylesheet" href=".*\.css"[^>]+>/g, '');

      // write file
      await fs.outputFile(filePath, html);

      // log success
      console.log(
        `[${kleur.bold().blue('transform:css')}]`,
        kleur.green('✔'),
        filePath.split(baseDir).pop()
      );
    } catch (error) {
      // log error
      console.error(error);
    }
  });
});
