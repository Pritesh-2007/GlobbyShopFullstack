const User=require("../models/User");
exports.register=async (req,res) => {
        try {
                const{name,email,password,role}=req.body;
                const Ispresent=await User.findOne({email})
                if(Ispresent)
                {
                    res.status(400).json({
                        success:false,
                        msg:"User Already exists!"
                    })
                }
              
                    const user=await User.create({name,email,role,password})
                    
                   return res.status(201).json({
                        success:true,
                        msg:"USER CREATED!",
                        data:user
                    })
                
            } catch (error) {
                console.log(error.message);
                res.status(500).json({
                    success:false,
                    msg:"Internal Server Error",
                    err:error.message
                })
                
            }   
}