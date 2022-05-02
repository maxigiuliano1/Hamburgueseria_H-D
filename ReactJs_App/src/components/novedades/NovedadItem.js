import React from "react";

const NovedadItem = (props) => {
    const {title, subTitle, body, image} = props

    return (
        <div className='card'>
            <img src={image}/>
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr/>
        </div>
    );
}

export default NovedadItem;