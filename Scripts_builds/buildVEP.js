import { getMonthName } from "../Scripts_checkAndFuctions/convertDates.js";
import { lineFinder } from "../find_Scripts/lineFinder.js";

export const buildVEPName = (file) => {
    const line = file[lineFinder(file, "Periodo:", 1)];
    if (line.length <= 6) {
        return "ComprobanteVEP-" + buildVEPPeriodSimple(line) + ".pdf";
    } else {
        const listOfNames = buildVEPPeriodMultiple(line)
        const listOfFinalNames = listOfNames.map(function (item) {
            return "ComprobanteVEP-" + item + ".pdf";
        })
        return listOfFinalNames;
    }
}

function buildVEPPeriodSimple(line) {
    const dateMonth = line.slice(4, 6);
    const dateYear = line.slice(0, 4);
    const periodWellFormed = getMonthName(dateMonth) + "-" + dateYear;
    return periodWellFormed;
}

function buildVEPPeriodMultiple(line) {
    let count = (line.match(/,/g) || []).length;
    let firstIndex = 0;
    let secondIndex = 6;
    let newFileName = [];
    for (let index = 0; index <= count; index++) {
        newFileName[index] = buildVEPPeriodSimple(line.slice(firstIndex, secondIndex))
        firstIndex += 8;
        secondIndex += 8;
    }
    return newFileName;
}


