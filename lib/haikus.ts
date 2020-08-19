import generateModule from 'lib/sectionGenerator';

const haikuTransformer = async (id: string, fileContent: string): Promise<HaikuData> => {
  return Promise.resolve(JSON.parse(fileContent) as HaikuData);
};

const [haikuIdProvider, haikuPathProvider, haikuDataProvider] = generateModule('haikus', '.json', haikuTransformer);
export { haikuIdProvider, haikuDataProvider, haikuPathProvider };
