# Script de comprobantes

## Requerimiento

Necesito un script que tome un archivo(luego vemos como hacerlo para más de uno) de alguna ubicación dada(o quizás con que tome la raíz cómo dónde está ubicado el archivo alcanza) y le haga un renombre al archivo, pero según algún valor que tenga adentro el propio archivo, para que sea automatizado.
Este sistema sólo valdría por ahora para re nombrar los archivos que se bajan de afip de los pagos que hago de los aportes y el sueldo de mamá. Adjunto un zip con todos los archivos hasta ahora, recomiendo mirarlos para entenderlos y eliminar los duplicados porque seguro hay duplicados.

Entonces hay 2 tipos de archivos: los recibos de sueldo o pago, que tienen nombre ponele decente(aunque los vamos a renombrar) y los comprobantes vep, que tienen nombres de mierda.

- Vep: el nombre nuevo a seguir el formato: aportes-MM-YYYY, el mm y el yyyy significan la cantidad de dígitos que usas para describir el campo de fecha, claramente yyyy es year y mm es month. Ejemplo: el nombre aportes-02-2023 va a ser para el vep que dentro diga, en el campo periodo 2002302.
  Para los que tienen más de un periodo, diría que haya un archivo por cada período(aunque la info esté repetida). Entonces si tienes un Período 202304, 202305, vas a tener los archivos aportes-04-2023.pdf y aportes-05-2023.zip.

- Recibo de pago o sueldo: el formato del nombre va a ser sueldo-MM-YYYY. Este es mas simple porque hay 1 por cada mes. El período lo sacas de del título, pero fijate que esta el nombre del mes, así que hay que pasar eso a su correspondiente número. Pero quiero que lo hagas usando alguna dependencia de fechas.

Creo que prefiero que tengas que tener el script en una carpeta y dentro de esa carpeta, colocar el o los archivos y cuando corres el comando, pasarle un parámetro del tipo, los parámetros pueden ser VEP o SUELDO, sin importar las mayusculas y minusculas, fijate como hacer eso. Ejemplo de como correrlo en la consola:  ./script.js VEP

Te paso este link que te sirva para saber como empezar con un proyecto de scripting y levantarlo y probarlo. Empezá por loggear un hello world. Luego vas armando el proyecto. Te mando keywords para que tengas de referencia que podes googlear, leer y aprender.

Nodejs
Scripting
package.json
add node dependencies
bash
run script on command line
parse pdf file
get lines or words from parsed pdf
fs, filesystem with node
get file from filesystem
save a pdf file with new name
string interpolation
buffer
sync
async
close buffer
handle buffer bytes
callback
promise

## Como usar el script

Para usarlo es necesario tener el ambiente de node instalado.
Agregar un archivo .env, con los valores correspondientes para que levante el ambiente.
Los archivos VEP y recibos de sueldo deben estar dentro de una carpeta de nombre `filesToRename` dentro de la raíz del proyecto.
En consola correr `npm run renameFiles`
Este comando dejara todos los archivos correctamente nombrados en una carpeta de nombre `renamedFiles` en la raíz del proyecto.


