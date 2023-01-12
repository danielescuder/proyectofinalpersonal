export function Integrantes(){
    let titulo2="Integrantes de Crew Peligrosos"
    let integrantes=[
        {
            id:1,
            nombre:"Henry Arteaga (Jke)",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/JKE-Arteaga-3.jpg?alt=media&token=3f398e8d-a6ee-43da-89f1-9c21d00550fd",
            biografia:"Es el fundador y líder de la agrupación artística Crew Peligrosos, colectivo de Hip Hop de la ciudad de Medellín que nace en 1999. EL colectivo sigue vigente y de destaca por sus cuatro elementos artísticos: Dee Jay, Breakin, Mc y Graffiti. Henry Arteaga, conocido como “El Jke”, incursionó en el Breakin y es coreógrafo de los Crew, lo cual le abrió paso al ámbito musical desde hace 11 años."
        },
        {
            id:2,
            nombre:"Cristian Montoya (Rat Race)",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/rat-race-640x280.jpg?alt=media&token=b4b8d5a9-fc24-440a-9ab2-3af3359bead0",
            biografia:"Cristian Montoya conocido como Rat The Beats o Rat Race es la banda sonora de #MEDEG, siempre indagando en nuestros, mares, selvas y bosques para Samplear sonidos originarios de nuestra madre Africa, mezclando la densidad de la calle generando atmosferas que solo se pueden sentir en el silencio de los problemas que esconde Medellín, la ciudad de la eterna primavera."
        },
        {
            id:2,
            nombre:" Sergio Ospina (P Flavor)",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/pflavor.jpg?alt=media&token=1f343a94-ffa3-4e97-9312-3f1e741deea8",
            biografia:"Maestro de ceremonias desde el 2005, mi labor como MC comienza cuando tuve la oportunidad de controlar el micrófono en los eventos de HipHop de nuestra comuna llamados HIP4, a partir de ese momento mi estudio en el arte de rapear fue mucho más serio debido a que también me gustaba practicar el breakin entonces no decidía en cual elemento desarrollar mi estilo y vocación."
        }
        
    ]
    return(
        <>
            <h1>{titulo2}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-1 g-5">
                    {
                        integrantes.map(function(integrante){
                            return(
                                <>  
                                    <div className="row my-5">
                                        <div className="col-6 card h-100 shadow ">
                                            <img src={integrante.foto} alt="img" className="h-100 img-fluid w-100"/>
                                        </div>
                                        <div className="col-6 text-center my-5">
                                            <h1>{integrante.nombre}</h1>
                                            <h3>{integrante.biografia}</h3>
                                        </div>
                                       
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}


{/* <>
            <h1>{titulo2}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-1 g-5">
                    {
                        integrantes.map(function(integrante){
                            return(
                                <>  
                                    <div className="row my-5">
                                        <div className="col-6 card h-100 shadow ">
                                            <img src={integrante.foto} alt="img" className="h-100 img-fluid w-100"/>
                                        </div>
                                        <div className="col-6 text-center my-5">
                                            <h1>{integrante.nombre}</h1>
                                            <h3>{integrante.biografia}</h3>
                                        </div>
                                       
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </> */}