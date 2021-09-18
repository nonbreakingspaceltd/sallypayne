/**
 * Patches media by adding first image in body as main image
 * Run this script with: `sanity exec --with-user-token ./migration/patchMedia.js`
 */

import sanityClient from 'part:@sanity/base/client';
import consola from 'consola';

const DATASET = 'dev';

const client = sanityClient.withConfig({
  dataset: DATASET,
  apiVersion: 'v2020-03-15',
});

const runProcess = async () => {
  const allDocuments = await client.fetch(`*[_type == 'post']`);
  let documentsUpdated = 0;
  const concurrency = 50; // keep under sanity rate limit

  console.time('patchMeta');

  while (allDocuments.length) {
    await Promise.all(
      allDocuments.splice(0, concurrency).map(async (doc) => {
        const firstImage = doc.body.find(block => block._type == 'image');
        if (!firstImage) {
          return undefined;
        }
        await client
          .patch(doc._id)
          .set({
            media: {
              main: {
                _type:'image',
                asset:{
                  _type:'reference',
                  _ref: firstImage.asset._ref
                }
              }
            }
          })
          .commit()
          .then((updatedDoc) => {
            consola.success(`Patched ${updatedDoc._id}`);
          })
          .catch((err) => {
            consola.error(`Error patch doc ${id}`, err);
          });
      })
    );
  }

  consola.info(`Number of documents updated: ${documentsUpdated}`);
  console.timeEnd('patchMeta');
};

runProcess();
