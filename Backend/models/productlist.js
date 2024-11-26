const Module = require("module");
const mongoose=require("mongoose");

const productshema=new mongoose.Schema({
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
})

module.exports=mongoose.model("productlist",productshema);