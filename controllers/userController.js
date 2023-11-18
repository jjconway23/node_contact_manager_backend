const asyncHandler = require('express-async-handler');

//@desc Register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res)=> {
    res.json({message: "Register the user"})
})

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req, res) => {
    res.json({message: "Login  user"})
})


//@desc Current user logged in
//@route GET /api/users/current
//@access private
const getCurrentUser = asyncHandler(async (req, res) => {
    res.json({message: "Current user"})
})

module.exports = {registerUser,loginUser,getCurrentUser}