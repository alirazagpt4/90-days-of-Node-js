require("dotenv").config()

if(!process.env.GOOGLE_API_KEY){
    console.error("Please provide a Google API Key");
    process.exit(1);
}

console.log(`Your API key is ${process.env.GOOGLE_API_KEY}`);