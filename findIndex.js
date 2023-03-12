export function findIndex(strings, search) {
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].indexOf(search) !== -1) {
            return i;
        }
    }
    return undefined;
}
