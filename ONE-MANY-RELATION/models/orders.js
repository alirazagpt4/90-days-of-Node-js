const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    itemName:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer',
        required:true
    }

});

const Order = mongoose.model('Order' , orderSchema);

module.exports = Order;