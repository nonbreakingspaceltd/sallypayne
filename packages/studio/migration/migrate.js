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

// function generateCategoryId(id) {
//   return `category-${id}`;
// }

function readFile(path = '') {
  if (!path) {
    return console.error('You need to set path');
  }
  return fs.createReadStream(path);
}

async function buildJSONfromStream(stream) {
  const xml = await new XmlStream(stream);

  return new Promise((res, rej) => {
    /**
     * Get the categories
     */
    // const categories = [];
    // xml.on('endElement: category', (wpCategory) => {
    //   const { nicename } = wpCategory.$;
    //   const category = {
    //     _type: 'category',
    //     _id: generateCategoryId(nicename),
    //     title: nicename,
    //     slug: {
    //       current: slugify(nicename, {
    //         lower: true,
    //         strict: true,
    //       }),
    //     },
    //   };
    //   categories.push(category);
    //   console.log(category);
    // });

    /**
     * Get the posts
     */
    const posts = [];
    xml.collect('wp:postmeta');
    xml.on('endElement: item', (item) => {
      const { title, category, link: permalink, description } = item;
      if (item['wp:post_type'] != 'post') {
        return;
      }
      const cleanTitle = grammarify.clean(toSentenceCase(title.replace(/\.+$/, '').trim())).replace(/\.$/, "");
      const parsedBody = parseBody(item['content:encoded']);
      const post = {
        _type: 'post',
        title: cleanTitle,
        slug: {
          current: slugify(cleanTitle, {
            lower: true,
            strict: true,
          }),
        },
        excerpt: description,
        body: parsedBody,
        publishedDate: parseDate(item),
        meta: {
          metaDescription: cleanTitle,
        },
      };
      posts.push(post);
    });

    // there seems to be a bug where errors is not caught
    xml.on('error', (err) => {
      throw new Error(err);
    });

    xml.on('end', () => {
      const output = [...posts];

      return res(output);
    });
  });
}

async function main() {
  const filename =
    '/Users/paul/Projects/Nonbreakingspace/Clients/SallyPayne/sallypayne/packages/studio/migration/data/sallypayne.WordPress.2021-09-17.xml';
  const stream = await readFile(path.resolve(filename));
  const output = await buildJSONfromStream(stream);
  output.forEach((doc) => consola.log(JSON.stringify(doc, null, 0)));
}

main();
