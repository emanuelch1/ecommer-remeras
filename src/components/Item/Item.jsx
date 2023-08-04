import  React from "react";
import { Link } from "react-router-dom";
import "../Item/Item.css"
import BotonCantidad from "../BotonCantidad/BotonCantidad";

function Item (props) {
    const {id,nombre, img, descripcion, precio, category} = props;


    return(
            <div className="card">
              <img className="img" src={props.img} />
              <h3>{props.nombre} </h3>
              <p>{props.descripcion} </p>
              <p>Precio:{props.precio} </p>
            
              <Link to={`/product/${id}`}>
              <button className="button">ver producto</button>
              </Link>
            </div>     
    );
}

export default Item;