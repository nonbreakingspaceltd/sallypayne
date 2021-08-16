const Critters = require('critters');
const htmlnano = require('htmlnano');
const fs = require('fs-extra');
const glob = require('glob');
const kleur = require('kleur');

// relative-to-package root build output folder
const baseDir = './dist';

// https://github.com/posthtml/htmlnano
const htmlnanoOptions = {
  collapseAttributeWhitespace: false,
  collapseWhitespace: false,
  deduplicateAttributeValues: false,
  removeComments: false,
  removeEmptyAttributes: false,
  removeAttributeQuotes: false,
  removeUnusedCss: {
    tool: 'purgeCSS',
    safelist: {
      standard: ['body', 'html', 'img', 'a'],
      greedy: [/^is-/, /^has-/, /^js/, /^no-js/, /^data-/, /^disabled/],
    },
  },
  minifyCss: false,
  minifyJs: false,
  minifyJson: false,
  minifySvg: false,
  minifyConditionalComments: false,
  removeRedundantAttributes: false,
  collapseBooleanAttributes: false,
  mergeStyles: false,
  mergeScripts: false,
  sortAttributesWithLists: false,
  sortAttributes: false,
  minifyUrls: false,
  removeOptionalTags: false,
};

const crittersOptions = {
  inlineFonts: true,
  path: baseDir,
  publicPath: '/',
  preload: 'body',
  mergeStylesheets: true,
  preloadFonts: true,
};

function removeExternalStyles(html) {
  return html.replace(/<link rel="stylesheet" href=".*\.css"[^>]+>/g, '');
}

glob('**/*.html', { root: baseDir }, (err, files) => {
  if (err) {
    throw err;
  }

  files.forEach((filePath) => {
    const html = fs.readFileSync(filePath, 'utf-8');
    const critter = new Critters(crittersOptions);

    critter
      .process(html)
      .then(async (result) => {
        const htmlNoExternalStyle = removeExternalStyles(result);
        // await fs.outputFile(filePath, htmlNoExternalStyle);
        // console.log(`[${kleur.blue('optimize')}]`, kleur.green('✔'), filePath.split(baseDir).pop());

        htmlnano
          .process(htmlNoExternalStyle, htmlnanoOptions)
          .then(async (result) => {
            await fs.outputFile(filePath, result.html);
            console.log(`[${kleur.blue('optimize')}]`, kleur.green('✔'), filePath.split(baseDir).pop());
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });



  });

});
