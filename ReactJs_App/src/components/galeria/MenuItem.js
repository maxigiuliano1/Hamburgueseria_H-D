import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Main.css';

const MenuItem = (props) => {
    const { title, description, body, image } = props

    return (
    <div className="contenedorMenu">
        <img src={image} width="200"/>
        <div className="info">
            <h4><b>{title}</b></h4>
            <p><b>{description}</b></p>
            <p dangerouslySetInnerHTML={{__html: body}}/>
        </div>
    </div>
    );
}

export default MenuItem;