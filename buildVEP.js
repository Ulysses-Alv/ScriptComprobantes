export const buildVEPName = (file) => {
    const line = file[dateFinder(file)];
    if (line.length <= 6) {
        return "ComprobanteVEP-" + buildVEPPeriodSimple(line) + ".pdf";
    } else {
        const listOfNames = buildVEPPeriodMultiple("202205, 202204, 202203")
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

function dateFinder(file) {
    var periodoPos = 0
    while (file[periodoPos] != "Periodo:") { periodoPos++; }
    periodoPos++;
    return periodoPos;
}

function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    let month = date.toLocaleString('es-ES', { month: 'long' })
    let month2 = month.charAt(0).toUpperCase() + month.slice(1)
    return month2;
}
