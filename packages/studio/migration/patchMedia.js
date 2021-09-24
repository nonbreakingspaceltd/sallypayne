/**
 * Patches media by adding first image in body as main image
 * Run this script with: `sanity exec --with-user-token ./migration/patchMedia.js`
 */
import consola from 'consola';
import sanityClient from './sanityClient';

const client = sanityClient('dev');

const query = /* groq */ `*[_type == 'post']`;

const removeMain = async () => {
  const allDocuments = await client.fetch(query);
  let documentsUpdated = 0;
  const concurrency = 50; // keep under sanity rate limit

  console.time('removeMain');

  while (allDocuments.length) {
    await Promise.all(
      allDocuments.splice(0, concurrency).map(async (doc) => {
        await client
          .patch(doc._id)
          .unset(['media.main'])
          .commit()
          .then((updatedDoc) => {
            documentsUpdated++;
            consola.success(`Removed main media from ${updatedDoc._id}`);
          })
          .catch((err) => {
            consola.error(`Error patch doc ${id}`, err);
          });
      })
    );
  }

  consola.info(`Number of documents updated: ${documentsUpdated}`);
  console.timeEnd('removeMain');
};

const addMain = async () => {
  const allDocuments = await client.fetch(query);
  let documentsUpdated = 0;
  const concurrency = 50; // keep under sanity rate limit

  console.time('addMain');

  while (allDocuments.length) {
    await Promise.all(
      allDocuments.splice(0, concurrency).map(async (doc) => {
        const firstImage = doc.body.find((block) => block._type == 'image');
        if (!firstImage) {
          return undefined;
        }
        await client
          .patch(doc._id)
          .set({
            media: {
              main: {
                _type: 'imageExtended',
                asset: {
                  _type: 'reference',
                  _ref: firstImage.asset._ref,
                },
                crop: {
                  _type: 'sanity.imageCrop',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                },
                hotspot: {
                  _type: 'sanity.imageHotspot',
                  height: 0,
                  width: 0,
                  x: 0,
                  y: 0,
                },
              },
            },
          })
          .commit()
          .then((updatedDoc) => {
            documentsUpdated++;
            consola.success(`Added main media to ${updatedDoc._id}`);
          })
          .catch((err) => {
            consola.error(`Error patch doc ${id}`, err);
          });
      })
    );
  }

  consola.info(`Number of documents updated: ${documentsUpdated}`);
  console.timeEnd('addMain');
};

addMain();
