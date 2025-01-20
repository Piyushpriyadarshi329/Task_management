const Task = require("./../models/task")



const getTaskHandler= async(req,res)=>{
        let user=await   Task.find();
        res.status(200).json(user)
}

const getTaskByIdHandler= async(req,res)=>{
    let user=await   Task.find({_id:req.params.id});
    res.status(200).json(user)
}

const postTaskHandler= async(req,res)=>{
    let user=await   Task.create(req.body);
    res.status(200).json(user)
}

const deleteTaskHandler= async(req,res)=>{
    let user=await   Task.findByIdAndDelete(req.params.id);
    res.status(200).json(user)
}


const patchTaskHandler= async(req,res)=>{
    let user=await   Task.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json(user)
}


module.exports={getTaskHandler,getTaskByIdHandler,postTaskHandler,deleteTaskHandler,patchTaskHandler}





