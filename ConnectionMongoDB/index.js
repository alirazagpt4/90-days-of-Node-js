const express = require("express")
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://ali4aug24webgpt:SX7HxWdkQWZoQuCi@cluster0.1cvcyyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log(" Connected to MongoDB Atlas"))
.catch((err)=>console.log("Error connecting to MongoDB Atlas", err));

const schema = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        required: true,
        unique: true
    }
});

const User = mongoose.model("user", schema);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Hello from MongoDB" });
});

app.post("/user" , async (req,res)=>{
    const { name , email} = req.body;

    if(!name || !email) {
        return res.status(400).json({
            message: "Name and email are required"
        });
    }

    

  const newUser =  await User.create({
        name,
        email
    })

    return res.status(201).json({
        message: "User created successfully",
        newUser

    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})