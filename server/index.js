import connectDB from "./Database/dbconn.js";
import dotenv from "dotenv"
import { app } from "./app.js";
import { Question } from "./model/ques-model.js";
import route from "./routes/quesRoutes.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000, ()=>{
        console.log(`Listening to Port 8000 /${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection Failed", err);
})
app.use("/quiz",route)