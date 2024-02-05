import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const db = async() =>{
    try {
        const connect = await mongoose.connect(process.env.URL_DATA_BASE)
        console.log("conectado a la BD")
        
    } catch (error) {
        console.log(error)
    }
   
}

export default db