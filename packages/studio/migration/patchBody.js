/**
 * Patches media by adding first image in body as main image
 * Run this script with: `sanity exec --with-user-token ./migration/patchMedia.js`
 */

import sanityClient from 'part:@sanity/base/client';
import consola from 'consola';
import grammarify from 'grammarify';

const DATASET = 'dev';

const client = sanityClient.withConfig({
  dataset: DATASET,
  apiVersion: 'v2020-03-15',
});

const runProcess = async () => {
  const allDocuments = await client.fetch(`*[_type == 'post']`);
  let documentsUpdated = 0;
  const concurrency = 50; // keep under sanity rate limit

  console.time('patchBody');

  while (allDocuments.length) {
    await Promise.all(
      allDocuments.splice(0, concurrency).map(async (doc) => {
        const newBody = doc.body.map((block) => {
          if (block._type == 'block' && block.children) {
            block = block.children.map((child) => {
              if (child.text) {
                const cleanText = child.text
                  .replace('........', '…')
                  .replace('.......', '…')
                  .replace('......', '…')
                  .replace('.....', '…')
                  .replace('....', '…')
                  .replace('...', '…')
                  .trim();
                child.text = grammarify.clean(cleanText);
              }
              return child;
            });
          }
          return block;
        });

        await client
          .patch(doc._id)
          .set({
            body: newBody,
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
  console.timeEnd('patchBody');
};

runProcess();
