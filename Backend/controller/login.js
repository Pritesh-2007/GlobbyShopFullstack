const User=require("../models/User");
const jwt =require("jsonwebtoken");
require("dotenv").config();
exports.Login=async (req,res) => {
    try {
        const{email,password}=req.body;
        if(!email||!password)
            {
              return  res.status(400).json({
                    success:false,
                    msg:"Please fill all fields"
                })
            }
            let user=await User.findOne({email})
            if(!user)
            {
                return res.status(400).json({
                    success:false,
                    msg:"User doen not Exist"
                }) 
            }
           
            
            if(password.trim()===user.password.trim())
            {
                let payload={
                    email:user.email,
                    id:user._id,
                    role:user.role,
                }
                let token =jwt.sign(payload,process.env.secretekey,{ expiresIn: '5d'})
                 res.status(200).json({
                    success:true,
                    msg:"Login Successful.",
                    token,
                    user,
                })    
            }
            else
            {
                res.status(400).json({
                    success:false,
                    msg:"Invalid Password"
                })   
            }


    }
     catch (error) {
        console.log(error)
        
    }
    
}
