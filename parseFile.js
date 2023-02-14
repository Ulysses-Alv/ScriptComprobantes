import { PdfReader } from "pdfreader";

export const parseFile = async(path, name)=>{ //Parse the pdf given with the path and name of it
  var file = [];
  var line = 0;

  return new Promise(function(resolve, reject){
    new PdfReader().parseFileItems(path + name, function(err, pdf) {
      if (err) reject(err);
      else if (!pdf) 
        {
          //console.log("EOF");
          resolve(file); //return file.
        }

      else if (pdf.text) 
        {
          file[line] = pdf.text;
          line++;
        }
    });
  })
}  