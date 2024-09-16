import * as fs from 'fs';
import * as path from 'path'

export const collectFilesNames = (path)=> //Collects the names of the files on the path given.
{
  var collectedFilesNames = [];  
    var position = 0;
    fs.readdirSync(path).forEach(file => {
      collectedFilesNames[position] = file;
      position++;
    });
    return collectedFilesNames.filter((file => path.extname(file) === '.pdf'));
}