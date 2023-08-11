import "../CardtWidget/CardtWidget.css"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { cartContext } from "../../../src/App";
import { Link } from "react-router-dom";

function CardWidget(){
    
   const contex = useContext(cartContext);
   


    return(
        <Link to="/cart">
             <div>         
         <FontAwesomeIcon className="carrito" icon={ faCartShopping } />
         <span className="numero"> {contex.getTotalItemInCart()} </span>
        </div>

        </Link>
       
    )
} 

export default CardWidget;