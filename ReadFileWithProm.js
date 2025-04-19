const { readFile } = require("fs/promises");

async function readThisFile(){
    try {
        const data = await readFile('./README.md');
        console.log(data.toString());
    } catch (error) {
        console.error(`Got an error try to read file ${error.message}`);
    }
}

readThisFile()