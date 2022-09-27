let URI="https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US";
let buscar =document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()
    let artista=document.getElementById("artista").value 
    console.log(artista)
    URI=`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`
    const TOKEN="Bearer BQApia5y8Klwi_aQQ3c2jcgIGh5JEHQmeW7PwnSfV2gjqe6Lp8TJtuECsZI3xsojKAFXjksNlMCOz1RdgdrdAmD7lUKgYT-147saEPKww3B9Cwa892GJ-urFTNETzWHJPSpi9ALrq1HzXE3B39JetRVWd91LlrwEMN5X2mlZPfq2NpwO2DY"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN},
    }
    fetch(URI,PETICION)
    .then(function(respuesta){
    return respuesta.json() //garantizo formato JSON
    })
.then(function(respuesta){
    console.log(respuesta) //Hago lo que quiera con respuesta
    console.log(respuesta.tracks) //accedo a un atributo de la respuesta

    //recorrer un arreglo
    let fila=document.getElementById("fila")
    fila.innerHTML = ""
    respuesta.tracks.forEach(function(cancion){
        /*console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)
        console.log(cancion.album.name)
        console.log(cancion.album.release_date)*/
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let imagen=document.createElement("img")
        imagen.classList.add("h-100","w-100","img-fluid")
        imagen.src=cancion.album.images[0].url

        let nombre=document.createElement("p")
        nombre.textContent=cancion.name  

        //PADRES E HIJOS
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(audio)
        tarjeta.appendChild(nombre)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)


       





    })


})
.catch(function(respuestaError){
    console.log(respuestaError)
})
})




//RECETA PARA CONSUMIR APIS CON JS PURO

//1. si yo quiero consumir un api
//debo saber PARA DONDE IR Y A QUE SERVICIO....
//DEBO CONFIGURAR LA URI


//2. Configuro datos Especiales o DE CONTROL en el servidor


//3. Configuro la peticion
//NOTA: SOLO POST Y PUT CONFIGURAN BODY
//PARA JS LA PETICION ES UN OBJETO


//4. ARRANQUE PUES MIJO
//CONSUMA EL API
