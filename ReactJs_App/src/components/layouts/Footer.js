import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Main.css';

const Footer = (props) => {
    return (
        <footer>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="d-flex justify-content-around navbar p-5">
                <div>
                    <h3><b>CONTACTO</b></h3>
                    <p><b>INFO@ByD.COM.AR</b></p>
                </div>
                <div>
                    <h3><b>SAN MIGUEL</b></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Tel. 3704111111
                    </p>
                    
                    <h3><b>SAN MARTIN</b></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Tel. 3704525252 
                    </p>
                    <h3><b>DON BOSCO</b></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Tel. 3704212121</p>
                </div>
                <div>
                    <a className="redes-sociales" href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a className="redes-sociales" href="#" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    <a className="redes-sociales" href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <p className="d-flex justify-content-center">TODOS LOS DERECHOS RESERVADOS | MAXIMILIANO GABRIEL GIULIANO © 2022 </p>
        </footer>
    );
}

export default Footer;