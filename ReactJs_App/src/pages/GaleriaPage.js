import React, {useEffect, useState}from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Main.css';
import MenuItem from '../components/galeria/MenuItem';
const GaleriaPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState([]);

    useEffect(()=> {
        const cargarMenu = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/menu');
            setMenu(response.data);
            setLoading(false);
        }
        cargarMenu();
    }, []);

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
                    {loading ? (
                        <p>Cargando..</p>
                    ): (
                        menu.map(item => <MenuItem title={item.titulo} 
                        description={item.precio} body={item.descripcion} image={item.imagen}/>)
                    )}
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