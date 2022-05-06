import React, {useState, useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Main.css';
import NosotrosItem from '../components/nosotros/NosotrosItem';
const NosotrosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [nosotros, setNosotros] = useState([]);

    useEffect(()=> {
        const cargarNosotros = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/nosotros');
            setNosotros(response.data);
            setLoading(false);
        }
        cargarNosotros();
    }, []);

    return (
        <main>
            <img src="images/nosotros.png" width="100%" alt="Imagen de una hamburguesa y hot-dog"></img>
            <br/>
            <div className="container d-flex flex-column">
                {loading ? (
                    <p>Cargando..</p>
                ): (
                    nosotros.map(item => <NosotrosItem title={item.titulo} 
                    description={item.descripcion} image={item.imagen}/>)
                )}
            </div>        
            <br/>
            <div className="d-flex justify-content-center ">
                <img width="20%" src="images/pimiento.png" alt="imagen pimiento centrado"></img>
            </div>
            <br/>
            <div className="d-flex justify-content-center p-5 nota">
                <p><b>
                    Pepinos, bacon, cheddar, chili, cheddar, tomate, lechuga , hongos portobello, cebolla caramelizada y mucho más. 
                    <span>Para todas hay disponible jalapeños y salsas importadas como topping extra.</span>
                </b></p>
            </div>
        </main>
    );
}

export default NosotrosPage;