import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Main.css';
const NovedadesPage = (props) => {
    return (
        <main>
            <img src="images/seccion-novedades.png" width="100%" height="600" alt="Imagen de una hamburguesa y hot-dog"/>
            <br/>
            <div>
                <div className="container d-flex flex-column justify-content-center">
                    <h2 className="d-flex justify-content-center"><b>NOVEDADES</b></h2>
                </div>

                <div className="d-flex justify-content-center">
                    <img width="20%" src="images/picante.png" alt="imagen del pimiento centrado"/>
                </div>
            </div>
        </main>
    );
}

export default NovedadesPage;