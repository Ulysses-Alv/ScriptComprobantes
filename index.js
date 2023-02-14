import { collectFilesNames } from './filesCollecting.js';
import { parseFile } from './parseFile.js';
import { buildSueldo } from './buildSueldo.js';
import { buildVEP } from './buildVEP.js';

const filesPath = "./filesToRename/";

const numero = 1; //0 = VEP 1 = RECIBO

export const handler = async()=> {
    const filesName = collectFilesNames(filesPath); //List of files names. List of Strings.
    //console.log(filesName, " filesname");
    
    const fileToRename = await parseFile(filesPath, filesName[numero]); //A Parsed File. List of strings.
    //console.log(fileToRename, " filesToRename");
    
    var newFileName; 
    
    if(vepChecker(fileToRename)) 
		newFileName = buildVEP(fileToRename);  //The new name that the parsed file has to have. String.
    
	else 
		newFileName = buildSueldo(fileToRename, 1); //The new name that the parsed file has to have. String.
	
	console.log(newFileName, " newFileName");
	//console.log(vepChecker(fileToRename), "Booleano");
}

function vepChecker(parsedFile){ //Check if the file given is a VEP or not. 
	var isVEPFile = false;
	if(parsedFile[0] == "VEP") isVEPFile = true;
	return isVEPFile;
}