/**
 * Patches meta.descritption to meta.metaDescription.
 * Run this script with: `sanity exec --with-user-token ./migration/patchMeta.js`
 */

import consola from 'consola';
import sanityClient from './sanityClient';

const client = sanityClient('dev');

const runProcess = async () => {
  const allDocuments = await client.fetch(`*[_type == 'post']`);
  let documentsUpdated = 0;
  const concurrency = 50; // keep under sanity rate limit

  console.time('patchMeta');

  while (allDocuments.length) {
    await Promise.all(
      allDocuments.splice(0, concurrency).map(async (doc) => {
        await client
          .patch(doc._id)
          .set({
            meta: {
              metaDescription: doc.meta.description,
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
  console.timeEnd('patchMeta');
};

runProcess();
