import {PdfReader} from "pdfreader";

/**
 * Parsea el archivo PDF a un objeto nuestro, que tiene el tipo ya que le corresponde.
 * En caso de error, no explota y solo retorna un archivo con tipo ERROR, para que no sea procesable
 * y siga la ejecución
 * */
export const parsePDFFile = async (path, name) => {
    const file = {name, path, fullPath: path + name, lines: []};
    let line = 0;
    const isPDF = name.includes(".pdf");
    if (isPDF) {
        const parseFile = (resolve, reject) => {
            new PdfReader().parseFileItems(file.fullPath, parseLineHandler(reject, resolve, file, line));
        };
        return new Promise(parseFile)
    } else {
        file.type = "NOT PDF"
        return Promise.resolve(file)
    }
}

function parseLineHandler(reject, resolve, file, line) {
    return function (error, pdf) {
        if (error) {
            console.log(`Error al parsear la linea [${line}] del archivo [${file.name}].`, error)
            file.type = "ERROR"
            reject(file);
        } else if (!pdf) {
            resolve(file);
        } else if (pdf.text) {
            setTypeForFromFirstLine(file, line, pdf.text);
            file.lines[line] = pdf.text;
            line++;
        }
    };
}

function setTypeForFromFirstLine(file, position, text) {
    if (position === 0) {
        file.type = text;
    }
}