import React, {useState} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Main.css';
const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        asunto: '',
        email: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    } 

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
                    <form method="" action="" className="form-group contacto" onSubmit={handleSubmit}>
                        <label>Nombre y Apellido:</label><br/>
                        <input type="text" placeholder="Nombre y Apellido" name='nombre' value={formData.nombre} onChange={handleChange}/>
                        <br/>
                        <label>Asunto:</label><br/>
                        <input type="text" placeholder="Asunto" name='asunto' value={formData.asunto} onChange={handleChange}/>
                        <br/>
                        <label>Email:</label><br/>
                        <input type="email" placeholder="Email" name='email' value={formData.email} onChange={handleChange}/>
                        <br/><br/>
                        <textarea rows={5} name='mensaje' placeholder='Mensaje' value={formData.mensaje} onChange={handleChange}></textarea>
                        <br/>
                        <br/>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
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