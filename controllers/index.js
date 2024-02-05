import Acortador from "../models/index.js";

const getMethod = (req, res) => {
    res.render("index")   
};

const enviarUrl = async(req, res, next) =>{
    let respuesta;
    try {
        const {urlOriginal} = req.body
        const writeUrl = await new Acortador({
        urlOriginal 
    })
    const createUrl = await writeUrl.save()
        console.log(writeUrl)
        respuesta = {
            mensaje: "Almacenado correctamente",
            url: createUrl.urlCorta
        }
    
    } catch (error) {
        console.log(error)
        respuesta = {
            error: "Hubo un error"
        }
    }
    res.json(respuesta)
    next()
};

const getUrl = async(req, res, next)=>{
    console.log("desde getUrl")
    const {url} = req.params
    try {
        const urlOriginal = await Acortador.findOne({urlCorta:url})
        if(!urlOriginal){
            console.log("desde try if")
            res.status(404).redirect("http://localhost:4000/?error=404")
            return
        }
        res.redirect(urlOriginal.urlOriginal)

    } catch (error) {
        console.log("desde catch")
        // res.redirect("http://localhost:4000/?error=404")
        res.status(404).json({message:"URL NO VALID!"}).redirect("http://localhost:4000/?error=404")   
    }
}

export {
    getMethod,
    enviarUrl,
    getUrl
}