/* eslint-disable id-length, no-console, no-process-env, no-sync, no-process-exit */
import fs from 'fs';
import path from 'path';
import XmlStream from 'xml-stream';
import slugify from 'slugify';
import consola from 'consola';
import parseDate from './lib/parseDate.js';
import grammarify from 'grammarify';
import { format } from 'date-fns';

function toSentenceCase(theString) {
  var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
    return c.toUpperCase();
  });
  return newString;
}
function readFile(path = '') {
  if (!path) {
    return console.error('You need to set path');
  }
  return fs.createReadStream(path);
}

function processPostPath(slug, publishedDate) {
  const parsedPublishDate = new Date(publishedDate);
  const year = format(parsedPublishDate, 'yyyy');
  const month = format(parsedPublishDate, 'MM');
  return `/scrapbook/${year}/${month}/${slug}/`;
};

async function buildJSONfromStream(stream) {
  const xml = await new XmlStream(stream);

  return new Promise((resolve) => {
    /**
     * Get the posts
     */
    const posts = [];
    xml.collect('wp:postmeta');
    xml.on('endElement: item', (item) => {
      const { title, link } = item;
      if (item['wp:post_type'] != 'post') {
        return;
      }
      const originalPath = link.replace('https://sallypayne.com', '');
      const cleanTitle = grammarify.clean(toSentenceCase(title.replace(/\.+$/, '').trim())).replace(/\.$/, "");
      const slug = slugify(cleanTitle, {
        lower: true,
        strict: true,
      })
      const newPath = processPostPath(slug, parseDate(item));
      console.log(`${originalPath} ${newPath}`);
    });

    // there seems to be a bug where errors is not caught
    xml.on('error', (err) => {
      throw new Error(err);
    });

    xml.on('end', () => {
      const output = [...posts];

      return resolve(output);
    });
  });
}

async function main() {
  const filename =
    '/Users/paul/Projects/Nonbreakingspace/Clients/SallyPayne/sallypayne/apps/studio/migration/data/sallypayne.WordPress.2021-09-17.xml';
  const stream = await readFile(path.resolve(filename));
  const output = await buildJSONfromStream(stream);
}

main();
