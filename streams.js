const fs = require("fs");
const zlib = require("zlib");

const inputFilePath = "./data.txt";
const outputFilePath = "./data.txt.gz";

// Create a readable stream from the input file

const readStream = fs.createReadStream(inputFilePath);
const gzip       = zlib.createGzip();
const writeStream = fs.createWriteStream(outputFilePath);

// Pipe them together
readStream
  .pipe(gzip)
  .pipe(writeStream)
  .on("finish", () => {
    console.log("File compression completed.");
  })
  .on("error", (err) => {
    console.error("Error during compression:", err);
  });