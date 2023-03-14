import { findIndex } from "./findIndex.js";
import { renamedFilesPath } from "./index.js";
import { lineFinder } from "./lineFinder.js";
import { parsePDFFile } from './parseFile.js';
import { objectsArrayOfPeriodos } from "./sortObjects.js";

const consolidadoPrototype = {
    periodo: undefined, //"xxxxx",
    montoVEP: undefined, //"xxxx, xx",
    fechaDePagoVEP: undefined, //"xx/xx/xxxx",
    montoSueldo: undefined, //"xx,xx",
    fechaDePagoSueldo: undefined //"xx/xx/xxxx"
}
export const parseFileAndAddToArray = async (filesArray, periodTime) => {
    const indexVEP = findIndex(filesArray, 'Comprobante');
    const indexSueldo = findIndex(filesArray, 'Recibo');

    const parsePDfVEP = indexVEP !== undefined ? await parsePDFFile(renamedFilesPath, filesArray[indexVEP]) : undefined;
    const parsePDfSueldo = indexSueldo !== undefined ? await parsePDFFile(renamedFilesPath, filesArray[indexSueldo]) : undefined;

    let consolidadoPeriodo = Object.create(consolidadoPrototype); //The Object With All the items inside.
    
    const nameOfTxtFile = periodTime.slice(0, -4).replace("-", " ");
    consolidadoPeriodo.periodo = nameOfTxtFile;
    
    const montoVEPPDF = parsePDfVEP !== undefined ? parsePDfVEP[lineFinder(parsePDfVEP, "Fecha de Pago:", 1)].slice(0, 8) : "Dato no encontrado. Falta Comprobante VEP de este periodo"
    consolidadoPeriodo.montoVEP = montoVEPPDF;
    
    const fechaDePagoVEPPDF = parsePDfVEP !== undefined ? parsePDfVEP[lineFinder(parsePDfVEP, "IMPORTE PAGADO:", 1)] : "Dato no encontrado. Falta Comprobante VEP de este periodo";
    consolidadoPeriodo.fechaDePagoVEP = fechaDePagoVEPPDF;
    
    const montoSueldoPDF = parsePDfSueldo !== undefined ? parsePDfSueldo[lineFinder(parsePDfSueldo, "Total", 2)] : "Dato no encontrado. Falta Recibo de Sueldo de este periodo";
    consolidadoPeriodo.montoSueldo = montoSueldoPDF;
    
    const fechaPagoSueldo = parsePDfSueldo !== undefined ? parsePDfSueldo[lineFinder(parsePDfSueldo, "Detalle del Período", 2)].slice(7) : "Dato no encontrado. Falta Recibo de Sueldo de este periodo";
    consolidadoPeriodo.fechaDePagoSueldo = fechaPagoSueldo;

    objectsArrayOfPeriodos.push(consolidadoPeriodo)
    //console.log(objectsArrayOfPeriodos)
    //console.log(objectsArrayOfPeriodos.length)
    //console.log(parsePDfVEP)
}