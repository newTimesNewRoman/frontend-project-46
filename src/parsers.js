import { load } from 'js-yaml';

const parsers = {
  '.json': JSON.parse,
  '.yaml': load,
  '.yml': load,
};

const getParser = (extention) => {
  const parser = parsers[extention];
  if (!parser) {
    throw new Error('Unknown extension of input file');
  }
  return parser;
};

const parseFile = (file, extention) => {
  const parser = getParser(extention);
  const parsedData = parser(file);
  return parsedData;
};

export default parseFile;
