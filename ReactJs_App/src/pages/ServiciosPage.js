import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Main.css';
const ServiciosPage = (props) => {
    return (
        <main>
            <header>
                <img src="images/servicio.png" width="100%" alt="Imagen de una hamburguesa y hot-dog"/>
            </header>
            <br/>
            <div>
                <div className="container d-flex flex-column">
                    <h2 className="d-flex justify-content-center"><b>NUESTRO SERVICIO</b></h2>
                    <h3><b>BURGERS:</b></h3>
                    <p>
                    En marzo de 2017 presentamos las hamburguesas de B&D. 
                    2 medallones de 100 gr de carne Aberdeen Angus de pastura y con un diferencial, hechas a la parrilla, lo que le da un sabor único. 
                    Además, fuimos los primeros en Argentina en hacer pan de papa, que se elabora y hornea en el momento. 
                    En poco tiempo pasaron a ser un éxito, transformándose en el producto más vendido de B&D. 
                    Y pasamos de ser un lugar de hot dogs, a ser una hamburguesería que también vende hot dogs! 
                    Un año después, BurgerFacts nos eligió hamburguesería del año en los #BurgerFactsAwards. 
                    Hace un año, también sumamos hamburguesas de falafel.
                    <br/>
                    </p>
                    <h3><b>HOT DOGS:</b></h3>
                    <p>
                    Nuestros hot dogs, hechos con salchichas de elaboración propia, se hacen a la parrilla. 
                    Eso le da un sabor distinto, que no vas a encontrar en otro lugar. 
                    Se pueden pedir las sugerencias de hot dogs, o armarse el que uno quiera, eligiendo entre 10 ingredientes fríos, como guacamole, chucrut, relish, sweet chili, y calientes como chili, panceta crocante y cheddar fundido. 
                    Y los que no quieren comer carne, también pueden elegir nuestra salchicha de falafel.
                    <br/>
                    </p>
                    <h3><b>BEBIDAS:</b></h3>
                    <p>
                    Nuestra limonada de menta y jengibre, que fue un éxito desde nuestros primeros días. 
                    También tenemos cerveza tirada Grolsch, Miller, Imperial y Kunstmann. 
                    </p>
                </div>

                <div className="d-flex justify-content-center">
                    <img width="20%" src="images/icono-hotdog.png" alt="imagen del pimiento centrado"/>
                </div>
            </div>
            <br/><br/>
        </main>
    );
}

export default ServiciosPage;