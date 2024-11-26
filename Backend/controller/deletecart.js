const cart=require("../models/Cart");
exports.deletecart=async(req,res)=>{
    try{
        const{id}=req.params
       const cartitems=await cart.findByIdAndDelete(id)
       if(!cartitems)
       {
        return res.status(200).json({
            success:false,
            msg:"cart item does not exist"  
        })
       }
        res.status(200).json({
            success:true,
            data:cartitems,
            msg:"cart item deleted"  
        })
        }
        catch(error)
        {
            console.log(error);
            res.status(500).json({
                success:false,
             
                msg:"Internal server error"  
            })
        }

}