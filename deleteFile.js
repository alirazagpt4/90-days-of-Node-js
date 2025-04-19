const {unlink} = require('fs/promises');

const fileName = './fuck.txt'
async function DeleteFiles(){
    try {
        await unlink(fileName);
        console.log(`Delete ${fileName}`)
    } catch (error) {
        
    }
}

DeleteFiles()