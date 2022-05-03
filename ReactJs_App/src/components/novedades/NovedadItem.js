import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Main.css';

const NovedadItem = (props) => {
    const { title, subTitle, body, image } = props

    return (

        <div className="contenedorMenu">
        <img src={image} width="250"/>
        <div className="info">
            <h3><b>{title}</b></h3>
            <h4><b>{subTitle}</b></h4>
            <p dangerouslySetInnerHTML={{__html: body}}/>
        </div>
    </div>
    );
}

export default NovedadItem;