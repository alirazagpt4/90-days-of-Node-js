const fs = require("fs");

// console.log(fs);

console.log("start");

fs.readFile("README.md" , "utf-8" , (err , data)=>{
    if(err) return console.error(err);
    console.log(data);
})

console.log("end");


// const fs = require("fs");

// setTimeout(() => console.log("this is setTimeout 1"), 100);

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });