import React from "react";
import { useContext } from "react";
import { cartContext } from "../../App";
import { createOrder } from "../../servicios/firebase";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";




function CartContainer(){
    const {cart, removeItem} = useContext(cartContext)
    const navegate = useNavigate();

    async function handleCheckout(){
    const orderData= {
        item: cart,
        buyer: {name:"emanuel", email: "emanuel@gmail", phone:"23568974"},
        date: new Date(),
        total:999,
    };

    
try{
const idOrder = await createOrder(orderData);
Swal.fire(`Gracias por tu Compra, tu numero de orden es ${idOrder}` )
navegate(`/order-confirmation/${idOrder}`)
}
 catch (error){
    Swal.fire(`no se pudo realizar la compra${error.message}` )
}
 }
    return (
        <div>
        <h1>Carrito de compras </h1>
        {
            cart.map( item=>(
                <div key={item} >
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
            <button onClick={handleCheckout}>Finalizar Compra</button>
            
     </div>
    );
 
}

export default CartContainer;