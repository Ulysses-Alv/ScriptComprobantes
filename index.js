import 'dotenv/config';
import {collectFilesNames} from './filesCollecting.js';
import {parsePDFFile} from './parseFile.js';
import {buildSueldo} from './buildSueldo.js';
import {buildVEPName} from './buildVEP.js';
import {moveAndRenameFile} from './renameFile.js';

export const handler = async () => {
    const filesPath = process.env.SOURCE_PATH;
    const filesName = collectFilesNames(filesPath);
    const parsedFiles = await Promise.all(filesName.map(async function (fileName) {
        return await parsePDFFile(filesPath, fileName).catch(invalidFile => invalidFile);
    }));
    const consolidated = buildConsolidatedFile(parsedFiles);
    // console.log(consolidated);
    // parsedFiles.forEach(renameDependsOnType);
}

function buildConsolidatedFile(parsedFiles) {
    let filledFiles = parsedFiles.map(fillProperties);
    console.log(filledFiles);
    return undefined;
}

function fillProperties(file) {
    const isPeriod = (element) => element ==="Periodo:";

    if (isVep(file)) {
        let index = file.lines.findIndex(isPeriod);
        let xx = file.lines[index + 1];
        let splitted = xx.split(",")
        console.log("splitted", splitted)
        file.period = splitted
        return file
    }

}

function renameDependsOnType(fileToRename) {
    if (isVep(fileToRename)) {
        const newFileName = buildVEPName(fileToRename);
        renameFileName(fileToRename, newFileName);
    } else if (isSueldo(fileToRename)) {
        const newFileName = buildSueldo(fileToRename, 1);
        renameFileName(fileToRename, newFileName);
    } else {
        console.log(`El archivo [${fileToRename.name}] no es procesable.`)
    }
}

function renameFileName(file, newName) {
    const oldPath = file.fullPath;
    const newPath = process.env.DESTINATION + newName;
    console.log(`Mueve archivo desde [${oldPath}] hacia [${newPath}].`)
    moveAndRenameFile(oldPath, newPath);
}

const isVep = (file) => file.type === "VEP";

const isSueldo = (file) => file.type === "RECIBO DE SUELDO";