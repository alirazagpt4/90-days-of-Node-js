const mongoose = require('mongoose');

async function  connectDB() {
    await mongoose.connect('mongodb+srv://ali4aug24webgpt:SX7HxWdkQWZoQuCi@cluster0.1cvcyyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(
        () => {
            console.log('MongoDB Atlas connected');
        }
    ).catch((err) => {
        console.error('MongoDB connection error:', err);
    });


}

module.exports = connectDB;