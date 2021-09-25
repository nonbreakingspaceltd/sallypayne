/**
 * Run this script with: `sanity exec --with-user-token ./migration/patchExcerpt.js`
 */

import consola from 'consola';
import { format } from 'date-fns';
import sanityClient from './sanityClient';
import grammarify from 'grammarify';
import { blocksToPlainText } from './lib/blocksToPlainText';

const client = sanityClient('dev');

const query = /* groq */ `*[_type == 'post'] | order(publishedDate desc)`;

const runProcess = async () => {
  const allDocuments = await client.fetch(query);
  let documentsUpdated = 0;
  const concurrency = 50; // keep under sanity rate limit

  console.time('patchExcerpt');

  while (allDocuments.length) {
    await Promise.all(
      allDocuments.splice(0, concurrency).map(async (doc) => {
        let newExcerpt = blocksToPlainText(doc.body);
        const newExcerptParts = newExcerpt.replace(/\r/g, '').split(/\n/);
        if (newExcerptParts && newExcerptParts.length > 0) {
          newExcerpt = newExcerptParts[0];
        }

        const maxExcerptLength = 200;
        if (newExcerpt.length > maxExcerptLength) {
          newExcerpt = `${newExcerpt.substring(0, maxExcerptLength).trim()}…`;
        }

        const maxDescriptionLength = 159;
        const newMetaDescription =
          newExcerpt?.length > maxDescriptionLength
            ? `Posted on ${format(new Date(doc.publishedDate), 'eeee, MMMM do yyyy')}`
            : newExcerpt;

        await client
          .patch(doc._id)
          .set({
            excerpt: newExcerpt,
            meta: {
              metaDescription: newMetaDescription,
            },
          })
          .commit()
          .then((updatedDoc) => {
            documentsUpdated++;
            consola.success(
              `Patched excerpt (was ${newExcerpt.length} characters) ${updatedDoc._id}`
            );
          })
          .catch((err) => {
            consola.error(`Error patch doc ${doc._id}`, err);
          });
      })
    );
  }

  consola.info(`Number of documents updated: ${documentsUpdated}`);
  console.timeEnd('patchExcerpt');
};

runProcess();
