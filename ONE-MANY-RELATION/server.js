const express = require("express");
const app     = express();
const mongoose = require("mongoose");
const dotenv   =  require("dotenv");
const custRoutes = require("./routes/customer.routes");
const orderRoutes = require("./routes/order.routes");


dotenv.config();
app.use(express.json());

// Connection to mongo db
async function connectionDB(){

   await mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Mongo DB Atlas connected successful."))
    .catch(()=>console.log("Mongo DB Connection failed."));
}

connectionDB();

app.get("/" , (req , res)=>{
    res.json({
        message:"Welcome to ONE-TO-MANY RELATIONSHIP."
    });
});


app.use("/api/customer" , custRoutes);
app.use("/api/orders" , orderRoutes);






app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})
