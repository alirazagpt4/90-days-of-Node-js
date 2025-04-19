const express = require("express");

const app = express();
app.use(express.json());


// // Middleware - Like a guard checking for if you have this than you will allow next
// app.use((req, res, next) => {
//     const { name, phone } = req.body;
  
//     if (!name || !phone) {
//       return res.status(400).send('Naam aur phone number zaroori hain!');
//     }
  
//     console.log(`Naam: ${name}, Phone: ${phone}`);
//     next(); // Sab theek hai, aage jao
//   });


// Routing - Handling different paths 
app.get('/' , (req ,res)=>{
    res.send("Welcome to the Pizza Shop");
})


app.get('/menu' , (req , res)=>{
    res.send("Pizza Menu : pizza , fries , burgers");

})


app.post('/order' , (req , res)=>{
    const order = req.body;
    console.log(order);
    res.send("Order received");
})


app.delete('/cancel' , (req , res)=>{
    res.send("Order cancelled");
})

app.listen(3000 , ()=>{
    console.log("Server is running on http://localhost:3000");
})

