const mongoose= require("mongoose")



//schema
const userSchema= new mongoose.Schema({
    firstName:{
    type:String,
    required:true
    },
    lastName:{
    type:String,
    },
    gender:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    jobTitle:{
        type:String
    },
    mobile:{
        type:String  
    },
    password:{
        type:String  
    }
 },{timestamps:true})





 //model

 const User = mongoose.model("user",userSchema); 

module.exports=User;



