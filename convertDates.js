export const getMonthName = (monthNumber) => { // Octubre -> 10 
    const date = new Date();
    date.setMonth(monthNumber - 1);

    let month = date.toLocaleString('es-ES', { month: 'long' });
    let month2 = month.charAt(0).toUpperCase() + month.slice(1);
    return month2;
}

export const getMonthNumber = (monthName) => { // 10/2022 -> Octubre 2022
    const dateObj = new Date(monthName);
    const month = dateObj.getMonth() + 1; // Add 1 since getMonth() returns 0-based index
    const year = dateObj.getFullYear();    
    
    const dateInNumbers = `${month}/${year}`;
    
    return dateInNumbers;
}


