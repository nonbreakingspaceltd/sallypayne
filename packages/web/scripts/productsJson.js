import { getProducts } from '../src/data/products';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

async function productsJson() {
  const products = await getProducts(true);

  fs.outputFile(
    path.resolve(__dirname, '../_temp/', 'products.json'),
    JSON.stringify({
      results: products,
    }),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('products.json created');
      }
    }
  );
}

productsJson();
