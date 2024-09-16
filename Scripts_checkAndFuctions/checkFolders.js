import { filesPath, renamedFilesPath, consolidadoPath} from '../index.js';
import * as fs from 'fs'

export function checkFolders() {
	const listOfFolders = [filesPath, renamedFilesPath, consolidadoPath]
	listOfFolders.forEach(element => {
		if (!fs.existsSync(element)) {
			fs.mkdirSync(element);
		}
	});
	

}
