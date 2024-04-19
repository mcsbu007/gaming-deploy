const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password:{
        type:String,
    },
    role:{
        type:String,
    },
    department:{
        type:String,
    },
    address:{
        type:String,
    },
    gender:{
        type:String,
    },
    phonenum:{
        type:String,
    }
})
module.exports = mongoose.model("User", userSchema, "users")
