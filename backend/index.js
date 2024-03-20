import dotenv from "dotenv"
dotenv.config();

import cors from "cors"
import express from "express"
import connectDb from "./src/db/db.js"
import path from "path"


const app  =express()

const port = process.env.PORT || 6000
const __dirname = path.resolve();

app.use(cors({
    origin:[process.env.CORS_ORIGIN],
   
}))
app.use(express.json({limit:"16kb"}));
app.use(express.static("public"))


connectDb().then(()=>{
    app.listen(port, ()=>{
        console.log("App is listening on port ", port)
    })
})
.catch((err)=>{
     console.log("Database connection failed", err)
})
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// ROUTES IMPORT
import feedbackRoute from "./src/routes/feedback.routes.js";



// ROUTE DECLARATION
app.use("/api/v1/feedback", feedbackRoute)

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
