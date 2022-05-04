import React, {useEffect, useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Main.css';
import ProductosDestacadosItem from '../components/inicio/ProductosDestacadosItem';
import TestimoniosItem from '../components/inicio/TestimoniosItem';
const HomePage = (props) => {
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    const [testimonios, setTestimonios] = useState([]);

    useEffect(()=> {
        const cargarProductos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/productosDestacados');
            setProductos(response.data);
            setLoading(false);
        }
        cargarProductos();
    }, []);

    useEffect(()=> {
        const cargarTestimonios = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/testimonios');
            setTestimonios(response.data);
            setLoading(false);
        }
        cargarTestimonios();
    }, []);

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
                {loading ? (
                    <p>Cargando..</p>
                ): (
                    productos.map(item => <ProductosDestacadosItem title={item.titulo} 
                    description={item.descripcion} image={item.imagen}/>)
                )}
            </div>
            <br/>
            <h2 className="d-flex justify-content-center"><b>NUESTROS TESTIMONIOS</b></h2>
            <div className="d-flex flex-column justify-content-start container">
                {loading ? (
                    <p>Cargando..</p>
                ): (
                    testimonios.map(item => <TestimoniosItem message={item.mensaje} 
                    image={item.imagen}/>)
                )}
            </div>
        </main>
    );
}

export default HomePage;