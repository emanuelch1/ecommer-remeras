import "../BarraNav/BarraNav.css"
import leon from '../../assets/img/leon.png'
import React from "react";
import CardWidget from "../../CardWidget/CardWidget";

function BarraNav(){
   
    return(
        <div>
            <nav>
              <ul className="navbar">
                    <img src={leon} />
                    <h1 className="titulo">Lion king</h1>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                    <CardWidget/>
              </ul> 
              
            </nav>    
        </div>
    )
} 

export default BarraNav;
