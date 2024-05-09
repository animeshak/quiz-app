import express from "express"
import {getques,addques} from "../controller/quesController.js";

const route = express.Router()

route.get("/test",getques)
route.post("/add",addques)


export default route;