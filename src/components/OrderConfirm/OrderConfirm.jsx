import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../servicios/firebase';

function OrdenConfirm(){
    const [orderData, setOrderData]= useState(null)
    const{id}= useParams();

    useEffect(()=>{
         getOrder(id).then((order)=>{ 
            setOrderData(order);
          });
    },[])
    return <div>
        <h1>Gracias por tu Compra</h1>
        {orderData !== null? (
            <div>
                <p> Tus Productos comprados:
                    {orderData.items.map((item)=> {
                       return <small>{item.count} Unidades 
                       </small>;
                    })}
                </p>
            </div>
        ):(
         <p>Cargando</p>
       ) }
    </div>;
}

export default OrdenConfirm;