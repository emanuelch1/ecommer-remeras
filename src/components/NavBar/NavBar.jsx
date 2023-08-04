import "./NavBar.css"
import leon from '../../assets/img/leon.png'
import React from "react";
import CardtWidget from "../CardtWidget/CardtWidget.jsx";
import { Link } from "react-router-dom";

function NavBar(){
   
    return(
        <div>
            <nav>
              <ul className="navbar">
                    <img src={leon} />
                    <h1 className="titulo">Lion king</h1>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/category/Hombre">Hombres</Link></li>
                    <li><Link to="/category/Mujer">Mujer</Link></li>
                    <li><Link to="/category/Niño">Niño</Link></li>
                    <CardtWidget/>
              </ul> 
              
            </nav>    
        </div>
    )
} 

export default NavBar;
