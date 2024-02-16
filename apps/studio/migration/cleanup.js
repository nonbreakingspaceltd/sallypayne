import sanityClient from 'part:@sanity/base/client';
import consola from 'consola';

/*
 * This will uclean out posts.
 * Run with: `sanity exec --with-user-token ./migration/cleanup.js`
 */

const client = sanityClient.withConfig({
  dataset: 'dev',
  apiVersion: 'v2020-03-15',
});

const deleteDoc = async (id) => {
  await client
    .delete(id)
    .then(() => {
      consola.success(`${id} deleted`);
    })
    .catch((err) => {
      consola.error(`Delete for ${id} failed: `, err.message);
    });
};

const deleteDocType = async (docType) => {
  const query = /* groq */ `*[_type == '${docType}'] { _id }`;
  const removeDocs = await client.fetch(query);
  const concurrency = 50; // keep under sanity rate limit

  consola.info(`Removing ${removeDocs.length} previously migrated documents of type ${docType}`);

  while (removeDocs.length) {
    await Promise.all(
      removeDocs.splice(0, concurrency).map(async (doc) => {
        await deleteDoc(doc._id);
      })
    );
  }
};

const cleanup = async () => {
  await deleteDocType('post');
  await deleteDocType('sanity.imageAsset');

  consola.info(`Cleanup complete`);
};

cleanup();
