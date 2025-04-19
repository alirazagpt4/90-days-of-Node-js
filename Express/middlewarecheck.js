// App level Middlewares

const express = require("express");
const app = express();
const router = require("./routes/routes")
app.use('/api' , router);
app.get('/' , (req , res)=>{
    console.log(req.body);
    res.send("Hi this is middlewares");
})

app.listen(8000 , ()=>{
    console.log("server listen on port : http://localhost:8000")
});

