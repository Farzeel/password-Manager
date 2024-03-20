import express from "express"
import { getFeedBack, sendFeedback } from "../controllers/feedback.controller.js"



const route  = express.Router()


route.route("/sendfeedback").post(sendFeedback)
route.route("/getfeedback").get(getFeedBack)



export default route