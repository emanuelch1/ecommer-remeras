import React from "react";
import { useState } from "react";

 function BotonCantidad(props) {
  {/* <ItemCount stock="4"/> */}
  const [clickCount, setClickCount] = useState(1)

  function handleClickAdd() {
    if (clickCount === props.stock) {
    } else {
      setClickCount(clickCount + 1);
    }
  }

  function handleClickSub() {
    if (clickCount > 1) {
      setClickCount(clickCount - 1);
    }
  }
  

  return (
    <div style={{display:"flex", marginLeft: "110px"}}>
    <button onClick={handleClickAdd} style={{border: "solid 3px black", padding: "10px", width:"40px"}}>
      <h1> +</h1>
    </button>
    <h1 style={{fontSize:"30px",margin:"10px"}}>{clickCount}</h1>
    <button onClick={handleClickSub} style={{border: "solid 3px black", padding: "10px",width:"40px"}}>
      <h1>-</h1>
    </button>
    <button onClick={()=> props.onConfirm(clickCount)}
            style={{border: "solid 3px black", margin:"10px", padding: "10px", width:"80px"}} >
      Añadir al carrito
    </button>
   
    </div>
    
  );
}

export default BotonCantidad;