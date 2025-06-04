const Customer = require("../models/customer");

const createCustomer = async (req , res)=>{
    
    try{

        const { name , email , orders} = req.body;
        
        const newCustomer = await Customer.create({
            name,
            email,
            orders
        });
        
        res.status(200).json({
            message:"Customer created successfully.",
            customer:newCustomer
        });
        
    }
    catch(err){
        res.status(500).json({
            message:"Internal server error.",
            error:err.message
        });
    }

}


const getCustomerbyOrderId = async(req ,res)=>{
    try{
        const {order_id} = req.params.id;

        const customer = await Customer.findOne({orders:order_id}).populate('Order');

        if(!customer){
            return res.status(404).json({
                message:"Customer not found."
            });
        }

        res.status(200).json({
            message:"Customer found.",
            customer
        });

    }
    catch(err){
        res.status(500).json({
            message:"Internal server error.",
            error:err.message
        });
    }
}


module.exports = {createCustomer , getCustomerbyOrderId};