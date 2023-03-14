import 'dotenv/config';
import { collectFilesNames } from './Scripts_checkAndFuctions/filesCollecting.js';
import { consolidado } from './consolidado.js';
import { checkFolders } from './Scripts_checkAndFuctions/checkFolders.js';
import { processFileBy } from './Scripts_checkAndFuctions/processFileBy.js';

export const filesPath = process.env.SOURCE_PATH;
export const renamedFilesPath = process.env.DESTINATION;
export const consolidadoPath = process.env.CONSOLIDADO;

export const handler = () => {
	renameScript()
	setTimeout(consolidado, 1000)
}
async function renameScript() {
	await checkFolders()
	const filesName = collectFilesNames(filesPath);
	filesName.forEach(element => processFileBy(element));
}
/*function anErrorHasOcurred(item) {
	if (filesName[item].search = ".pdf" == -1 && filesName.length == 0) {
		console.log("Formato de archivo no valido. Introduzca un PDF.")
		canContinue = false;
	}
	else if (filesName[0].search = ".pdf" == -1 && filesName.length > 0) {

	}
	return item;
}
*/