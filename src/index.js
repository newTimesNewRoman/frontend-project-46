import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import parseFile from './parsers.js';
import getDiffTree from './getDiff.js';
import makeResultInFormat from './formatters/index.js';

const getFilepath = (filepath) => resolve(cwd(), filepath);

const readFile = (path) => {
  const fileText = readFileSync(path, 'utf8');
  const fileExtention = extname(path);
  return { fileText, fileExtention };
};

const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const file1 = readFile(getFilepath(filepath1));
  const data1 = parseFile(file1.fileText, file1.fileExtention);

  const file2 = readFile(getFilepath(filepath2));
  const data2 = parseFile(file2.fileText, file2.fileExtention);

  const diffTree = getDiffTree(data1, data2);

  const result = makeResultInFormat(diffTree, outputFormat);

  return result;
};

export default genDiff;
