process.stdout.write("What is your favourite programming language.");

process.stdin.on("data" , (data)=>{
    const input = data.toString().trim();
    console.log(`You Love ${input}`);
    process.exit();
});


