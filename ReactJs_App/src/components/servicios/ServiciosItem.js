import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Main.css';

const ServiciosItem = (props) => {
    const { title, description} = props

    return (
    <div>
        <h3><b>{title}</b></h3>
        <p>
            {description}
            <br/>
        </p>
    </div>
    );
}

export default ServiciosItem;