#!/usr/bin/env node
import { program } from 'commander';
import { getObject, getUnionKeys, checkDifference } from './sup.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((path1, path2) => {
    const firstPathObject = getObject(path1);
    const secondPathObject = getObject(path2);
    const unionKeys = getUnionKeys(firstPathObject, secondPathObject);
    const result = checkDifference(firstPathObject, secondPathObject, unionKeys);
    console.log(JSON.stringify(result, ' ', ' '));
  })
  .parse(process.argv);
