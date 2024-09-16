import { buildSueldo } from '../Scripts_builds/buildSueldo.js';
import { buildVEPName } from '../Scripts_builds/buildVEP.js';
import { cloneVEP, deleteOriginalFile } from "../Scripts_builds/cloneVEP.js";
import { moveAndRenameFile } from './renameFile.js';
import { filesPath } from '../index.js';


export async function renameDependsOnType(nameOfTheFileToRename, parsedFileToRename) {
	let newFileName;
	if (isVep(parsedFileToRename)) {
		newFileName = buildVEPName(parsedFileToRename);
		if (typeof newFileName == "string") { moveAndRenameFile(nameOfTheFileToRename, newFileName); }
		else {
			newFileName.forEach(nameOfFile => cloneVEP(nameOfTheFileToRename, nameOfFile));
			deleteOriginalFile(filesPath + nameOfTheFileToRename);
		}
	} else if (isSueldo(parsedFileToRename)) {
		newFileName = buildSueldo(parsedFileToRename, 1);
		moveAndRenameFile(nameOfTheFileToRename, newFileName);
	} else { console.error(`El archivo [${nameOfTheFileToRename}] no es procesable`); }
}
function isVep(parsedFile) { return parsedFile[0] == "VEP"; }
function isSueldo(parsedFile) { return parsedFile[0] == "RECIBO DE SUELDO"; }
