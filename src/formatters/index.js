import makeStylishFormat from './stylish.js';
import makePlainFormat from './plain.js';

const makeResultInFormat = (tree, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return makeStylishFormat(tree);
    case 'json':
      return JSON.stringify(tree);
    case 'plain':
      return makePlainFormat(tree);
    default:
      throw new Error(`Unknown format ${outputFormat}`);
  }
};

export default makeResultInFormat;
