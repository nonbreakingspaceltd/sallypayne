/**
 * Run this script with: `sanity exec --with-user-token ./migration/patchBody.js`
 */

import consola from 'consola';
import sanityClient from './sanityClient';
import grammarify from 'grammarify';

const client = sanityClient('dev');

const query = /* groq */ `*[_type == 'post']`;

const runProcess = async () => {
  const allDocuments = await client.fetch(query);
  let documentsUpdated = 0;
  const concurrency = 50; // keep under sanity rate limit

  console.time('patchBody');

  while (allDocuments.length) {
    await Promise.all(
      allDocuments.splice(0, concurrency).map(async (doc) => {
        let newBody = doc.body.filter((block) => {
          let keep = true;
          if (block._type == 'block' && block.children) {
            block = block.children.forEach((child) => {
              if (child.text !== undefined && child.text.length < 1) {
                consola.log('Block text is empty');
                keep = false;
              } else {
                child.text = child.text
                  .replace('........', '…')
                  .replace('.......', '…')
                  .replace('......', '…')
                  .replace('.....', '…')
                  .replace('....', '…')
                  .replace('...', '…')
                  .trim();
                child.text = grammarify.clean(child.text);
              }
            });
          }
          return keep;
        });

        await client
          .patch(doc._id)
          .set({
            body: newBody,
          })
          .commit()
          .then((updatedDoc) => {
            documentsUpdated++;
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
