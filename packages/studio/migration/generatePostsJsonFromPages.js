/* eslint-disable id-length, no-console, no-process-env, no-sync, no-process-exit */
import fs from 'fs';
import path from 'path';
import XmlStream from 'xml-stream';
import slugify from 'slugify';
import consola from 'consola';
import parseDate from './lib/parseDate.js';
import parseBody from './lib/parseBody.js';
import grammarify from 'grammarify';

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

async function buildJSONfromStream(stream) {
  const xml = await new XmlStream(stream);

  const pagesToParse = ['28562', '28558', '29536'];

  return new Promise((resolve) => {
    /**
     * Get the posts
     */
    const posts = [];
    xml.collect('wp:postmeta');
    xml.on('endElement: item', (item) => {
      const { title, description } = item;
      if (item['wp:post_type'] != 'page' || !pagesToParse.includes(item['wp:post_id'])) {
        return;
      }
      // const cleanTitle = grammarify.clean(toSentenceCase(title.replace(/\.+$/, '').trim())).replace(/\.$/, "");
      // const parsedBody = parseBody(item['content:encoded']);
      const pattern = /gallery_ids=\"(.*?)\" /g;
      const matches = item['content:encoded'].replace(pattern, '$1');

      const post = {
        // _type: 'post',
        title,
        body: item['content:encoded'],
        // parsedBody: parsedBody,
        // slug: {
        //   current: slugify(cleanTitle, {
        //     lower: true,
        //     strict: true,
        //   }),
        // },
        // excerpt: description,
        // body: parsedBody,
        // publishedDate: parseDate(item),
        // meta: {
        //   metaDescription: cleanTitle,
        // },
      };
      posts.push(post);
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
    '/Users/paul/Projects/Nonbreakingspace/Clients/SallyPayne/sallypayne/packages/studio/migration/data/sallypayne.WordPress.2021-09-25.xml';
  const stream = await readFile(path.resolve(filename));
  const output = await buildJSONfromStream(stream);
  // output.forEach((doc) => consola.log(JSON.stringify(doc, null, 0)));
  console.log(JSON.stringify(output));
}

main();
