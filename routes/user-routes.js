const express = require("express")
const userRouter = express.Router()

userRouter.post('/register', (req, res)=> {
    res.json({message: "Register the user"})
})

userRouter.post('/login', (req, res) => {
    res.json({message: "Login  user"})
})

userRouter.get('/current', (req, res) => {
    res.json({message: "Current user"})
})
module.exports = userRouter