import { serviciosCancionesTop } from "../services/serviciosCanciones"
export function Musica(){

    serviciosCancionesTop()
    return(
        <>
            <h1>Musica CARGANDO...</h1>
        </>
    )
}