const cart=require("../models/Cart");
exports.putcart=async(req,res)=>{
    try{
        const product_id=req.params.id;
        const {title,description,price,rating,stock,shippingInformation,thumbnail,quantity}=req.body
        const Ispresent=await cart.findOne({product_id})
       if(!Ispresent)
       {
           return res.status(400).json({
               success:false,
               msg:"product does not exists!"
           })
       }
       const cartadd=await cart.findOneAndUpdate({product_id},{title,description,price,rating,stock,shippingInformation,thumbnail,quantity},{new:true})  //.create({title,description,price,rating,stock,shippingInformation,thumbnail,quantity})
        res.status(200).json({
            success:true,
            data:cartadd,
            msg:"cart modified"  
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