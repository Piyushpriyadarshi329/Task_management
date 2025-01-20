const User = require("./../models/user")



const getUserHandler= async(req,res)=>{
        let user=await   User.find();
        res.status(200).json(user)
}

const getUserByIdHandler= async(req,res)=>{
    let user=await   User.find({_id:req.params.id});
    res.status(200).json(user)
}

const postUserHandler= async(req,res)=>{
    let user=await   User.create(req.body);
    res.status(200).json(user)
}

const deleteUserHandler= async(req,res)=>{
    let user=await   User.findByIdAndDelete(req.params.id);
    res.status(200).json(user)
}


const patchUserHandler= async(req,res)=>{
    let user=await   User.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json(user)
}

const loginHandler= async(req,res)=>{
    let user=await   User.find({email:req.params.email,password:req.params.password});
    res.status(200).json(user)
}



module.exports={getUserHandler,postUserHandler,deleteUserHandler,patchUserHandler,getUserByIdHandler,loginHandler}





