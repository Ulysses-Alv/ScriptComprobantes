import { renamedFilesPath, consolidadoPath } from "./index.js";
import { collectFilesNames } from './filesCollecting.js';
import { findSamePeriodPDFS } from "./findSamePeriodPDFS.js";
import { parseFileAndAddToArray } from "./parseFileAndWriteObject.js";
import { writeFileTxt, writeFileObject } from "./writeFileTxt.js";
import { objectsArrayOfPeriodos, sortObjects } from "./sortObjects.js";

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

