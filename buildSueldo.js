export const buildSueldo  = (file, lineWithNamePosition)=> {
	return buildSueldoName(file, lineWithNamePosition);
}

function buildSueldoName(file, lineWithNamePosition){
	const partToFind = ":";
	const line = file.lines[lineWithNamePosition];

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