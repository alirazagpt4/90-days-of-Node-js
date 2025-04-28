// 1. Required packages
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// 2. Create express app
const app = express();

// 3. Middleware to parse JSON
app.use(express.json());

// 4. Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://ali4aug24webgpt:SX7HxWdkQWZoQuCi@cluster0.1cvcyyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => console.log("MongoDB Atlas Connected Successfully"))
.catch(err => console.error("MongoDB Atlas Connection Failed", err));

// 5. Define Mongoose Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cnic : String,
  createdAt: { type: Date, default: Date.now },

});

const User = mongoose.model('User', userSchema);

// 6. Create an API Route to Add User
app.post('/add-user', async (req, res) => {
  try {
    const { name, email , password , cnic } = req.body;
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email , password:hashedPassword , cnic });
    await newUser.save();

    res.status(201).json({ message: 'User saved to Atlas!', user: newUser });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Error saving user', error });
  }
});

// 7. Start the Express Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
