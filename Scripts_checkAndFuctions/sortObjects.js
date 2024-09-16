import { getMonthNumber } from "./convertDates.js";

export let  objectsArrayOfPeriodos = []

export const sortObjects = () => {
    objectsArrayOfPeriodos.sort((a, b) => {
        const aFull = getMonthNumber(a.periodo)
        const bFull = getMonthNumber(b.periodo)
        const [monthA, yearA] = aFull.split('/');
        const [monthB, yearB] = bFull.split('/');
        
        if (yearA !== yearB) {
            return yearA - yearB;
        }
        return monthA - monthB;
    });
}