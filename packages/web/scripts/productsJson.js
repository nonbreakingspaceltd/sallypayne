const getProducts = require('../src/data/products').getProducts;
const fs = require('fs-extra');
const path = require('path');

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
