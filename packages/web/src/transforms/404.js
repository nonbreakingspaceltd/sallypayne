const fs = require('fs-extra');
const kleur = require('kleur');

let html = fs.readFileSync('./dist/404/index.html', 'utf-8');
fs.outputFile('./dist/404.html', html);

console.log(`[${kleur.bold().blue('404')}]`, kleur.green('✔'), 'dist/404.html');
