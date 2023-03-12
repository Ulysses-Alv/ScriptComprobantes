import * as fs from 'fs';
import { filesPath, renamedFilesPath } from './index.js';

export const moveAndRenameFile = (oldName, newName) => {
	const oldPath = filesPath + oldName;
	const newPath = renamedFilesPath + newName;
	fs.renameSync(oldPath, newPath);
}
