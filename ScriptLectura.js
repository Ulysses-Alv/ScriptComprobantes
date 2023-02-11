readFile('ReciboPago_20230203123717.pdf'); */
import { PdfReader } from "pdfreader";

new PdfReader().parseFileItems("carpetaConArchivo/ReciboPago_20230203123717.pdf", (err, item) => {
  if (err) console.error("error:", err);
  else if (!item) console.warn("end of file");
  else if (item.text) console.log(item.text);
});

/* Este tiene que leer y almacenar la informacion correctamente, osea leer donde dice fecha y devolver el futuro nombre.*/