const User = require('../models/User');
const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} = require('./verifyToken');

const router = require('express').Router();

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, async(req,res)=>{
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password,salt);
    }
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {new:true}
        );
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async(req,res)=>{
    try {
        //returning the deleted user
        await User.findByIdAndDelete(req.params.id);
        rs.status(200).json("User has been successfully deleted...");
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET SINGLE USERS
router.get("/find/:id", verifyTokenAndAdmin , async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password:_, ...userData} = user._doc;
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET ALL USERS
router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    const query = req.query.new;
    try {
        const users = query
        ? await User.find().sort({_id: -1}).limit(2)
        : await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;