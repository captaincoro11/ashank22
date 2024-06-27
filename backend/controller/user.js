const user = require('../model/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();


exports.register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
     
      let User = await user.findOne({ email });
      if (User) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      };

      const hashedPassword = await bcrypt.hash(password,10);

       User = await user.create({
        name,
        email,
        password:hashedPassword
      });
  
      const token = await jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"1d"})
     
  
      res.status(201).json({
        success: true,
        message:"User Registerd Successfully",
        User,
        token,
      });

      
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  

exports.login =async(req,res)=>{
    try {
        const {email,password} = req.body;
        
        const User = await user.findOne({email}).select("+password").populate('posts followers following');

        if(!User){
            return res.status(400).json({
                success:false,
                message:"User does not exist"
            })
        }
        const isMatch = await User.matchPassword(password);
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Incorrect password"
            })
        }
        const token =await User.generateToken();
        res.status(200).cookie("token",token,{expires:new Date(Date.now()+90*24*60*60*1000),
        httpOnly:false,
        secure:true,
        sameSite:'none'
    }).
        json({
            success:true,
            User,
            token
       
        });

        

        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error,

        })
    }
}
exports.logout = async (req,res)=>{
    try {
       c

    
    } 
    catch (error) {
        res.status(500).json({

            success:false,
            message:error.message,
           
        })
        
    }
}

exports.loadUser = async(req,res)=>{

    
}