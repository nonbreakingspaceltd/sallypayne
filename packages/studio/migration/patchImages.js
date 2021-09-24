/**
 * Run this script with: `sanity exec --with-user-token ./migration/patchImages.js`
 */

import consola from 'consola';
import sanityClient from './sanityClient';

const client = sanityClient('dev');

const query = /* groq */ `*[]`;

const imageToImageExtended = (obj, updateDocument) => {
  if (obj !== null) {
    Object.entries(obj).forEach(([key, value]) => {
      if (key === '_type' && value === 'image') {
        obj._type = 'imageExtended';
        obj.crop = {
          _type: 'sanity.imageCrop',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        };
        obj.hotspot = {
          _type: 'sanity.imageHotspot',
          height: 1,
          width: 1,
          x: 0.5,
          y: 0.5,
        };
        updateDocument = true;
      } else if (typeof value === 'object') {
        updateDocument = imageToImageExtended(value, updateDocument);
      }
    });
  }
  return updateDocument;
};

const runProcess = async () => {
  const allDocuments = await client.fetch(query);

  let documentsUpdated = 0;
  const concurrency = 10; // keep under sanity rate limit

  console.time('imageToImageExtended');

  while (allDocuments.length) {
    await Promise.all(
      allDocuments.splice(0, concurrency).map(async (doc) => {
        const updateDocument = imageToImageExtended(doc, false);

        if (updateDocument) {
          consola.success(`Fixing (${doc._type}) ${doc._id}`);

          await client.createOrReplace(doc);

          documentsUpdated++;
        }
      })
    );
  }

  consola.info(`Number of documents updated: ${documentsUpdated}`);
  console.timeEnd('imageToImageExtended');
};

runProcess();
