import 'dotenv/config';
import { collectFilesNames } from './filesCollecting.js';
import { parsePDFFile } from './parseFile.js';
import { buildSueldo } from './buildSueldo.js';
import { buildVEPName } from './buildVEP.js';
import { moveAndRenameFile } from './renameFile.js';

const filesPath = process.env.SOURCE_PATH;
const renamedFilesPath = process.env.DESTINATION;

export const handler = async () => {
	const filesName = collectFilesNames(filesPath);
	filesName.forEach(processFileBy)
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
		renameDependsOnType(fileToRename)
	}
	else {
		console.log(`El archivo [${fileName}] no tiene el formato de pdf valido`)
	}
}

async function renameDependsOnType(fileToRename) {
	let newFileName;
	if (isVep(fileToRename)) {
		newFileName = buildVEPName(fileToRename);
		console.log("file", fileToRename);
		renameFileName(fileToRename.name, newFileName);
	} else if (isSueldo(fileToRename)) {
		newFileName = buildSueldo(fileToRename, 1);
		console.log("file", fileToRename);
		renameFileName(fileToRename, newFileName);
	} else {
		console.log(`El archivo [${fileToRename}] no es procesable`)
	}
}
function renameFileName(oldName, newName) {
	const oldPath = filesPath + oldName;
	const newPath = renamedFilesPath + newName;
	moveAndRenameFile(oldPath, newPath);
}

function anErrorHasOcurred(item) {
	if (filesName[item].search = ".pdf" == -1 && filesName.length == 0) {
		console.log("Formato de archivo no valido. Introduzca un PDF.")
		canContinue = false;
	}
	else if (filesName[0].search = ".pdf" == -1 && filesName.length > 0) {

	}
	return item;
} //this is a bad idea... pero no se q hacer, ya tengo sueño

function isVep(parsedFile) { return parsedFile[0] == "VEP"; }
function isSueldo(parsedFile) { return parsedFile[0] == "RECIBO DE SUELDO"; }