import "../CardtWidget/CardtWidget.css"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping }  from "@fortawesome/free-solid-svg-icons";

function CardWidget(){
   
    return(
        <div>         
         <FontAwesomeIcon className="carrito" icon={ faCartShopping } />
         <span className="numero">01</span>
        </div>
    )
} 

export default CardWidget;