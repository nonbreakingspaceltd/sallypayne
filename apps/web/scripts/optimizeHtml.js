const htmlnano = require('htmlnano');
const fs = require('fs-extra');
const glob = require('glob');
const kleur = require('kleur');
const path = require('path');

// relative-to-package root build output folder
const root = path.resolve(__dirname, '../../');
const dist = path.resolve(root, './dist');

// https://github.com/posthtml/htmlnano
const htmlnanoOptions = {
  collapseAttributeWhitespace: false,
  collapseWhitespace: false,
  deduplicateAttributeValues: false,
  removeComments: false,
  removeEmptyAttributes: false,
  removeAttributeQuotes: false,
  removeUnusedCss: false,
  minifyCss: true,
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

glob('**/*.html', { root: dist }, (err, files) => {
  if (err) {
    throw err;
  }

  files.forEach(async (filePath) => {
    let html = await fs.readFileSync(filePath, 'utf-8');

    const optimized = await htmlnano.process(html, htmlnanoOptions);
    await fs.outputFile(filePath, optimized.html);

    console.log(
      `[${kleur.bold().blue('transform:html')}]`,
      kleur.green('✔'),
      filePath.split(dist).pop()
    );
  });
});
