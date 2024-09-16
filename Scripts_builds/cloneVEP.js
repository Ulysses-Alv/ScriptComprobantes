import * as  fs from "fs";
import { filesPath, renamedFilesPath } from '../index.js';

export const cloneVEP = (originalFileName, newFileName) => {
    const originalFullPath = filesPath + originalFileName
    fs.copyFile(originalFullPath, renamedFilesPath + newFileName, (err) => { // (src, dest) ./filesToRename/dfaafdf, ./renamedFiles/Comp
        if (err) {
            console.error(err);
            return;
        }
        //console.log('File contents copied successfully!');
    });
}

export const deleteOriginalFile = (pathToDelete) => {
    fs.unlink(pathToDelete, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        //console.log('File deleted successfully');
    });
} 

