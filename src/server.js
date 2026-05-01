
// import app from "./app";
import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config()
const port=process.env.PORT || 3000
// call db
connectDB();
app.listen(port,()=>{
    console.log("server working on port", port);
    
})