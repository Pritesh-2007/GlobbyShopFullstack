const cart=require("../models/Cart");
exports.addtocart=async(req,res)=>{
    try{
        const {product_id,title,description,price,rating,stock,shippingInformation,thumbnail,quantity}=req.body
        const Ispresent=await cart.findOne({product_id})
       if(Ispresent)
       {
           return res.status(400).json({
               success:false,
               msg:"product already exists!"
           })
       }
       const cartadd=await cart.create({product_id,title,description,price,rating,stock,shippingInformation,thumbnail,quantity})
        res.status(200).json({
            success:true,
            data:cartadd,
            msg:"Item added to cart "  
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