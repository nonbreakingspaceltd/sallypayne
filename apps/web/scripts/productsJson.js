import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';
import { getProducts } from '../src/data/products';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function productsJson() {
  const products = await getProducts(true);

  fs.outputFile(
    path.resolve(__dirname, '../tmp/', 'products.json'),
    JSON.stringify({
      results: products,
    }),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('products.json created');
      }
    },
  );
}

productsJson();
