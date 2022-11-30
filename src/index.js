import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import parseFile from './parsers.js';
import getDifference from './getDiff.js';

const getFilepath = (filepath) => resolve(cwd(), filepath);

const readFile = (path) => {
  const fileText = readFileSync(path, 'utf8');
  const fileExtention = extname(path);
  return { fileText, fileExtention };
};

/* const getChanges = (obj1, obj2) => {
  const unionKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

  const changes = unionKeys.map((key) => {
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
  return changes;
};
*/

const getResult = (array) => {
  const result = array.map((element) => {
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
  return `{\n${result.join('\n')}\n}`;
};

const genDiff = (filepath1, filepath2) => {
  const file1 = readFile(getFilepath(filepath1));
  const data1 = parseFile(file1.fileText, file1.fileExtention);
  console.log(data1);

  const file2 = readFile(getFilepath(filepath2));
  const data2 = parseFile(file2.fileText, file2.fileExtention);

  const difference = getDifference(data1, data2);

  const result = getResult(difference);

  return result;
};

export default genDiff;
