const { execFile} = require("child_process");
const { error } = require("console");
const path = require("path");
const { stderr, stdout } = require("process");

const folderPath = path.join(__dirname);

const fileName = 'fetch.js';
const command = `dir "${folderPath}\\${fileName}" /s /b`;

execFile(command , (error,stdout,stderr)=>{
    if(error){
        console.error(`Error : ${error.message}`);
        return ;
    }

    if(stderr){
        console.error(`stderr : ${stderr}`)
    }

    if(stdout){
        console.log(`File Found : ${stdout}`)

    }
    else{
        console.log(`File Not Found`)
    }
})