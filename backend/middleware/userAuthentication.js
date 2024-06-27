
import jwt from "jsonwebtoken";

exports.isAuthenticated = async(req,res)=>{

    try {
        const {Bearertoken} = req.headers.authentication;

        const [type,token] = Bearertoken.split(' ');

        if(type!=="Bearer" || !token){
            return res.status(401).json({
                message:"Token is expired"
            })
        };

        const decoded = await jwt.verify()




        
    } catch (error) {
        
    }


}