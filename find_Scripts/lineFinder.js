export const lineFinder = (file, keyword, numberOfSpaces) => {
    let periodoPos = 0;
    while (file[periodoPos] != keyword) { periodoPos++; }
    for (let index = 0; index < numberOfSpaces; index++) {
        periodoPos++;
    }
    return periodoPos;
}
