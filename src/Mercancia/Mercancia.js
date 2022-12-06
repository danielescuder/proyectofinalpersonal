export function Mercancia(){

    let titulo="Productos de la banda..."
    let Productos=[
        {
            nombre:"Camiseta Logo Costado",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/camiseta02.jpg?alt=media&token=cb77096e-9e0c-4de8-b414-3849a15ea883",
            precio:60000
        },
        {
            nombre:"Chompa Básica",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/chompa.jpg?alt=media&token=c808da55-18d9-436c-90f1-57e1e197d1db",
            precio:150000
        },
        {
            nombre:"Chompa Arapjuez 1999",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/chompa00.jpg?alt=media&token=decba937-18ad-4952-b5d5-c6c47a40e30e",
            precio:150000 
        },
        {
            nombre:"Chompa Medayork",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/chompa01.jpg?alt=media&token=2c7dadb3-fcac-48b4-a906-3a9caa3b6ceb",
            precio:120000 
        },
        {
            nombre:"Chompa Escudo 1999",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/chompa03.jpg?alt=media&token=803706ed-a1ee-46a3-b273-a68535cb0453",
            precio:150000 
        },
        {
            nombre:"Chompa Estrapgos",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/chompa04.jpg?alt=media&token=8ef9a743-ee56-4459-a6f9-43e3c660e21b",
            precio:150000 
        },
    ]
    return(
        <>
            <h1>{titulo}</h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-5">
                    {
                        Productos.map(function(producto){
                            return(
                                <>
                                    <div class="col">
                                        <div class="card h-100 shadow">
                                            <img src={producto.foto} alt="img" class="h-100 img-fluid w-100"/>
                                            <h1>{producto.nombre}</h1>
                                            <h3>{"$"+producto.precio}</h3>
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