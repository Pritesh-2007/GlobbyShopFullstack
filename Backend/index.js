const express=require("express");
const app=express();
const router=require("./routes/routes")
require("dotenv").config();
const port=process.env.PORT
var cors=require('cors');
app.use(cors({
    origin:"*",
}))
app.listen(port,()=>{
    console.log("Server is listening..");
})
const DBConnect=require("./config/databse");

DBConnect();

app.get("/home",(req,res)=>{
    res.status(200).json({
        success:true,
        msg:"Welcome to home",
    });
});

app.use("/base",router);