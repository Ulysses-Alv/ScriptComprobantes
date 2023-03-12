import { renamedFilesPath } from "./index.js";
import { collectFilesNames } from './filesCollecting.js';
import { findSamePeriodPDFS } from "./findSamePeriodPDFS.js";
import { parseFileAndWriteObject } from "./parseFileAndWriteObject.js";

export const consolidado = () => {
    const renameFilesPath = collectFilesNames(renamedFilesPath);
    const objWithPairFiles = findSamePeriodPDFS(renameFilesPath);

    const propertyNames = Object.keys(objWithPairFiles);
    for (let i = 0; i < propertyNames.length; i++) {
        const propertyName = propertyNames[i];
        const propertyValue = objWithPairFiles[propertyName];
        parseFileAndWriteObject(propertyValue, propertyName);
    }
}

