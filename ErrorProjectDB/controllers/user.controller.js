const User = require("../models/user");

const createUser = async (req , res , next)=>{
    try {
        const {email , password} = req.body;
        const user = await User.create({email , password});
        res.status(201).json({
            message : "User Created",
            user
        });
    } catch (err) {
        next(err)
    }
}


const getUserById = async (req , res , next)=>{
    try{
        const { id} = req.params.id;

        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({
                message : "User not found"
            });
        }
        res.status(200).json({
            message : "User found",
            user
        });
    }
    catch(err){
        next(err)
    }
}



module.exports = {createUser , getUserById};