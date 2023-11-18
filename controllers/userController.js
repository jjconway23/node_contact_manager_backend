const asyncHandler = require('express-async-handler');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

//@desc Register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res)=> {
    const {username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory.")
    }
    const userAvailble = await User.findOne({email})
    if(userAvailble){
        res.status(400)
        throw new Error("User already exist.")
    }
    //Create Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed pw :" ,hashedPassword)

    const newUser = await User.create({
        username,
        email,
        password: hashedPassword
    })
    console.log("User Created: " + newUser);
    if(newUser){
        res.status(201).json({_id: newUser.id, email: newUser.email})
    }else {
        res.status(400);
        throw new Error("User data not valid, please try again!")
    }
    res.json({message: "Register the user"})
})

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400)
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({email})
    res.json({message: "Login  user"})
})


//@desc Current user logged in
//@route GET /api/users/current
//@access private
const getCurrentUser = asyncHandler(async (req, res) => {
    res.json({message: "Current user"})
})

module.exports = {registerUser,loginUser,getCurrentUser}