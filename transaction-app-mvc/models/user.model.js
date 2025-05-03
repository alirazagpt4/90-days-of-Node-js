const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    balance:Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;