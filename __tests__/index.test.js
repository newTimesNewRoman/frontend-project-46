import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'node:fs';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const testCases = [
  {
    file1: getFixturePath('file1.json'),
    file2: getFixturePath('file2.yml'),
    format: 'stylish',
    expected: readFileSync(getFixturePath('result-stylish.txt'), 'utf-8'),
  },
  {
    file1: getFixturePath('file1.yml'),
    file2: getFixturePath('file2.json'),
    format: 'plain',
    expected: readFileSync(getFixturePath('result-plain.txt'), 'utf-8'),
  },
  {
    file1: getFixturePath('file1.json'),
    file2: getFixturePath('file2.yaml'),
    format: 'json',
    expected: readFileSync(getFixturePath('result-json.txt'), 'utf-8'),
  }];

test.each(testCases)('genDiff $format test case', ({
  file1, file2, format, expected,
}) => {
  expect(genDiff(file1, file2, format)).toEqual(expected);
});
