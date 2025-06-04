const express = require("express");
const mongoose = require("mongoose");
const dotenv   = require("dotenv");
const userRoutes = require("./routes/userRoutes")
const errorHandler = require("./middlewares/errorHandler.middleware");

dotenv.config()
const app = express();


// middleware 
app.use(express.json());

app.get("/" , (req , res) =>{
    res.json("Welcome to Error Handling in Database API")
})

// routes
app.use("/api/users" , userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// mongo db connection 

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongo db atlas connected");
    app.listen(process.env.PORT , ()=>{
        console.log("Server listen to the port http://localhost:5000");
    })
})
.catch(err => {
    console.error("Mongo db atlas failed" , err.message);
    process.exit(1);
})



