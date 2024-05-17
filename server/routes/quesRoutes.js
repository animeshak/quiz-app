import express from "express"
import {getques,addques, adduser} from "../controller/quesController.js";

const route = express.Router()

route.get("/test",getques)
route.post("/add",addques)
route.post("/adduser",adduser)


export default route;