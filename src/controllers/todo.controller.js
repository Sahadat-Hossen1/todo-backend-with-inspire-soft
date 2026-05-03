import Todo from "../models/todo.model.js";
// import { todoRouter } from '.';

//create todo
const createTodo=async(req,res)=>{
    try {
      const data=  await Todo.create(req.body);
        res.status(201).json({
            success:true,
            message:"todo created successfully",
            data
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
//get all todos
const getTodos=async(req,res)=>{
    try{
    const filters={}

    if(req.query.isCompleted !== undefined){
        filters.isCompleted=req.query.isCompleted === "true"
    }
        const todos=await Todo.find(filters);
        res.status(200).json({
            success:true,
            todos
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
//get todo
const getTodo=async (req,res)=>{
   try{
     const _id=req.params._id;
    const todo =await Todo.findById(_id);
    if(!todo){
        return res.status(404).json({
            success:false,
            message:"todo not found"
        })
    }
    res.status(200).json({
        success:true,
        todo
    })
   }catch(err){
    res.status(500).json({
        success:false,
        message:err.message
    })
   }
}
// update todo
const updateTodo=async(req,res)=>{
    try {
        const _id=req.params._id;
        const UpdatedTodo=req.body;
        const todo= await Todo.findByIdAndUpdate(_id,UpdatedTodo,{new:true})
        res.status(200).json({
            success:true,
            message:"todo updated successfully",
            todo
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
//  delete todoRouter
const deleteTodo=async(req,res)=>{
    try {
        const _id=req.params._id;
        await Todo.findByIdAndDelete(_id);
        res.status(200).json({
            success:true,
            message:"todo deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export {createTodo,getTodos,getTodo,updateTodo,deleteTodo}