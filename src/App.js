
import './App.css';
import BarraNav from './components/BarraNav/BarraNav';
import Carrito from './CardWidget/CardWidget'
import Saludo from './components/Saludo/Saludo'
import Garras from '../src/assets/img/garras.png'
import CardWidget from './CardWidget/CardWidget';




function App() {
  return (
    <div className="App">
      <nav>
        <BarraNav/>
      </nav>
      <header className="App-header">
      <img className="garras" src={Garras} />
       <Saludo username="Emanuel"/>
      </header>
    </div>
  );
}

export default App;
