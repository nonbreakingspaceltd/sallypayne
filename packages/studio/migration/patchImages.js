/**
 * Patches media by adding first image in body as main image
 * Run this script with: `sanity exec --with-user-token ./migration/patchImages.js`
 */

import consola from 'consola';
import sanityClient from './sanityClient';

const client = sanityClient('dev');

const runProcess = async () => {
  const allDocuments = await client.fetch(`*[media.main._type == 'image']`);
  let documentsUpdated = 0;
  const concurrency = 50; // keep under sanity rate limit

  console.time('patchImages');

  while (allDocuments.length) {
    await Promise.all(
      allDocuments.splice(0, concurrency).map(async (doc) => {
        documentsUpdated++;
        await client
          .patch(doc._id)
          .set({
            media: {
              main: {
                _type: 'imageExtended',
                asset: {
                  _ref: doc.media.main.asset._ref,
                  _type: 'reference',
                },
              },
            },
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
  console.timeEnd('patchImages');
};

runProcess();
