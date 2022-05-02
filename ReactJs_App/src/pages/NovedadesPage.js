import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Main.css';
import '../components/novedades/NovedadItem'
import NovedadItem from '../components/novedades/NovedadItem';
const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(()=> {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        }
        cargarNovedades();
    }, []);

    return (
        <main>
            <img src="images/seccion-novedades.png" width="100%" height="600" alt="Imagen de una hamburguesa y hot-dog"/>
            <br/>
            <div>
                <div className="d-flex flex-column justify-content-center">
                    <h2 className="d-flex justify-content-center"><b>NOVEDADES</b></h2>
                </div>
                <section className='d-flex justify-content-between contenedor'>
                    {loading ? (
                        <p>Cargando..</p>
                    ): (
                        novedades.map(item => <NovedadItem title={item.titulo} 
                        subTitle={item.subtitulo} body={item.cuerpo} image={item.imagen}/>)
                    )}
                </section>
                <div className="d-flex justify-content-center">
                    <img width="20%" src="images/picante.png" alt="imagen del pimiento centrado"/>
                </div>
            </div>
        </main>
    );
}

export default NovedadesPage;