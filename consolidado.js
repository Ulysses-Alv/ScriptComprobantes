import { renamedFilesPath, consolidadoPath } from "./index.js";
import { collectFilesNames } from './Scripts_checkAndFuctions/filesCollecting.js';
import { findSamePeriodPDFS } from "./find_Scripts/findSamePeriodPDFS.js";
import { parseFileAndAddToArray } from "./Script_Parse/parseFileAndWriteObject.js";
import { writeFileTxt, writeFileObject } from "./Script_Rename/writeFileTxt.js";
import { objectsArrayOfPeriodos, sortObjects } from "./Scripts_checkAndFuctions/sortObjects.js";

export const consolidado = async () => {
    const renameFilesPath = collectFilesNames(renamedFilesPath);
    const objWithPairFiles = findSamePeriodPDFS(renameFilesPath);

    const propertyNames = Object.keys(objWithPairFiles);
    forLoop(propertyNames, objWithPairFiles);
    setTimeout(sortAndWrite, 1000)
}

function sortAndWrite() {
    sortObjects();
    objectsArrayOfPeriodos.reverse().forEach(consolidadoObj => writeFileObject(consolidadoObj));
    writeFileTxt("Consolidado");
}

function forLoop(propertyNames, objWithPairFiles) {
    for (let i = 0; i < propertyNames.length; i++) {
        const propertyName = propertyNames[i];
        const propertyValue = objWithPairFiles[propertyName];
        parseFileAndAddToArray(propertyValue, propertyName);
    }
}

