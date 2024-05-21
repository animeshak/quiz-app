import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})
userSchema.statics.signup = async function(name, password){
    
    const exists = await this.findOne({ name })

    if(exists){
        throw Error('Name is already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({name, password:hash})
    
    return user

}

export const User = new mongoose.model("User",userSchema)