/**
 * Patches grammar
 * Run this script with: `sanity exec --with-user-token ./migration/patchGrammar.js`
 */
import consola from 'consola';
import sanityClient from './sanityClient';
import grammarify from 'grammarify';

const client = sanityClient('dev');

const query = /* groq */ `*[_type == 'post' && _id == 'bb011670-00f7-4816-93ba-e0eda74f0ae8']`;

const patchGrammar = async () => {
  const allDocuments = await client.fetch(query);
  let documentsUpdated = 0;
  const concurrency = 50; // keep under sanity rate limit

  console.time('patchGrammar');

  while (allDocuments.length) {
    await Promise.all(
      allDocuments.splice(0, concurrency).map(async (doc) => {
        const cleanExcerpt = grammarify.clean(doc.excerpt);
        console.log(cleanExcerpt);
        await client
          .patch(doc._id)
          .set({
            excerpt: cleanExcerpt,
          })
          .commit()
          .then((updatedDoc) => {
            documentsUpdated++;
            consola.success(`Added patched grammar on ${updatedDoc._id}`);
          })
          .catch((err) => {
            consola.error(`Error patch doc ${id}`, err);
          });
      })
    );
  }

  consola.info(`Number of documents updated: ${documentsUpdated}`);
  console.timeEnd('patchGrammar');
};

patchGrammar();
