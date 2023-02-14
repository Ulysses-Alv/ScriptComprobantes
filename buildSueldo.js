export const buildSueldo  = (file, lineWithNamePosition)=> {
	return buildSueldoName(file, lineWithNamePosition);
}

function buildSueldoName(file, lineWithNamePosition){
	const partToFind = ":";
	const line = file[lineWithNamePosition];

	return "ReciboDeSueldo-" + buildSueldoPeriod(line, partToFind) + ".pdf"; 
  }
  
function buildSueldoPeriod(line, partToFind){
	const initialIndexPeriod = line.lastIndexOf(partToFind) + 1; 
	const lastIndexPeriod = line.length; 
	const period = line.substring(initialIndexPeriod, lastIndexPeriod).trim(); 
	const periodToArray = period.split(" ");
	const periodWellFormed = periodToArray.join("-");

    return periodWellFormed;
}

function dateConverter(date) {
	switch(date) {
		case "Enero" :
			return "01"; 
		case "Febrero" :
			return "02"; 
		case "Marzo" :
			return "03"; 
		case "Abril" :
			return "04"; 
		case "Mayo" :
			return "05"; 
		case "Junio" :
			return "06"; 
		case "Julio" :
			return "07"; 
		case "Agosto" :
			return "08"; 
		case "Septiembre" :
			return "09"; 
		case "Octubre" :
			return "10"; 
		case "Noviembre" :
			return "11"; 
		case "Diciembre" :
			return "12"; 
	}
	
}