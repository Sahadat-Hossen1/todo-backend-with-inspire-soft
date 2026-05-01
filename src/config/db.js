import mongoose from "mongoose";
export default async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected");
    }catch(err){
        console.log("database connection failed", err.message);
    }
}