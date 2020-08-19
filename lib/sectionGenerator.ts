import fs from 'fs';
import path from 'path';

type GenerateSectionFunctions = [() => string[], () => PageId[], (id: string) => Promise<ModuleData>];

export default function generateModule(
  directory: string,
  filetype: '.json' | '.md',
  fileTransformer: (id: string, fileContent: string) => Promise<ModuleData>,
): GenerateSectionFunctions {
  const MODULE_DIRECTORY = path.join(process.cwd(), 'posts', directory);

  const idProvider = () => fs.readdirSync(MODULE_DIRECTORY).map((file) => file.replace(filetype, ''));

  const pathProvider = (): Array<PageId> =>
    idProvider().map((id) => ({
      params: {
        id,
      },
    }));

  const dataProvider = async (id: string): Promise<ModuleData> => {
    const fullPath = path.join(MODULE_DIRECTORY, `${id}${filetype}`);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    return fileTransformer(id, fileContent);
  };

  return [idProvider, pathProvider, dataProvider];
}
