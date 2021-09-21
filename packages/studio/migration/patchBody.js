/**
 * Patches media by adding first image in body as main image
 * Run this script with: `sanity exec --with-user-token ./migration/patchMedia.js`
 */

import sanityClient from 'part:@sanity/base/client';
import consola from 'consola';
import { format } from 'date-fns';
import { blocksToPlainText } from './lib/blocksToPlainText';

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
        newBody = doc.body;

        let newExcerpt = null;

        newBody = newBody.filter((block) => {
          let keep = true;
          if (block._type == 'block' && block.children) {
            block = block.children.forEach((child) => {
              if (child.text !== undefined && child.text.length < 1) {
                consola.log('Block text is empty');
                keep = false;
              } else {
                if (!newExcerpt) {
                  newExcerpt = child.text;
                }
              }
            });
          }
          return keep;
        });

        if (newExcerpt) {
          newExcerpt = blocksToPlainText(newExcerpt).toString();
          // newExcerpt = newExcerpt.split('. ', 1)[0];
        }

        const maxDescriptionLength = 159;
        const newMetaDescription =
          newExcerpt?.length > maxDescriptionLength
            ? `${newExcerpt.substring(0, maxDescriptionLength).trim()}…`
            : `Posted on ${format(new Date(doc.publishedDate), 'eeee, MMMM do yyyy')}`;

        await client
          .patch(doc._id)
          .set({
            body: newBody,
            excerpt: newExcerpt || '',
            meta: {
              metaDescription: newMetaDescription,
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
  console.timeEnd('patchBody');
};

runProcess();
