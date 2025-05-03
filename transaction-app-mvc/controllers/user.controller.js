const User = require('../models/user.model');

const createUser = async (req,res)=>{
    const {name , balance} = req.body;
    // console.log(req.body);

    if(!name || !balance){
        return res.status(400).json({message: 'Please provide name and balance'});
    }

    try {
        const user = await User.create({
            name,
            balance
        });

        return res.status(201).json({
            message: 'User created successfully',
            user
        });
        
    } catch (error) {
        return res.status(500).json({message: 'Server error'});
    }
}

const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message: 'Server error'});
    }
}

module.exports = {createUser , getAllUsers};