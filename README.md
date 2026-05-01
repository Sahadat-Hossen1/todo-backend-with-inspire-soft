# Todo Backend with Inspire Soft

## Live Demo
- Live Link: https://todo-backend-with-inspire-soft.onrender.com/api/todos

> Replace the link above with your actual deployed backend URL once available.

## Project Overview
This repository contains the backend for a Todo application built with Express.js, Mongoose, and MongoDB. It provides a RESTful API for managing todos, including create, read, update, and delete operations.

## Features
- REST API for Todo management
- Create a new todo item
- Retrieve all todo items
- Retrieve a single todo item by ID
- Update an existing todo item
- Delete a todo item
- MongoDB persistence with Mongoose
- JSON request handling with Express
- Built-in error responses for missing or invalid data

## API Endpoints
- `POST /api/todos` - Create a new todo
- `GET /api/todos` - Get all todos
- `GET /api/todos/:_id` - Get a todo by ID
- `PUT /api/todos/:_id` - Update a todo by ID
- `DELETE /api/todos/:_id` - Delete a todo by ID

## Todo Schema
- `title` (String, required, unique)
- `description` (String, optional)
- `isCompleted` (Boolean, default: false)
- `createdAt` / `updatedAt` timestamps

## Getting Started
1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend folder with:
   ```env
   PORT=3000
   MONGO_URL=your_mongodb_connection_string
   ```
4. Start the server
   ```bash
   npm run dev
   ```

## Notes
- The server listens on `process.env.PORT` or `3000` by default.
- Update the live demo link above after deployment.
