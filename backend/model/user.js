const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userSchema =new mongoose.Schema({

   
    name:{
        type:String,
        required:[true,"Please Enter a name"],
    },
   
    email:{
        type:String,
        required:[true,"Please Enter a valid E-mail"],
        unique:[true,"Email Already exists"],

    },
    password:{
        type:String,
        required:[true,"Please enter a password "],
        minlength:[6,"Password must be atleast 6 characters"],
        select:false,
    },


     
});

const User = mongoose.model('User',userSchema)

module.exports = User;