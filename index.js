import 'dotenv/config';
import { collectFilesNames } from './filesCollecting.js';
import { parsePDFFile } from './parseFile.js';
import { buildSueldo } from './buildSueldo.js';
import { buildVEPName } from './buildVEP.js';
import { cloneVEP } from "./cloneVEP.js";
import { moveAndRenameFile } from './renameFile.js';
import { deleteOriginalFile } from './cloneVEP.js';

//import { consolidado } from './consolidado.js';

export const filesPath = process.env.SOURCE_PATH;
export const renamedFilesPath = process.env.DESTINATION;

export const handler = async () => {
	const filesName = collectFilesNames(filesPath);
	filesName.forEach(element => processFileBy(element));
}
async function processFileBy(fileName) {
	const isPDF = fileName.includes(".pdf");
	if (isPDF) {
		const fileToRename = await parsePDFFile(filesPath, fileName)
			.catch(er => {
				console.log(er)
				const invalidFile = ["error"]
				return invalidFile
			}); //A Parsed File. List of strings.

		renameDependsOnType(fileName, fileToRename)
	}
	else {
		console.log(`El archivo [${fileName}] no tiene el formato de pdf valido`)
	}
}

async function renameDependsOnType(nameOfTheFileToRename, parsedFileToRename) {
	let newFileName;
	if (isVep(parsedFileToRename)) {
		newFileName = buildVEPName(parsedFileToRename);
		if (typeof newFileName == "string") { moveAndRenameFile(nameOfTheFileToRename, newFileName); }
		else {
			newFileName.forEach(nameOfFile => cloneVEP(nameOfTheFileToRename, nameOfFile))
			deleteOriginalFile(filesPath + nameOfTheFileToRename);
		}
	} else if (isSueldo(parsedFileToRename)) {
		newFileName = buildSueldo(parsedFileToRename, 1);
		moveAndRenameFile(nameOfTheFileToRename, newFileName);
	} else { console.error(`El archivo [${nameOfTheFileToRename}] no es procesable`) }
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
function isVep(parsedFile) { return parsedFile[0] == "VEP"; }
function isSueldo(parsedFile) { return parsedFile[0] == "RECIBO DE SUELDO"; }