import {Question} from "../model/ques-model.js"
import { User } from "../model/users-model.js"

export const getques = async(req,res)=>{
    try {
        const quesData = await Question.find()
        if(!quesData){
            return res.status(400).json({msg:"Data not found"})
        }
        res.status(200).json(quesData);
    } catch (error) {
        res.status(400).json({error: error})
    }
}

export const addques = async(req,res)=>{
    try {
        const quesdata = new Question(req.body)

        if(!quesdata){
            return res.status(404).json({msg:"Data Not Found"})
        }

        const saveData = await quesdata.save()
        res.status(200).json(saveData)

    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const adduser = async(req,res)=>{
    try {
        const userData = new User(req.body)

        if(!userData){
            return res.status(404).json({msg:"User Data Not Found"})
        }
        const saveData = await userData.save()
        res.status(200).json(saveData)  
        
    } catch (error) {
        res.status(500).json({error:error})
    }
}