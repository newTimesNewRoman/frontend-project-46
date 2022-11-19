import fs from 'fs';
import _ from 'lodash';

export const getObject = (path) => {
  const newPath = fs.readFileSync(path, 'utf-8');
  const newParsePath = JSON.parse(newPath);
  return newParsePath;
};

export const getUnionKeys = (obj1, obj2) => {
  const firstPathObjectKeys = Object.keys(obj1);
  const secondPathObjectKeys = Object.keys(obj2);
  const unionKeys = _.union(firstPathObjectKeys, secondPathObjectKeys);
  return _.sortBy(unionKeys);
};

export const checkDifference = (obj1, obj2, keys) => {
  const result = {};
  for (let i = 0; i < keys.length; i += 1) {
    const keyObjBoth = `  ${keys[i]}`;
    const keyObj1 = `- ${keys[i]}`;
    const keyObj2 = `+ ${keys[i]}`;
    if (obj1[keys[i]] === obj2[keys[i]]) {
      result[keyObjBoth] = obj1[keys[i]];
    } else if (!_.has(obj1, keys[i])) {
      result[keyObj2] = obj2[keys[i]];
    } else if (!_.has(obj2, keys[i])) {
      result[keyObj1] = obj1[keys[i]];
    } else {
      result[keyObj1] = obj1[keys[i]];
      result[keyObj2] = obj2[keys[i]];
    }
  }
  return result;
};
