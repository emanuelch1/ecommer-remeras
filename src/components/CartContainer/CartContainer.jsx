import React from "react";
import { useContext } from "react";
import { cartContext } from "../../App";

function CartContainer(){
    const {cart, removeItem} = useContext(cartContext)


    return (
        <div>
        <h1>Carrito de compras </h1>
        {
            cart.map( item=>(
                <div >
                  <h3>{item.nombre} </h3>
                  <p>{item.descripcion} </p>
                  <p>Cantidad:{item.count} </p>
                  <p>Total:{item.count*item.precio} </p>
                 <button style={{color: "white", backgroundColor: "red"}} onClick={()=>removeItem(item.id)} >Eliminar</button>
              </div>
            ) ) }

            <div>
                Total de la compra: 999
            </div>
            <button>Finalizar Compra</button>
            
     </div>
    );
 
}
export default CartContainer;