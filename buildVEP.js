export const buildVEP = (file)=> {
    const line = file[dateFinder(file)];

    return "VEP-" + buildVEPPeriod(line) + ".pdf"; 
}

function buildVEPPeriod(line){ "202202"
    const dateYear = line.slice(0, 4);
    const dateMonth = line.slice(4, 6);
    const periodWellFormed = dateYear + "-" + dateMonth;

    return periodWellFormed;
}

function dateFinder(file){ //Returns the position of the date which will be the reference of the VEP Name
    var periodoPos = 0
    while(file[periodoPos] != "Periodo:"){
        periodoPos++;
    }
    periodoPos++;
    return periodoPos;
}