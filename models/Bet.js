const mongoose = require("mongoose");
const bet = new mongoose.Schema({
    idUser:mongoose.SchemaTypes.ObjectId,
    betType:Number,
    betAmount:Number,
    dateCreated:Date,
    slotResult:Number,
    rewardTotal:Number,   // toan bo tiền mới
    resultDesc:String,
    profit:Number
});


module.exports = mongoose.model("bet", bet);