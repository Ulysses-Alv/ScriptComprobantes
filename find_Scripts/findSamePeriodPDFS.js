export const findSamePeriodPDFS = (renameFiles) => {
    const result = renameFiles.reduce((acc, item) => {
        const ending = item.slice(15);
        if (acc[ending]) {
            acc[ending].push(item);
        } else {
            acc[ending] = [item];
        }
        return acc;
    }, {});
    return result;
}
