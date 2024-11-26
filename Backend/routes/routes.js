const express=require('express');

const {getallproducts, getproduct}=require('../controller/getproducts')
const{addtocart}=require('../controller/addcart');
const{getcart}=require('../controller/getcart');
const{putcart}=require('../controller/putcart');

const{deletecart}=require('../controller/deletecart');
const{register}=require("../controller/register");
const{Login}=require("../controller/login");
const router=express.Router();
router.use(express.json());

const jwt=require("jsonwebtoken");
require("dotenv").config();
const auth=(req,res,next) => {
    try {
   
        const token=req.body.token ||  req.header("Authorization").replace("Bearer ","");
        if(!token || token==undefined)
        {
          return  res.status(401).json({
                success:false,
                msg:"Token Missing"
            })
        }
        try
        {
         const payload=jwt.verify(token,process.env.secretekey) 
         req.user=payload;  
        } 
        catch (error) {
            return  res.status(401).json({
                success:false,
                msg:"Token Mismatch"
            })

        }
        next();
        
    } catch (error) {
        console.log(error.message)
        return  res.status(500).json({
            success:false,
            msg:"Internal server error",
            err:error.message +" try to provide token in header or body"
        })

        
    }
}
 router.post("/register",register);
router.post("/login",Login)

router.get("/products",getallproducts);
router.get("/products/:id",getproduct);
router.get("/cart",auth,getcart);

router.post("/cart",auth,addtocart);
router.put("/cart/:id",auth,putcart);
router.delete("/cart/:id",auth,deletecart);


module.exports=router;
