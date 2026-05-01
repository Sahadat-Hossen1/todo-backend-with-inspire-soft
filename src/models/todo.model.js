import mongoose from "mongoose";
const TodoSchema= new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        // required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
export default mongoose.model("Todo",TodoSchema);