
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Saludo from './components/Saludo/Saludo'
import Garras from '../src/assets/img/garras.png'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
             <nav>
               <NavBar/>
             </nav>
             <img className="garras" src={Garras} />
              <Saludo username="a la mejor tienda"/>
              <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:categotyid*" element={<ItemListContainer/>} />

                <Route path="/product/:id" element={<ItemDetailContainer/>} />
                <Route path="*" element={<h1>Page not found: 404 </h1>} />
              </Routes> 
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
