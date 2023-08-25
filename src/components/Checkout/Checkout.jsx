
import { useNavigate } from "react-router-dom";
import { cartContext } from "../contex/cartContex";
import { createOrder } from "../../servicios/firebase";
import { useContext, useState } from "react";
import Swal from 'sweetalert2';


function Checkout(){
    const [buyer,setBuyer]= useState({
        firstname:"",
        lastname:"",
        mail:"",
    });

    const navigate = useNavigate();
    const {cart, getTotalItemInCart} = useContext(cartContext);
    

    async function handleCheckout(evt) {
    evt.prevenDefault();
    const orderData= {
        item: cart,
        buyer:buyer,
        date: new Date(),
        total:getTotalItemInCart(),
    };

    
try{
const idOrder = await createOrder(orderData);
Swal.fire(`Gracias por tu Compra, tu numero de orden es ${idOrder}` )
navigate(`/order-confirmation/${idOrder}`)
}catch (error){
    Swal.fire(`no se pudo realizar la compra${error.message}` );
}

}

function onInputChange(evt){
    const value =evt.target.value;
    const field= evt.target.name;
    const newState={...buyer}
    newState[field]=value;
    setBuyer(newState);
}



function resetForm(e){
    e.prevenDefault();
    setBuyer({
        firstname:"",
        lastname:"",
        mail:"",
    })
}
return(
    <form>
        <h2>Completa los datos para completar la compra</h2>
        <div style={{display:'flex', marginBottom: 10, textAlign:"center"}}>
            <label htmlFor="firstname" style={{width:'250px', marginRight:4}}>Nombre:</label>
            <input value={buyer.firstname} name="firstname" type="text" onChange={onInputChange}></input>
        </div>

        <div style={{display:'flex', marginBottom: 10 }}>
            <label htmlFor="lasname" style={{width:'250px', marginRight:4}}>Apellido:</label>
            <input value={buyer.lastname} name="lastname" type="text" onChange={onInputChange}></input>
        </div>
        
        <div style={{display:'flex', marginBottom: 10 }}>
            <label htmlFor="mail" style={{width:'250px', marginRight:4}}>E-mail:</label>
            <input value={buyer.mail} name="mail" type="text" onChange={onInputChange}></input>
        </div>

        <button className="btn"
        disabled={!(buyer.firstname !== '' && buyer.lastname !== '' && buyer.mail !== '')}
        onClick={handleCheckout}
        >
    Confirmar Compra
        </button>
        <button className="btn" onClick={resetForm}>Cancelar</button>
        
    </form>
);
 }

export default Checkout