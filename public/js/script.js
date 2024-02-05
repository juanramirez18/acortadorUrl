const formulario = document.querySelector('#agregar-url')
const divAlert = document.querySelector("#alerta")
const alerta = document.createElement('p')


formulario.addEventListener('submit', async e => {
    e.preventDefault();
    const {id} = e.target
    const urlOriginal = document.querySelector('#urlOriginal').value
    
    try {
        const respuesta = await fetch(e.target.action, {
            method: e.target.method,
            headers:{
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({urlOriginal})
        })
        const resultado = await respuesta.json()
        console.log(resultado)
        const {mensaje, error} = resultado
        alerta.setAttribute("id", "parrafo")
        
        console.log(mensaje.length)
        if(mensaje.length > 0){
            alerta.classList.add("mensaje-url")
            alerta.innerHTML = `Para vistar el sitio dale click al siguiente  
            <a href="http://localhost:4000/${resultado.url}
            ">enlace<a/> `
            divAlert.appendChild(alerta)
            return

        }
    } catch (error) {
        console.log(error) 
    }
});

const urlParams = new URLSearchParams(window.location.search)
const url = urlParams.has("error")
if(url){
    
    alerta.classList.add("error")
    alerta.textContent = "Url no valida"
    divAlert.appendChild(alerta)

    
}



