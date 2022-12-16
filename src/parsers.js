import { load } from 'js-yaml';

const parseData = (data, parser) => {
  switch (parser) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return load(data);
    case 'yml':
      return load(data);
    default:
      throw new Error(`Current ${parser} is not supported`);
  }
};

export default parseData;
