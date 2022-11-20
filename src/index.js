import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import _ from 'lodash';

const getFilepath = (filepath) => resolve(cwd(), filepath);

const readFile = (path) => readFileSync(path, 'utf-8');

const parsesFile = (file) => JSON.parse(file);

const getChanges = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const unionKeys = _.sortBy(_.union(keys1, keys2));

  const result = unionKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (_.isEqual(value1, value2)) {
      return {
        type: 'unchanged',
        key,
        value: value1,
      };
    }
    if (!_.has(obj1, key)) {
      return {
        type: 'added',
        key,
        value: value2,
      };
    }
    if (!_.has(obj2, key)) {
      return {
        type: 'deleted',
        key,
        value: value1,
      };
    }
    return {
      type: 'changed',
      key,
      value1,
      value2,
    };
  });
  return result;
};

const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(getFilepath(filepath1));
  const data2 = readFile(getFilepath(filepath2));

  const changes = getChanges(parsesFile(data1), parsesFile(data2));

  const result = changes.map((element) => {
    const { type } = element;
    switch (type) {
      case 'deleted':
        return `  - ${element.key}: ${element.value}`;
      case 'unchanged':
        return `    ${element.key}: ${element.value}`;
      case 'changed':
        return `  - ${element.key}: ${element.value1} \n  + ${element.key}: ${element.value2}`;
      case 'added':
        return `  + ${element.key}: ${element.value}`;
      default:
        throw new Error(`Unknown element type: ${type}`);
    }
  });
  return console.log(`{\n${result.join('\n')}\n}`);
};

export default genDiff;
