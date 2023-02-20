import * as fs from 'fs';

export const moveAndRenameFile = (oldPath, newPath) => {
    fs.renameSync(oldPath, newPath);
}