// const User = require("../model/users-model.js")
import {User} from '../model/users-model.js';

export const signupUser = async(req,res) =>{
    const {name, password} = req.body
    try {
        const user = await User.signup(name,password)
        
        res.status(200).json({name, user})

    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

// module.exports = {signupUser}