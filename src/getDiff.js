import _ from 'lodash';

const getNodeType = (value1, value2) => {
  if (_.isObject(value1) && _.isObject(value2)) return 'object';
  if (_.isEqual(value1, value2)) return 'unchanged';
  if (_.isUndefined(value1)) return 'added';
  if (_.isUndefined(value2)) return 'deleted';
  return 'changed';
};

const buildNode = (keyName, nodeType, value, newValue) => ({
  keyName,
  nodeType,
  value,
  newValue,
});

const getDifference = (data1, data2) => {
  const buildNodeByType = {
    object: (key, value, newValue) => buildNode(key, 'object', getDifference(value, newValue)),
    unchanged: (key, value) => buildNode(key, 'unchanged', value),
    added: (key, value, newValue) => buildNode(key, 'added', value, newValue),
    deleted: (key, value) => buildNode(key, 'deleted', value),
    changed: (key, value, newValue) => buildNode(key, 'changed', value, newValue),
  };

  const unionKeys = _.union(_.keys(data1), _.keys(data2));
  console.log(unionKeys);

  return _.reduce(unionKeys, (arr, key) => {
    const value = data1[key];
    const newValue = data2[key];
    const nodeType = getNodeType(value, newValue);
    const node = buildNodeByType[nodeType](key, value, newValue);
    return [...arr, node];
  }, []);
};

export default getDifference;
