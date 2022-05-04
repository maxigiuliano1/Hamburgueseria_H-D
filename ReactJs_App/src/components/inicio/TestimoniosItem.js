import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Main.css';

const TestimoniosItem = (props) => {
    const { message, image } = props

    return (
        <div className="media contenedorMenu">
            <img src={image} className="mr-3"/>
            <div className="media-body info">
                <p>{message}</p>
            </div>
        </div>
    );
}

export default TestimoniosItem;