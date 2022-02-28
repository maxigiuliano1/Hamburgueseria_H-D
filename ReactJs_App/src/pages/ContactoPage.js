import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Main.css';
const ContactoPage = (props) => {
    return (
        <main>
            <div>
                <img src="images/seccion-contacto.png" width="100%" alt="Imagen de una hamburguesa y hot-dog"></img>
            </div>
            <br/>
            <div>
                <div className="container d-flex flex-column justify-content-center">
                    <h2 className="d-flex justify-content-center"><b>CONTACTO</b></h2>
                </div>

                <div className="d-flex container flex-column">
                    <h3>
                        ¿Querés contactarnos?
                    </h3>
                    <br/>
                    <p>
                        Envíanos un mensaje si tenes preguntas o comentarios sobre B&D.
                    </p>
                </div>

                <div className="container d-flex justify-content-center">
                    <form method="" action="" className="form-group contacto">
                        <label>Nombre y Apellido:</label><br/>
                        <input type="text" placeholder="Nombre y Apellido"/>
                        <br/>
                        <label>Asunto:</label><br/>
                        <input type="text" placeholder="Asunto"/>
                        <br/>
                        <label>Email:</label><br/>
                        <input type="email" placeholder="Email"/>
                        <br/><br/>
                        <textarea rows="5"></textarea>
                        <br/>
                        <br/>
                        <input className="btn btn-danger container" type="submit" value="Enviar"/>
                    </form>
                </div>

                <div className="d-flex justify-content-center">
                    <img width="20%" src="images/picante.png" alt="imagen del pimiento centrado"/>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;