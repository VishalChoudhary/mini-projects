const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//REGISTER
router.post('/register',async(req,res)=>{
    const {username, email, password} = req.body;

    try {
        //if user or username already exists
        const existingUser = await User.findOne({$or :[{username},{email}] });
        if(existingUser){
            return res.status(400).json({message: "User already exists!"});
        }

        //Hash password before saving to DB
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password:hashedPassword,
        });

        //save user in DB
        const savedUser = await newUser.save();
        const {password:_ , ...userData} = savedUser._doc;
        res.status(201).json(userData);
    } catch (error) {
        res.status(500).json(error);
    }
});

//LOGIN

router.post('/login',async(req,res)=>{
    const {username, password} = req.body;

    try {
        //find user in DB
         const user = await User.findOne({username});
        if(!user)
            return res.status(401).json("User Not Found!");

        //compare password using bcrypt
        const validPassword = await bcrypt.compare(password,user.password);
        if(!validPassword)
            return res.status(401).json("Wrong Credentials");

        const payLoad = {
            id: user._id,
            isAdmin: user.isAdmin,
        };

        const accessToken = jwt.sign(
            payLoad,
            process.env.JWT_SEC,
            {expiresIn: "3d"},
        );

        const {password:_, ...userData} = user._doc;
        res.status(201).json({...userData,accessToken});

    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;