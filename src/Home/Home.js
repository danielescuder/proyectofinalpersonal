import './Home.css'
import { Footer } from '../shared/Footer/Footer'
export function Home(){
    return(
        <>
            <section>
                <div className="banner">

                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2>Crew Peligrosos</h2>
                            <p>En Aranjuez hay un combo de peligrosos. Hay que tener cuidado porque para ellos no hay nada imposible en la vida y estan cambiando la forma de pensar en esta ciudad. Ellos son los Crew Peligrosos, un proyecto que nace en medio de la violencia, pero su reacción no es violenta. Es creativa. Transformadora.

                            Precisamente, cuando la violencia se agudiza, cuando a su parche lo atacan o cuando en su barrio siguen cayendo más y más personas, ellos en lugar de esconderse, salen a la calle a bailar, a cantarle a la vida, a enseñarle a las nuevas generaciones cual es la salida y que la propuesta está en el arte, la cultura. En el poder de la música como una forma de atacar y hacer resistencia a la violencia.

                            El proyecto de Crew Peligrosos nació como una alternativa artística para la violencia en la comuna 4 de Medellín, liderada por Henry Arteaga 'JKE' (Jeque) MC. Se dieron a conocer en emisoras con su tema 'Medayork' y ahora buscan conquistar el territorio nacional con 'Mera Vuelta'. La canción fue producida por Toy Selectah y es un adelanto de los que será su primer álbum de estudio.</p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/peligrosos.jpg?alt=media&token=ccc70ee8-118d-4c89-a94e-f6b978f2a57a" alt=""></img>

                        </div>
                        <div className="col-12 col-md-4">
                            <i className="bi bi-vinyl-fill fs-1">
                                <div>
                                    <h1>Medellín</h1>
                                    <h2>dic 2</h2>
                                </div>
                            </i>
                            <i className="bi bi-vinyl-fill fs-1"></i>
                            <i className="bi bi-vinyl-fill fs-1"></i>
                            <i className="bi bi-vinyl-fill fs-1"></i>
                        </div>
                        <div>
                            
                        </div>

                    </div>

                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1>NOTICIAS</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/crew1.jpg?alt=media&token=a32b2df6-db4d-4e97-9e30-5e0cf1420910" alt="" className="img-fluid w-100"/>
                        <p>"El Concierto Radiónica es lo más importante del año" Crew Peligrosos.
                            Este crew trabaja desde 1999 en el barrio Aranjuez de Medellín, su casa, el lugar que los inspira no solo a llevar su propesta de hip hop fuera de esa ciudad, sino que los impulsa a la búsqueda de alternativas artísticas contra la violencia.</p>
                        </div>
                        <div className="col-12 col-md-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/marcapasos.jpg?alt=media&token=5429c718-f4d6-419a-8d3c-bf6a4174481d" alt="" className="img-fluid w-100"/>
                        <p>15 de Marzo lanzamiento de Marcapasos, álbum sinfónico de los #CrewPeligrosos con un gran espectáculo en el 
                            @TMETROPOLITANO bajo la dirección musical @juanchosargentocon @Filarmed</p>
                        </div>
                        <div className="col-12 col-md-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/bombo.jpg?alt=media&token=e372b777-d653-4d11-8e57-de05376e6a20" alt="" className="img-fluid w-100"/>
                        <p>Luego de estar haciendo “Estrapgos” en Bogotá, la nave de Crew Peligrosos en el 2015 extrajo al legendario Mad Lion desde New York para vivir la experiencia del barrio Aranjuez en Medellín. “Money don´t change me”, como dice el coro y es titulada esta canción, revive los momentos que han pasado los Crew en sus giras, la manera como viven el barrio y como sus logros los conectan más con su comunidad y el parche que los rodea.

 

La gran riqueza que tienen estos dos artistas es su amor por el barrio, por sus familias y por la música, algo que el dinero no cambiará jamás.</p>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}