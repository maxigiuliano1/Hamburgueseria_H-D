import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Main.css';
import ServiciosItem from '../components/servicios/ServiciosItem';
const ServiciosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [servicios, setServicios] = useState([]);

    useEffect(()=> {
        const cargarServicios = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/servicios');
            setServicios(response.data);
            setLoading(false);
        }
        cargarServicios();
    }, []);

    return (
        <main>
            <header>
                <img src="images/servicio.png" width="100%" alt="Imagen de una hamburguesa y hot-dog"/>
            </header>
            <br/>
            <div>
                <div className="d-flex flex-column container">
                    <h2 className="d-flex justify-content-center"><b>NUESTRO SERVICIO</b></h2>
                    {loading ? (
                        <p>Cargando..</p>
                    ): (
                        servicios.map(item => <ServiciosItem title={item.titulo} 
                        description={item.descripcion}/>)
                    )}
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