require('dotenv').config();
const express = require("express");
const app = express();
const userRouter = require('./routes/user');

require('./db');

app.use(express.json());
app.use("/api/users",userRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to port 5000");
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server started at 5000");
});