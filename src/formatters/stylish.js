import _ from 'lodash';

const makeIndent = (depth) => '  '.repeat(depth * 2 - 1);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }
  const currentDepth = depth + 1;
  const allKeys = _.keys(value);
  const result = allKeys
    .map((key) => `  ${key}: ${stringify(value[key], currentDepth)}`)
    .join(`\n${makeIndent(currentDepth)}`);

  return `{\n${makeIndent(currentDepth)}${result}\n  ${makeIndent(depth)}}`;
};

const makeStylishFormat = (diffTree) => {
  const format = (tree, depth = 1) => tree
    .map((node) => {
      switch (node.type) {
        case 'added':
          return `${makeIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
        case 'deleted':
          return `${makeIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
        case 'unchanged':
          return `${makeIndent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
        case 'changed':
          return `${makeIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}\n${makeIndent(depth)}+ ${node.key}: ${stringify(node.value2, depth)}`;
        case 'object':
          return `${makeIndent(depth)}  ${node.key}: {\n${format(node.children, depth + 1)}\n  ${makeIndent(depth)}}`;
        default:
          throw new Error(`Unknown value ${node.type}`);
      }
    })
    .join('\n');

  return `{\n${format(diffTree)}\n}`;
};

export default makeStylishFormat;
