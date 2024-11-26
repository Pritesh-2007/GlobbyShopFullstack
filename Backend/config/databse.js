const mongoose = require('mongoose');
require("dotenv").config();
const DBConnect=()=>{
   // const uri = "mongodb+srv://user123:user123@test-db.i2pkf.mongodb.net/mernstack";
     mongoose.connect(process.env.uri).then(()=>{
         console.log("Connection Successfull!");
     }).catch(
         (error)=>{
             console.log("could not connect",error);
         }
     );
 }
  module.exports=DBConnect;