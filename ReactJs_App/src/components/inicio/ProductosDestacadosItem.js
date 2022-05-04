import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Main.css';

const ProductosDestacadosItem = (props) => {
    const { title, description, image } = props

    return (
        <div className="card">
            <img src={image} width="100%"/>
            <div className="container">
                <h4><b>{title}</b></h4>
                {description}
            </div>
        </div>
    );
}

export default ProductosDestacadosItem;