
import { useNavigate } from "react-router-dom";
import { cartContext } from "../contex/cartContex";
import { createOrder } from "../../servicios/firebase";
import { useContext, useState } from "react";
import Swal from 'sweetalert2';


function Checkout(){
    const [buyer,setBuyer]= useState({
        firstname:"",
        lastname:"",
        age:"",
    });

    const navigate = useNavigate();
    const {cart} = useContext(cartContext);
    

    async function handleCheckout(evt) {
    evt.prevenDefault();
    const orderData= {
        item: cart,
        buyer:buyer,
        date: new Date(),
        total:999,
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
        ege:"",
    })
}
return(
    <form>
        <h2>Completa los datos para completar la compra</h2>
        <div style={{display:'flex', marginBottom: 8 }}>
            <label htmlFor="lasname" style={{width:'100px', marginRight:4}}>Nombre</label>
            <input value={buyer.firstname} name=" firstname" type="text" onChange={onInputChange}></input>

        </div>
        <div style={{display:'flex', marginBottom: 8 }}>
            <label htmlFor="lasname" style={{width:'100px', marginRight:4}}>Apellido</label>
            <input value={buyer.lastname} name="lastname" type="text" onChange={onInputChange}></input>

        </div>
        <div style={{display:'flex', marginBottom: 8 }}>
            <label htmlFor="lasname" style={{width:'100px', marginRight:4}}>Edad</label>
            <input value={buyer.age} name="ege" type="number" onChange={onInputChange}></input>
        </div>

        <button className="btn"
        disable={!(buyer.firstname !== '' && buyer.lastname !== '' && buyer.age !== '')}
        onClick={handleCheckout}
        >
    Confirmar Compra
        </button>
        <button className="btn" onClick={resetForm}>Cancelar</button>
        
    </form>
);
 }

export default Checkout