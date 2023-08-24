import { useState,createContext } from "react";



const cartContext = createContext({ cart:[] } );

function  CartContextProvider(props){
  const [cart, setCart]= useState([]);
  const prueba ="otra prueba"

  function addToCart(product, count){
    const newCart = [...cart];
   if (isInCart(product.id)) {
          const indexUpdate = cart.findIndex((item) => item.id === product.id);
          newCart[indexUpdate].count+= count;
          setCart(newCart);
   }
   else {
    const newCart = cart.map((item)=>item);
    const newItemInCart ={...product, count };
    newCart.push(newItemInCart);
    setCart(newCart);
   }
  }


function isInCart(id) {
  return cart.some((item)=> item.id === id);
}
  function removeItem(id){
    setCart(cart.filter((item)=>item.id !== id));
  }


  function clearCart(){
    return null;
  }


  function getTotalItemInCart(){
    let total = 0;
    cart.forEach((item)=>{
      total +=item.count;
    });
    return total;

  }

  function getItem(id){

  }



  return(
    <cartContext.Provider value={ { cart, prueba,addToCart,removeItem,clearCart,getTotalItemInCart} } >
      {props.children}
    </cartContext.Provider>
  )
}
export { cartContext, CartContextProvider}