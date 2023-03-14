import { parsePDFFile } from '../Script_Parse/parseFile.js';
import { filesPath } from '../index.js';
import { renameDependsOnType } from "../Script_Rename/renameDependsOnType.js";

export async function processFileBy(fileName) {
	const isPDF = fileName.includes(".pdf");
	if (isPDF) {
		const fileToRename = await parsePDFFile(filesPath, fileName)
			.catch(er => {
				console.log(er);
				const invalidFile = ["error"];
				return invalidFile;
			}); //A Parsed File. List of strings.

		renameDependsOnType(fileName, fileToRename);
	}
	else {
		console.log(`El archivo [${fileName}] no tiene el formato de pdf valido`);
	}
}
