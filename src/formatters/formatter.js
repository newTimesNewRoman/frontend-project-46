import makeStylishFormat from './stylish.js';

const makeResultInFormat = (tree, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return makeStylishFormat(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error('Unknown format of output');
  }
};

export default makeResultInFormat;
