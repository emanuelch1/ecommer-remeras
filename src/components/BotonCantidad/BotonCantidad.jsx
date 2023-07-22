import React from "react";
import { useState } from "react";

 function BotonCantidad() {
  {/* <ItemCount stock="4"/> */}
  const [clicks, setClicks] = useState(0)

  function handleClick(){    
    setClicks(clicks + 1);     
  }

  function handleClickResta(){
    if (clicks > 1){
      setClicks(clicks - 1); 
    }
  }

  return (
    <div style={{display:"flex", marginLeft: "110px"}}>
    <button onClick={handleClick} style={{border: "solid 3px black", padding: "10px", width:"40px"}}>
      <h1>+</h1>
    </button>
    <h1 style={{fontSize:"30px",margin:"10px"}}>{clicks}</h1>
    <button onClick={handleClickResta} style={{border: "solid 3px black", padding: "10px",width:"40px"}}>
      <h1>-</h1>
    </button>
    </div>
  );
}

export default BotonCantidad;