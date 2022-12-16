import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'node:fs';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const stylishResult = readFileSync(getFixturePath('result-stylish.txt'), 'utf-8');
const plainResult = readFileSync(getFixturePath('result-plain.txt'), 'utf-8');

const testList = [
  'yml',
  'yaml',
  'json',
];

test.each(testList)('gendiff %s', (format) => {
  const filepath1 = getFixturePath(`file1.${format}`);
  const filepath2 = getFixturePath(`file2.${format}`);

  expect(genDiff(filepath1, filepath2)).toEqual(stylishResult);
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(stylishResult);
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(plainResult);

  const data = genDiff(filepath1, filepath2, 'json');
  expect(() => JSON.parse(data)).not.toThrow();
});
