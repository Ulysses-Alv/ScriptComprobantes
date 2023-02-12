import { collectFilesNames } from './filesCollecting.js';
import { parseFile } from './rename.js';

const filesPath = "./filesToRename/";
export const handler = async()=> {
  const filesName = collectFilesNames(filesPath);
  console.log(filesName);
  const fileToRename = await parseFile(filesPath, filesName[0]);
  console.log(fileToRename);
  //const newFileName = buildSueldoName(fileToRename, 1);
  //console.log(newFileName);
}

/*sueldo-MM-YYYY*/

function buildSueldoName(file, lineWithNamePosition){
  const partToFind = ":";
  const line = file[lineWithNamePosition];
  
  return "sueldo-" + buildSueldoPeriod(line, partToFind) + ".pdf"; 
}

function buildSueldoPeriod(line, partToFind){
  const initialIndexPeriod = line.lastIndexOf(partToFind) + 1;
  const lastIndexPeriod = line.length;
  const period = line.substring(initialIndexPeriod, lastIndexPeriod).trim();
  const periodToArray = period.split(" ");
  const periodWellFormed = periodToArray.join("-");
  
  return periodWellFormed;
}

/* 'LIQUIDACIÓN CORRESPONDIENTE AL PERÍODO: Septiembre 2022' */