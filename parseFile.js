import { PdfReader } from "pdfreader";

export const parsePDFFile = async(path, name)=>{ //Parse the pdf given with the path and name of it
  let file = [];
  let line = 0;

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
          //console.log(line + ": "+ file[line] )
          line++;
        }
    });
  })
}  
