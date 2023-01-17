import { generartoken } from "./servicioToken"

export async function serviciosCancionesTop(){
    //1.pa donde vas 
    //escribir la url del servicio del api

    let token=await generartoken()

    const URL="https://api.spotify.com/v1/artists/0Coet47KeEkkmyD64KeW2g/top-tracks?market=us"
    //2.que operacion vas a hacer en la base de datos 
    //confirgurar la peticion de envio hacia el servidor
    const PETICION={
        method:"GET",
        headers:{Authorization:token}
    }
    //3.nos vamos para el restaurante
    //consumimos el api
    
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return(canciones)
}