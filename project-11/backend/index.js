const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware to parse JSON data from incoming requests
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

//POST endpoint to recieve data from frontend
app.post('/api/data',(req,res)=>{
    // Destructure name and email from request body
    const {name,email} = req.body;
    console.log("Recieved data from frontend: ",name,email);

    // Mock response: Return a static list of users including the one sent
    const users = [
        {id:1, name, email},
        {id:2, name: "John", email: "john@example.com"},
        {id:3, name: "Dep", email: "dep@example.com"}
    ];

    //send user list back as json
    res.json(users);
});

//start server
app.listen(PORT,()=>
    console.log(`Server running on ${PORT}`)
);