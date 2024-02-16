/**
 * Run this script with: `sanity exec --with-user-token ./migration/patchImages.js`
 */

import consola from 'consola';
import sanityClient from './sanityClient';

const client = sanityClient('dev');

const query = /* groq */ `*[_type == "post"]`;

const imageToImageExtended = async (obj, updateDocument) => {
  if (obj !== null) {
    for await (entry of Object.entries(obj)) {
      const [key, value] = entry;
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
      } else if (key === '_sanityAsset' && value.includes('image@')) {
        const originalFilename = value.split('/').pop();
        console.log(originalFilename);
        const image = await client.fetch(
          `*[_type == 'sanity.imageAsset' && originalFilename == '${originalFilename}'] [0] { _id }`
        );
        if (image._id) {
          obj = {
            _type: 'imageExtended',
            asset:{
              _ref: image._id,
              _type: 'reference'
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
              height: 1,
              width: 1,
              x: 0.5,
              y: 0.5,
            },
          };
          updateDocument = true;
        }
      } else if (typeof value === 'object') {
        updateDocument = imageToImageExtended(value, updateDocument);
      }
    }
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
        const updateDocument = await imageToImageExtended(doc.body, false);

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
