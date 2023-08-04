const mongoose = require("mongoose");
const users = new mongoose.Schema({

    account:  String,
    avatar: String,
    parentId: mongoose.Schema.Types.ObjectId, // null or _id
    level:Number,    // 0 F1, 1 F2...

    username: String,
    password: String,

    point_current:Number,
    point_deposit:Number,
    point_withdraw:Number,
    point_send:Number,
    point_receive:Number,
    point_bet:Number,
    point_win:Number,
    point_lose:Number,

    childAccounts:[{
        idUser:String,
        account:String,
        username:String
    }],

    email:String,
    avatar:String,
    sex:Number,     // 0 nam, 1 nu, -1 khong xac dinh

    dateCreated:Date,
    socketId:String,
    status:Number,   // 1 active, 0 disable

});

users.index({account: 1}, {unique : true});

module.exports = mongoose.model("users", users);