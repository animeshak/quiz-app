import express from "express"
import {getques,addques} from "../controller/quesController.js";
import { signupUser } from "../controller/userController.js";

const route = express.Router()

route.get("/test",getques)
route.post("/add",addques)
route.post("/adduser",signupUser)


export default route;