import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Main.css';

const HomePage = (props) => {
    return (
        <main>
            <div className="">
                <img src="images/inicio.png" width="100%" alt="Imagen de una hamburguesa y hot-dog"></img>
                <div className="textoSobreImagen">
                    <p className="textoAnimado"><b>HAMBURGUESAS Y HOT-DOGS DE PRIMER NIVEL!</b></p>
                </div>
            </div>
            <h2 className="d-flex justify-content-center"><b>NUESTROS PRODUCTOS DESTACADOS</b></h2>
            <div className="d-flex justify-content-between contenedor">
                <div className="card">
                    <img src="images/hamburguesa1.png" alt="Avatar" width="100%"></img>
                    <div className="container">
                    <h4><b>APPLEWOOD BACON</b></h4>
                        Applewood Bacon, Pickles de Pepinos, Cheddar y Mayonesa H&D.
                    </div>
                </div> 
        
                <div className="card">
                    <img src="images/hotdog1.png" alt="Avatar" width="100%"></img>
                    <div className="container">
                    <h4><b>HOT DOG GUACAMOLE</b></h4>
                        Guacamole, Cheddar y Mayonesa H&D.
                    </div>
                </div> 
        
                <div className="card">
                    <img src="images/hamburguesa2.png" alt="Avatar" width="100%"></img>
                    <div className="container">
                    <h4><b>QUESO AZUL</b></h4>                  
                        Queso Azul, Cheddar, Cebolla caramelizada y Mayonesa H&D
                    </div>
                </div> 
            </div>
            <br/>
            <h2 className="d-flex justify-content-center"><b>NUESTROS TESTIMONIOS</b></h2>
            <div className="d-flex flex-column justify-content-start container">
                <div className="media contenedorMenu">
                    <img src="..." className="mr-3" alt="..."></img>
                    <div className="media-body info">
                    <h4 className="mt-0">Media heading</h4>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>
        
                <div className="contenedorMenu media">
                    <img src="..." className="mr-3" alt="..."></img>
                    <div className="media-body info">
                    <h4 className="mt-0">Media heading</h4>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>
        
                <div className="contenedorMenu media">
                    <img src="..." className="mr-3" alt="..."></img>
                    <div className="media-body info">
                    <h4 className="mt-0">Media heading</h4>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>
        
                <div className="contenedorMenu media">
                    <img src="..." className="mr-3" alt="..."></img>
                    <div className="media-body info">
                    <h4 className="mt-0">Media heading</h4>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;