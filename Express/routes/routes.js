const express = require("express");

const router = express.Router();

const authUser = (req , res ,next) =>{
    req.user = {userId:1 , role:"student"}

    if(req.user){
        next();
    }
    else{
        res.json({
            success:false,
            message:"User not authenticated"
        })
    }
} 


const isStudent = (req , res ,next)=>{
    if(req.user.role === 'student'){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access Denied"
        })
    }
}


const isAdmin = (req , res , next)=>{
    if(req.user.role === 'admin'){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access Denied"
        })
    }
}



router.get('/admin' , authUser , isAdmin , (req, res)=>{
    console.log("Admin hoon main.")
})

router.get('/student' ,authUser , isStudent , (req , res)=>{
    console.log("Student hoon main.")
})

module.exports = router;

