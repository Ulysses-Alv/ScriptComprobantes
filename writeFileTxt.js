import * as fs from "fs";

export const writeFileTxt = (fileName, fileContent) => {
    fs.writeFile(fileName, fileContent, (err) => {
        if (err)
            return err;
        //console.log(`${fileName} has been saved!`);
    });
}