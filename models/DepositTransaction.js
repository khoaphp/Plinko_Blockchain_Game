const mongoose = require("mongoose");
const deposit = new mongoose.Schema({
    transactionHash:String,
    transactionResult:Boolean,
    idUser:String,
    tokenAmount:Number, // change to ether already
    pointAdded:Boolean, // true DA ADD POINT, flase ADD POINT LOI
    from:String, // wallet send transaction
    dateDeposit:Date
});

module.exports = mongoose.model("depositTransaction", deposit);