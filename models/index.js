import mongoose from "mongoose";
import shortid from "shortid"

const AcortadorSchema = mongoose.Schema({
    urlOriginal:{
        type: String,
        require:true,
        lowercase: true,
        trim:true
    },
    urlCorta:{
       type: String
    }

})
AcortadorSchema.pre('save', async function(next){
    this.urlCorta = shortid.generate()
    next()
})



const Acortador = mongoose.model("Acortador", AcortadorSchema)

export default Acortador