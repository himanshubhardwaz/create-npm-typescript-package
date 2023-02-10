#! /usr/bin/env node

'use strict';

const fs = require('fs-extra')
const shell = require('shelljs');

const packageJsonUrl = 'https://github.com/himanshubhardwaz/npm-typescript-starter-template/blob/main/template/src/package.json';
const indexTsUrl = 'https://github.com/himanshubhardwaz/npm-typescript-starter-template/blob/main/template/src/index.ts';
const releaseYamlUrl = 'https://github.com/himanshubhardwaz/npm-typescript-starter-template/blob/main/template/workflows/release.yml';

const args = process.argv.slice(1);

if (args.length < 2) {
  console.error('Please enter folder name for your package');
  process.exit(1); //an error occurred
}

fs.mkdirSync(args[1]);

shell.cd(args[1]);

shell.exec(`curl -o package.json ${packageJsonUrl}`)

fs.mkdirSync('src')

shell.cd('src');

shell.exec(`curl -o index.ts ${indexTsUrl}`)

shell.cd('..')

fs.mkdirSync('workflows')

shell.cd('workflows')

shell.exec(`curl -o release.yml ${releaseYamlUrl}`)

shell.cd('..')

shell.exex('npm install')
shell.exex('npm changeset init')
