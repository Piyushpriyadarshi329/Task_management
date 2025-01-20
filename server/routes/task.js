const express= require("express")
const User= require("./../models/user")
const {getTaskByIdHandler,getTaskHandler,deleteTaskHandler, patchTaskHandler, postTaskHandler, } = require("./../controllers/task")

const router= express.Router()



router.get("/",getTaskHandler)
router.get("/:id",getTaskByIdHandler)
router.patch("/:id",patchTaskHandler)
router.delete("/:id",deleteTaskHandler)
router.post("/",postTaskHandler)



module.exports=router
