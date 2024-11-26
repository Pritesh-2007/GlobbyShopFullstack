const { request } = require("express");
const productlist=require("../models/productlist");
exports.getallproducts=async (req,res) => {
    try{
   const products=await productlist.find();
   if(!products)
    {
     return res.status(200).json({
         success:false,
         msg:"no product found!"  
     })
    }
    res.status(200).json({
        success:true,
        data:products,
        msg:"Fetcahed all products"  
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
exports.getproduct=async (req,res) => {
    try{
    const id=req.params.id;  
    console.log(id,"req.param",req.params.id)
   const products=await productlist.findById(id)
   if(!products)
   {
    return res.status(200).json({
        success:false,
        msg:"no product found!"  
    })
   }
    res.status(200).json({
        success:true,
        data:products,
        msg:"Fetcahed product"  
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