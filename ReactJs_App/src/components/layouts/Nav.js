import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Main.css';

const Nav = (props) => {
    return (
    <nav className="navbar justify-content-center mb-3">
        <a className="nav-link mr-auto icon" href="/">B&D</a>
        <a className="nav-link btn-grad" href="/">Inicio</a>
        <a className="nav-link btn-grad" href="nosotros.html">Nosotros</a>
        <a className="nav-link btn-grad" href="servicios.html">Servicios</a>
        <a className="nav-link btn-grad" href="galeria.html">Menu</a>
        <a className="nav-link btn-grad" href="novedades.html">Novedades</a>
        <a className="nav-link btn-grad" href="contacto.html">Contacto</a>
    </nav>
    );
}

export default Nav;