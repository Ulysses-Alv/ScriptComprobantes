import { PdfReader } from "pdfreader";

export const parseFile = async(path, name)=>{
    var file = [];
    var line = 0;

    return new Promise(function(resolve, reject){
        new PdfReader().parseFileItems(path + name, function(err, pdf) {
          if (err) reject(err);
          else if (!pdf) 
            {
                console.log("EOF");
                resolve(file);
            }

          else if (pdf.text) 
            {
                file[line] = pdf.text;
                line++;
            }
        });
      })
}