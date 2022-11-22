import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'node:fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (fileName) => path.join(__dirname, '__fixtures__', fileName);

test('genDiff', () => {
  const jsonBefore = getFixturePath('file1.json');
  const jsonAfter = getFixturePath('file2.json');
  const jsonExpectedResult = readFileSync(getFixturePath('result.txt'), 'utf-8');
  expect(genDiff(jsonBefore, jsonAfter)).toEqual(jsonExpectedResult);
});
