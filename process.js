const name = process.argv[2];

if(!name){
    console.error("Please provide a name");
    process.exit(1);
}

console.log(`Hello ${name}`)