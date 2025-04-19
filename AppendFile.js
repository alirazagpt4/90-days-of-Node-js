const {appendFile} = require('fs/promises');
const fileName = 'dummy3.txt';
const data = 'Node js file system is amazing\ngreat way to deal with the files.\nso working with files become easy.';
async function appendToFile( ){
     try {
        await appendFile(fileName , data , {flag:'w'});
        console.log(`Append data to ${fileName}`);
     } catch (error) {
        console.error(`Got an error trying to append the file: {error.message}`); 
     }
}

appendToFile()