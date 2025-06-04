const Order = require("../models/orders");
const Customer = require("../models/customer");

const createOrders = async (req , res)=>{
    try {

        const {itemName , amount , status , customer} = req.body;

        const newOrder = await Order.create({
            itemName,
            amount,
            status,
            customer
        });

        console.log(newOrder);


       const customerUpdate =  await Customer.findByIdAndUpdate(customer , {
            $push:{orders:newOrder._id}
        });

        console.log(customerUpdate);

        res.status(200).json({
            message:"Order created successfully.",
            order:newOrder
        });
        
    } catch (error) {
        res.status(500).json({
            message:"Internal server error.",
            error:error.message
        })
    }
}


const getOrdersByCustomerId = async(req , res)=>{
    try {
        const {customer_id} = req.params.id;
        console.log(customer_id)

        const orders = await Order.find({customer:customer_id}).populate('Customer');

        if(!orders){
            return res.status(404).json({
                message:"Orders not found."
            });
        }

        res.status(200).json({
            message:"Orders found.",
            orders
        });
        
    } catch (error) {
        res.status(500).json({
            message:"Internal server error.",
            error:error.message
        })
    }
}


module.exports = {createOrders , getOrdersByCustomerId}