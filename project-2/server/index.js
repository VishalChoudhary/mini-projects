const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const stripeRoute = require('./routes/stripe');

dotenv.config();
const app = express();

//middlewares
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

//routes
app.use('/api/checkout/',stripeRoute);

//server start
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});