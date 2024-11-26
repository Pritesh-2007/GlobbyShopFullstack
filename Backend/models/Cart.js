const Module = require("module");
const mongoose=require("mongoose");

const cartshema=new mongoose.Schema({
    product_id:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    stock:{
        type:Number,
        require:true
    },
    thumbnail:{
        type:String,
        require:true
    },
    shippingInformation:{   
    type:String,
    require:true
    },
    quantity:{
        type:Number,
        require:true,
        default:1
    },
})
module.exports=mongoose.model("cart",cartshema);