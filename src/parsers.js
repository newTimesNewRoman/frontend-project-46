import { load } from 'js-yaml';

const parseFile = (file, parser) => {
  switch (parser) {
    case 'json':
      return JSON.parse(file);
    case 'yaml':
      return load(file);
    case 'yml':
      return load(file);
    default:
      throw new Error(`Unknown format ${parser}`);
  }
};

export default parseFile;
