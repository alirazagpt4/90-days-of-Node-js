const mongoose = require('mongoose');
const User = require('../models/user.model');
const Transaction = require('../models/transaction.model');

const tranferMoney = async (req , res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const {fromUserId , toUserId , amount} = req.body;
        const opts = {session};

        const fromUser = await User.findById(fromUserId).session(session);
        const toUser = await User.findById(toUserId).session(session);
        if(!fromUser || !toUser){
            return res.status(404).json({message: 'User not found'});
        }
        if (fromUser.balance < amount) throw new Error("Insufficient balance");

        fromUser.balance -= amount;
        toUser.balance += amount;
        await fromUser.save(opts);
        await toUser.save(opts);

        const transaction = await Transaction.create([{
            sender: fromUser._id,
            receiver: toUser._id,
            amount
        }], opts);
        if (!transaction) throw new Error("Transaction failed");
        
        await session.commitTransaction();
        session.endSession();
        return res.status(200).json({
            message: 'Transaction successful',
            fromUser,
            toUser
        });
        
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({message: 'Transaction failed'});
    }
}

module.exports = {tranferMoney};

