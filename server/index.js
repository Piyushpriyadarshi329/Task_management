const express= require("express")
const userRouter= require("./routes/user")
const {mongodbConnection }= require("./config/connection")




mongodbConnection("mongodb://127.0.0.1:27017/taskmanagementDB")


const app= express();
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use("/api/user",userRouter)



app.listen(4001,()=>{
    console.log("listen at 4001 port")
})