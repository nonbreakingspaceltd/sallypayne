/* eslint-disable id-length, no-console, no-process-env, no-sync, no-process-exit */
import fs from 'fs';
import path from 'path';
import XmlStream from 'xml-stream';
import slugify from 'slugify';
import consola from 'consola';
import parseBody from './lib/parseBody.js';
import grammarify from 'grammarify';
import sanityClient from './sanityClient';

const client = sanityClient('dev');

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

async function patchBodyFromXml(stream) {
  const xml = await new XmlStream(stream);

  const posts = [];
  xml.collect('wp:postmeta');
  xml.on('endElement: item', async (item) => {
    const { title } = item;
    if (item['wp:post_type'] != 'post') {
      return;
    }
    const cleanTitle = grammarify
      .clean(toSentenceCase(title.replace(/\.+$/, '').trim()))
      .replace(/\.$/, '');
    const parsedBody = parseBody(item['content:encoded']);
    const slug = slugify(cleanTitle, {
      lower: true,
      strict: true,
    });
    const post = {
      slug,
      parsedBody,
    };
    posts.push(post);
  });
  xml.on('end', async () => {
    let documentsUpdated = 0;
    const concurrency = 50; // keep under sanity rate limit

    console.time('migrateBody');

    while (posts.length) {
      await Promise.all(
        posts.splice(0, concurrency).map(async ({ slug, parsedBody }) => {
          const post = await client.fetch(`*[slug.current == '${slug}'][0] { _id }`);
          if (post._id) {
            await client
              .patch(post._id)
              .set({
                body: parsedBody,
              })
              .commit()
              .then((updatedDoc) => {
                documentsUpdated++;
                consola.success(`Migrated body from XML for ${updatedDoc._id}`);
              })
              .catch((err) => {
                consola.error(`Error patch doc ${post._id}`, err);
              });
          }
        })
      );
    }

    consola.info(`Number of documents updated: ${documentsUpdated}`);
    console.timeEnd('migrateBody');
  });
  // there seems to be a bug where errors is not caught
  xml.on('error', (err) => {
    throw new Error(err);
  });
}

async function main() {
  const filename =
    '/Users/paul/Projects/Nonbreakingspace/Clients/SallyPayne/sallypayne/packages/studio/migration/data/sallypayne.WordPress.2021-09-17.xml';
  const stream = await readFile(path.resolve(filename));
  patchBodyFromXml(stream);
}

main();
