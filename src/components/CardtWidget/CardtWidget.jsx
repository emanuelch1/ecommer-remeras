import "../CardtWidget/CardtWidget.css"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { cartContext } from "../../../src/App";

function CardWidget(){
    
   const contex = useContext(cartContext);
   


    return(
        <div>         
         <FontAwesomeIcon className="carrito" icon={ faCartShopping } />
         <span className="numero"> {contex.getTotalItemInCart()} </span>
        </div>
    )
} 

export default CardWidget;