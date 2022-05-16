import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Main.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Avatar} from '@material-ui/core';

const TestimoniosItem = (props) => {
    const { message, image } = props

    return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '50%', display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
                        <Avatar 
                            imgProps={{style: {borderRadius: '50%'}}}
                            src={image} 
                            style={{
                                width: 150, 
                                height: 150, 
                                border: '1px solid lightgray', 
                                padding: 7
                            }}
                        />
                        <p style={{marginTop: 25}}>{message}</p>
                </div>
            </div>
    );
}

export default TestimoniosItem;