const mongoose = require("mongoose");
const hash = new mongoose.Schema({
    account:String,
    hash:String,
    rand:String,
    dateCreated:Date,
    status:Boolean
});


module.exports = mongoose.model("hash", hash);