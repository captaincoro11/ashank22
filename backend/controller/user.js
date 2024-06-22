const user = require('../models/user');


exports.register = async (req, res) => {
    try {
      const { name, email, password, avatar } = req.body;
     
      let User = await user.findOne({ email });
      if (User) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      }

     
  
      const myCloud = await cloudinary.v2.uploader.upload(avatar, {
        folder: "avatars",
      });
  

      User = await user.create({
        name,
        email,
        password,
        avatar: { public_id: myCloud.public_id, url: myCloud.secure_url },
      });
  
      const token = await User.generateToken();
  
      const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: false,
          secure:true,
          sameSite:'none'
      };
  
      res.status(201).cookie("token", token, options).json({
        success: true,
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
