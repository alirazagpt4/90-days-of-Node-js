const fs = require("fs");
const path = require("path");

const inputFile = "sample4.txt.docx";
const chunksize = 1024 * 1024;

let part = 1;

const readStream = fs.createReadStream(inputFile , {highWaterMark:chunksize});

readStream.on("data" , (chunk)=>{
    const outputFilePath = path.join(__dirname , `Chunk_${part}.txt`);
    fs.writeFileSync(outputFilePath , chunk);
    console.log(`Created ${outputFilePath}`);
    part++;
});

readStream.on("end" , ()=>{
    console.log("File splitting completed.");
})

readStream.on("err" , ()=>{
    console.error("Error during file splitting:", err);
})