import * as fs from 'fs';

export const renameFile = (oldName, newName) => {
    fs.renameSync(oldName, newName);
}