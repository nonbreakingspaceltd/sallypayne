import 'dotenv/config';

import consola from 'consola';
import fs from 'fs-extra';
import path from 'path';
import pkg from '../package.json';
import { slugify } from '../src/utils/helpers';

const outputFile = path.resolve(__dirname, `../dist/service-worker.js`);

export async function generateSeviceWorker() {
  let serviceWorkerCode = await fs.readFileSync(
    path.resolve(__dirname, './serviceWorkerTemplate.js'),
    'utf-8'
  );
  serviceWorkerCode = serviceWorkerCode.replace('__VERSION__', slugify(pkg.version)).trim();
  await fs.writeFile(outputFile, serviceWorkerCode);
  consola.success('service-worker.js created successfully.');
}

generateSeviceWorker();
