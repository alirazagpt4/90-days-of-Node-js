console.log("start of script 3");

setTimeout(()=>{
    console.log("this is from Task Queue a  setTimeout 1")
},0);

Promise.resolve().then(()=>{
    console.log("this is from microtask queue a Promise.resolve 1")
});

console.log("Script 3 was ended");