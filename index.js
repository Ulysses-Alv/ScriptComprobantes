import { collectFilesNames } from './filesCollecting.js';
import { parseFile } from './parseFile.js';
import { buildSueldo } from './buildSueldo.js';
import { buildVEP } from './buildVEP.js';
import { renameFile } from './renameFile.js';
import * as fs from 'fs';


const filesPath = "./filesToRename/";
const renamedFilesPath = "./renamedFiles/";
const canContinue = true;

export const handler = async()=> {    
	var filesName = collectFilesNames(filesPath);
	for (let i = 0; i <= filesName.length && canContinue; i++) {
		//console.log(filesName, " filesname");
	const fileToRename = await parseFile(filesPath, filesName[0]); //A Parsed File. List of strings.
	//console.log(fileToRename, " filesToRename");
	
	var newFileName; 
	
	if(vepChecker(fileToRename)) 
		newFileName = buildVEP(fileToRename);
	else 
		newFileName = buildSueldo(fileToRename, 1);
	
	renameFile(filesPath+filesName[0], renamedFilesPath+newFileName); //The new name that the parsed file has to have. String.
	console.log(newFileName, " newFileName");
	//console.log(vepChecker(fileToRename), "Booleano"); 
	
	filesName = collectFilesNames(filesPath);
	  }
}
function anErrorHasOcurred(item){
	if(filesName[item].search = ".pdf" == -1 && filesName.length == 0) {
		console.log("Formato de archivo no valido. Introduzca un PDF.")
		canContinue = false;	
	}
	else if (filesName[0].search = ".pdf" == -1 && filesName.length > 0){

	}
	return item;
} //this is a bad idea... pero no se q hacer, ya tengo sueño

function vepChecker(parsedFile){ return parsedFile[0] == "VEP"; }