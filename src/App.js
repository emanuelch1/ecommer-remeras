
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Saludo from './components/Saludo/Saludo'
import Garras from '../src/assets/img/garras.png'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
import CartContainer from "./components/CartContainer/CartContainer";
import OrdenConfirm from './components/OrderConfirm/OrderConfirm';





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

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CartContextProvider>

               <BrowserRouter>
                      <nav>
                        <NavBar/>
                      </nav>
                      <img className="garras" src={Garras} />
                      <Saludo username="a la mejor tienda"/>
                      <Routes>
                         <Route path="/" element={<ItemListContainer/>} />
                         <Route path="/category/:categoryId*" element={<ItemListContainer/>} />
                         <Route path="/product/:id" element={<ItemDetailContainer/>} />
                         <Route path="/cart" element={ <CartContainer/>}  />
                         <Route path="/order-confirmation/:id" element={<OrdenConfirm/>}/>
                         <Route path="*" element={<h1>Page not found: 404 </h1>} />
                      </Routes> 
                </BrowserRouter>

        </CartContextProvider>
       
      </header>
    </div>
  );
}

export default App;

export {cartContext};