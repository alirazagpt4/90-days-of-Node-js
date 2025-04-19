const eventEmitter = require("events");

const events = new eventEmitter();

// console.log(events);

events.on("start" , (data)=>{
    console.log("Starting the process...");
    console.log(data);
})

events.emit("start" , "Ali Raza")


