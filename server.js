// const express= require("express");
// const colors = require("colors");
import express from "express";
import colors from "colors";
import dotenv from "dotenv"; 
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

// configure environment variables
dotenv.config(".");

// configure database
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth',authRoutes);

// rest APIs
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Our Site<h1/>');
});

// PORT
/* Angular: 4200, React: 3000, Node: 8000/8080*/ 
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.bgCyan.white);
});