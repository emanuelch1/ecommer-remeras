
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
import { cartContext,CartContextProvider } from './components/contex/cartContex';
import Checkout from './components/Checkout/Checkout';



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
                         <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                         <Route path="/product/:id" element={<ItemDetailContainer/>} />
                         <Route path="/cart" element={ <CartContainer/>}/>
                         <Route path='/checkout'element={<Checkout/>}/>
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