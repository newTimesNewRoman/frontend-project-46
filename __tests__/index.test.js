import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'node:fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (fileName) => path.join(__dirname, '__fixtures__', fileName);

const stylishExpectedResult = readFileSync(getFixturePath('result-stylish.txt'), 'utf-8');
const plainExpectedResult = readFileSync(getFixturePath('result-plain.txt'), 'utf-8');

test('genDiff JSON stylish & plain', () => {
  const jsonBefore = getFixturePath('file1.json');
  const jsonAfter = getFixturePath('file2.json');
  expect(genDiff(jsonBefore, jsonAfter)).toEqual(stylishExpectedResult);
  expect(genDiff(jsonBefore, jsonAfter, 'stylish')).toEqual(stylishExpectedResult);
  expect(genDiff(jsonBefore, jsonAfter, 'plain')).toEqual(plainExpectedResult);
});

test('genDiff YAML default', () => {
  const yamlBefore = getFixturePath('filepath1.yml');
  const yamlAfter = getFixturePath('filepath2.yml');
  expect(genDiff(yamlBefore, yamlAfter)).toEqual(stylishExpectedResult);
});
