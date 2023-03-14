import * as fs from "fs";
import { consolidadoPath } from "../index.js";

let text = "";

export const writeFileTxt = (fileName) => {
    fs.writeFile(consolidadoPath + fileName + ".txt", text, (err) => {
        if (err)
            return err;
        //console.log(`${fileName} has been saved!`);
    });
}

export const writeFileObject = (objectConsolidadoPeriodo) => {
    for (let prop in objectConsolidadoPeriodo) {
        text += prop + ": " + objectConsolidadoPeriodo[prop] + ".\n";
    }
    text += "--------------\n";
}