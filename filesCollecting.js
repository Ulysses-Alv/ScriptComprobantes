import * as fs from 'fs';

export const collectFilesNames = (path)=>
{
  var collectedFilesNames = [];  
    var position = 0;
    fs.readdirSync(path).forEach(file => {
      collectedFilesNames[position] = file;
      position++;
    });
    return collectedFilesNames;
}