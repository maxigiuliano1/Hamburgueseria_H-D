import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Main.css';

const NosotrosItem = (props) => {
    const { title, description, image } = props

    return (
    <div>
        <h2><b>{title}</b></h2>
        <p>
            {description}
        </p>
        <img className="d-flex container justify-content-center" src={image}></img>
        <br/>
    </div>
    );
}

export default NosotrosItem;