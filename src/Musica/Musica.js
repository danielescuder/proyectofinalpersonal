import { serviciosCancionesTop } from "../services/serviciosCanciones"
import { useState,useEffect } from "react"

export function Musica(){

    //usando el hook useState ´para almacenar la respuesta
    //del api de forma global
    const[canciones,setCaciones]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    // usando el hook useEffect para limitar el consumo
    //del api a una soloa vez
    useEffect(function(){

        serviciosCancionesTop().then(function(respuesta){
            setCaciones(respuesta)
            setEstadoCarga(false)
        })

    },[])

    //render del componente:

    if(estadoCarga==true){

        return(
            <>
                <h2>Estamos cargando las canciones</h2>
            </>
        )

    }else{
        
        return(
            <>

                <h2>canciones de la banda</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-5">
                        {
                            canciones.tracks.map(function(cancion){
                                console.log(cancion)
                                 return(
                                    
                                    <div className="card h-100 shadow">
                                        <h1>{cancion.name}</h1>
                                        <audio controls src={cancion.preview_url}></audio>
                                        <img src={cancion.album.images[0].url}></img>
                                        <h5>popularidad: {cancion.popularity}</h5>
                                    </div>
                            
                                    )
                            })
                        }
                    </div>
                </div>
            </>
        )

    }

    
}