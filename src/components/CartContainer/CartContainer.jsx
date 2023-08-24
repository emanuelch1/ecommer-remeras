import React from "react";
import { useContext } from "react";
import { cartContext } from "../../App";
import { createOrder } from "../../servicios/firebase";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function CartContainer(){
    const {cart, removeItem} = useContext(cartContext)
    
    return (
        <div>
        <h1>Carrito de compras </h1>
        {cart.map( (item)=>(
                <div key={item} >
                  <h3>{item.nombre} </h3>
                  <p>{item.descripcion} </p>
                  <p>Cantidad:{item.count} </p>
                  <p>Total:{item.count*item.precio} </p>
                 <button className="btn"  onClick={()=>removeItem(item.id)} >Eliminar</button>
              </div>
            ) ) }

            <div>
                Total de la compra: 999
            </div>
            <Link className="btn" to="/checkout" > Compra</Link>
            
     </div>
    );
 
}

export default CartContainer;