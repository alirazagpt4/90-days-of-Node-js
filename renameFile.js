const {rename} = require('fs/promises');
const fileName = 'dummy3.txt';
const Change = 'fuck.txt';
async function renameToFile( ){
     try {
        await rename(fileName , Change);
        console.log(`Change the name from ${fileName} to ${Change}`);
     } catch (error) {
        console.error(`Got an error trying to append the file: {error.message}`); 
     }
}

renameToFile()