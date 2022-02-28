import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Main.css';
const GaleriaPage = (props) => {
    return (
        <main>
            <header>
                <img src="images/seccion-menu.png" width="100%" alt="Imagen de una hamburguesa y hot-dog"/>
                <div class="d-flex justify-content-center botonSobreImagen">
                    <a href="pdf/Menu.pdf" target="_blank">
                    <button class="btn btn-info botonMenu" type="button">VER MENU COMPLETO</button> 
                    </a> 
                </div>
            </header>
            <br/>
            <div>
                <div class="container d-flex flex-column justify-content-center">
                    <h2 class="d-flex justify-content-center"><b>NUESTRAS HAMBURGUESAS</b></h2>
                    <div class="contenedorMenu">
                        <img src="images/img-menu/simple-burger-cheddar.png" width="200"/>
                        <div class="info">
                            <h4><b>Simple Burger Cheddar</b></h4>
                            <p><b>$650</b></p>
                            <p>Medallon de carne de 160grs, 3 fetas de cheddar y mayonesa H&D + Papas fritas</p>
                        </div>
                    </div>
                    <div class="contenedorMenu">
                        <img src="images/img-menu/triple-burger-bm.png" width="200"/>
                        <div class="info">
                            <h4><b>Triple Burger BM</b></h4>
                            <p><b>$1100</b></p>
                            <p>Triple carne, cheddar, lechuga, pickles de pepino y aderezo BM + Papas fritas</p>
                        </div>
                    </div>
                    <div class="contenedorMenu">
                        <img src="images/img-menu/triple-burger-cebolla-colorada.png" width="200"/>
                        <div class="info">
                            <h4><b>Triple Burger Cebolla Colorada</b></h4>
                            <p><b>$1120</b></p>
                            <p>Triple carne, cebolla morada, cheddar, tomate, lechuga, applewood bacon, pickles de pepino y mayonesa DOGG + Papas fritas</p>
                        </div>
                    </div>
                    <div class="contenedorMenu">
                        <img src="images/img-menu/triple-burger-cheddar-x5.png" width="200"/>
                        <div class="info">
                            <h4><b>Triple Burger Cheddar X5</b></h4>
                            <p><b>$1100</b></p>
                            <p>Triple carne, 5 fetas de cheddar, cebolla cruda y mayonesa DOGG envuelta en papel aluminio + Papas fritas</p>
                        </div>
                    </div>
                    <div class="contenedorMenu">
                        <img src="images/img-menu/triple-burger-pan-con-panceta.png" width="200"/>
                        <div class="info">
                            <h4><b>Triple Burger Pan con Panceta</b></h4>
                            <p><b>$1120</b></p>
                            <p>Triple carne, pan con panceta, salsa sweet bacon, cebolla crispy, cheddar y mayonesa H&D + Papas fritas</p>
                        </div>
                    </div>
                    <div class="contenedorMenu">
                        <img src="images/img-menu/tripple-burger-applewer-cheddar-bacon.png" width="200"/>
                        <div class="info">
                            <h4><b>Triple Burger Applewod Cheddar y Bacon</b></h4>
                            <p><b>$1110</b></p>
                            <p>Triple carne, applewood bacon, pickles de pepinos, cheddar y mayonesa H&D + Papas fritas</p>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-center">
                    <img width="20%" src="images/picante.png" alt="imagen del pimiento centrado"/>
                </div>
            </div>
            <br/><br/>
        </main>
    );
}

export default GaleriaPage;