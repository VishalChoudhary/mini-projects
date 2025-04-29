require('dotenv').config();
const express = require("express");
const app = express();
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const cors = require('cors');

require('./db');

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.use("/api/users",userRouter);
app.use("/api/auth",authRouter);

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server started at 5000");
});