import mongoose from "mongoose"
const quesSchema = new mongoose.Schema({
    quizname:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    opt1:{
        type:String,
        required:true
    },
    opt2:{
        type:String,
        required:true
    },
    opt3:{
        type:String,
        required:true
    },
    opt4:{
        type:String,
        required:true
    },
    ans:{
        type:String,
        required:true
    }
}) 

export const Question = new mongoose.model("Question", quesSchema)