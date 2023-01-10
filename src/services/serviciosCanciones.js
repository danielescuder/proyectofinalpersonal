export async function serviciosCancionesTop(){
    //1.pa donde vas 
    //escribir la url del servicio del api

    const URL="https://api.spotify.com/v1/artists/0Coet47KeEkkmyD64KeW2g/top-tracks?market=us"
    //2.que operacion vas a hacer en la base de datos 
    //confirgurar la peticion de envio hacia el servidor
    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQCsgvVW3VhV_ShREKmwMjjXTi8zpAaxbweW32it9wPusx1heZCCPetvTKoQC4rWuaBe23xzqvlKcd8Ksx1gol8NuCEls0OKf71KYw5pojZPPxustRlKmAGZB3daA3dE-k9wLostSQt_7dEH13A_1R59UNbWygh1bATc6duqvYZUxbqnRkKnrVZISFW_E_JqplE"}
    }
    //3.nos vamos pal restaurante
    //consumimos el api
    
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    console.log(canciones)
}