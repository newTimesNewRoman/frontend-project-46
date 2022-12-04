import _ from 'lodash';

const getDiffTree = (data1, data2) => {
  const unionKeys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  return unionKeys.map((key) => {
    if (!_.has(data1, key) && _.has(data2, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return { type: 'deleted', key, value: data1[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      const children = getDiffTree(data1[key], data2[key]);
      return { type: 'object', key, children };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return {
        type: 'unchanged', key, value: data1[key],
      };
    }
    return {
      type: 'changed', key, value: data1[key], value2: data2[key],
    };
  });
};

export default getDiffTree;
