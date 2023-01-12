export async function serviciosCancionesTop(){
    //1.pa donde vas 
    //escribir la url del servicio del api

    const URL="https://api.spotify.com/v1/artists/0Coet47KeEkkmyD64KeW2g/top-tracks?market=us"
    //2.que operacion vas a hacer en la base de datos 
    //confirgurar la peticion de envio hacia el servidor
    const PETICION={
        method:"GET",
        headers:{Authorization:" Bearer BQDj_OXpG8mYVO8wPa-SWLZFSQ9Be-AS1oKTaE0f_omr1U7KC_g7DnVHTsJ8_DPYuEl4pBTMAjxuSMCsEkJq9VXsftJ9Q1TjBnECcboswlcfwzcKSRnCFM5yjBF20oXT5t1HpwudXAZR8RjlXu9ijWdih1_UxVqR2UfYW2e4lUJEJ1MAkdMqQ5s_TEzNZtYJjAI"}
    }
    //3.nos vamos para el restaurante
    //consumimos el api
    
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return(canciones)
}