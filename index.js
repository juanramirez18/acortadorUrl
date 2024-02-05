import express from "express";
import router from "./routes/index.js"
import bodyParser from "body-parser"
import db from "./config/db.js";


const app = express()
app.set('view engine', 'pug')
app.use(express.static("public"))
const port =  process.env.PORT || 4000
db()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, ()=>{
    console.log("Server online in port", port)
})



app.use("/", router)