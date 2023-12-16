const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler (async (req, res) => {

    // Deconstruct attributes/fields from request body
    const {name, email, password} = req.body;

    // Check for user's input
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please add all fields.")
    }

    // Check if same info is already exists
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash password using bcryptjs
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
})

module.exports = {
    registerUser,
}