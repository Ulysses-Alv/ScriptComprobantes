import { PdfReader } from "pdfreader";

export const parsePDFFile = async (path, name) => { //Parse the pdf given with the path and name of it
  const file = {name};
  var line = 0;
  return new Promise(function (resolve, reject) {
    new PdfReader().parseFileItems(path + name, function (err, pdf) {
      if (err) reject(err);
      else if (!pdf) {
        resolve(file); //return file.
      }

      else if (pdf.text) {
        file.lines[line] = pdf.text;
        line++;
      }
    });
  })
}  
/* 
{
  //name: "asdasd",
  lines: []
} */