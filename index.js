import 'dotenv/config';
import {collectFilesNames} from './filesCollecting.js';
import {parsePDFFile} from './parseFile.js';
import {buildSueldo} from './buildSueldo.js';
import {buildVEPName} from './buildVEP.js';
import {moveAndRenameFile} from './renameFile.js';

const filesPath = process.env.SOURCE_PATH;
const renamedFilesPath = process.env.DESTINATION;

export const handler = async () => {
    const filesName = collectFilesNames(filesPath);
    const parsedFiles = await Promise.all(filesName.map(async function (fileName) {
        return await parsePDFFile(filesPath, fileName).catch(invalidFile => invalidFile);
    }));
    parsedFiles.forEach(renameDependsOnType)
}

function renameDependsOnType(fileToRename) {
    if (isVep(fileToRename)) {
        const newFileName = buildVEPName(fileToRename);
        renameFileName(fileToRename.name, newFileName);
    } else if (isSueldo(fileToRename)) {
        const newFileName = buildSueldo(fileToRename, 1);
        renameFileName(fileToRename.name, newFileName);
    } else {
        console.log(`El archivo [${fileToRename.name}] no es procesable.`)
    }
}

function renameFileName(oldName, newName) {
    const oldPath = filesPath + oldName;
    const newPath = renamedFilesPath + newName;
    console.log(`Mueve archivo desde [${oldPath}] hacia [${newPath}].`)
    moveAndRenameFile(oldPath, newPath);
}

const isVep = (file) => file.type === "VEP";

const isSueldo = (file) => file.type === "RECIBO DE SUELDO";