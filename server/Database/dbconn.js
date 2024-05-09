import mongoose from 'mongoose';
import {db_name} from '../constants.js'; 

const connectDB = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://animesh2001:animesh2001@cluster0.i4gwjte.mongodb.net/${db_name}`)
        console.log(`MongoDB Connected !!`);
    }
    catch(error){
        console.log("MongoDB Connection Failed :",error)
        process.exit(1)
    }

}

export default connectDB