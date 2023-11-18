const express = require("express")
const { registerUser, loginUser, getCurrentUser } = require("../controllers/userController")
const userRouter = express.Router()


userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/current', getCurrentUser)

module.exports = userRouter