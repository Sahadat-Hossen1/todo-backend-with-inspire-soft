import express from "express"
import dotenv from "dotenv";
import todoRouter from "./routers/todo.router.js";
dotenv.config()
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).send("todos server working ")

})
// todo routes
app.use("/api/todos",todoRouter)
// global error handler
export default app;