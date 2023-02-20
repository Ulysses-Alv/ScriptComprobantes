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
    parsedFiles.forEach(renameDependsOnType)
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