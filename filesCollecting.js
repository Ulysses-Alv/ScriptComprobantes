import * as fs from 'fs';

export const collectFilesNames = (path)=> //Collects the names of the files on the path given.
{
  const collectedFilesNames = [];
    let position = 0;
    fs.readdirSync(path).forEach(file => {
      collectedFilesNames[position] = file;
      position++;
    });
    return collectedFilesNames;
}