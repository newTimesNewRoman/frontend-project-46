#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../src/index.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    (gendiff(filepath1, filepath2));
  })
  .parse(process.argv);
