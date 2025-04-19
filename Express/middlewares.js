// App level Middlewares

const express = require("express");
const app = express();

app.use(express.json())
function authMiddleware(req , res , next){
    console.log("pehla auth chala ga ")
    next();
}

app.use(authMiddleware);

function validation(req, res , next){
    console.log("phir validation check hogi");
    next();
}

app.use(validation);

app.get('/' , (req , res)=>{
    console.log(req.body);
    res.send("Hi this is middlewares");
})

app.listen(8000 , ()=>{
    console.log("server listen on port : http://localhost:8000")
});

