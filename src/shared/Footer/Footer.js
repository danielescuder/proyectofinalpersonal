import './Footer.css'
export function Footer(){
    return(
        <footer>
            <div className="container-fluid ">
                <div className="row p-5 pie ">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/logo_mc.png?alt=media&            token=7c74c5d0-03ce-423d-9f6d-3e0224d5fef7" alt="foto" className="img-fluid w-10"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <h2 className="fw-bold">SOBRE LA BANDA</h2>
                        <h4>4 escuelas</h4>
                        <h2 className="fw-bold">SOBRE LA BANDA</h2>
                        <h4>4 escuelas</h4>
                    </div>
                    <div className="col-12 col-md-4">
                    <i className="bi bi-instagram fuente me-5"></i>
                    <i className="bi bi-tiktok fuente me-5"></i>
                    <i className="bi bi-facebook fuente me-5"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}