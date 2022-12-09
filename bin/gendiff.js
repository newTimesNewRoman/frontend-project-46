#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../index.js';

program
  .version('0.0.3')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format: stylish, plain or json', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format));
  })
  .parse(process.argv);
