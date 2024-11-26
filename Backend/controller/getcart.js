const cart=require("../models/Cart");
exports.getcart=async(req,res)=>{
    try{
       const cartdata=await cart.find({})
       if(!cartdata)
       {
           return res.status(400).json({
               success:false,
               msg:"cart is empty!"
           })
       }
        res.status(200).json({
            success:true,
            data:cartdata,
            msg:"cart fetched successfully"  
        })
        }
        catch(error)
        {
            res.status(500).json({
                success:false,
             
                msg:"Internal server error"  
            })
        }

}