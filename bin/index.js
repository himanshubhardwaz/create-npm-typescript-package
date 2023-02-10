#! /usr/bin/env node

'use strict';

const fs = require('fs-extra')
const shell = require('shelljs');

const packageJsonUrl = 'https://raw.githubusercontent.com/himanshubhardwaz/npm-typescript-starter-template/main/package.json';
const indexTsUrl = 'https://raw.githubusercontent.com/himanshubhardwaz/npm-typescript-starter-template/main/template/src/index.ts';
const releaseYamlUrl = 'https://raw.githubusercontent.com/himanshubhardwaz/npm-typescript-starter-template/main/template/workflows/release.yml';
const readMeUrl = 'https://raw.githubusercontent.com/himanshubhardwaz/npm-typescript-starter-template/main/template/readme.md'
const gitIgnoreUrl = 'https://raw.githubusercontent.com/himanshubhardwaz/npm-typescript-starter-template/main/template/.gitignore'

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

shell.exec(`curl -o readme.md ${readMeUrl}`)
shell.exec(`curl -o .gitignore ${gitIgnoreUrl}`)

shell.exec('git init')
shell.exec('npm install')
shell.exec('npm changeset init')
