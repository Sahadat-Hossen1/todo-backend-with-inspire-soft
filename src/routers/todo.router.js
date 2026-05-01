import express from "express"
import { createTodo,getTodos,getTodo,updateTodo,deleteTodo } from "../controllers/todo.controller.js"
const router=express.Router()
router.post("/",createTodo)
router.get("/",getTodos)
router.get("/:_id",getTodo)
router.put("/:_id",updateTodo)
router.delete("/:_id",deleteTodo)
export default router;