import{useState, useEffect, useContext} from "react";
import { getProductData } from "../../servicios/firebase";
import BotonCantidad from "../BotonCantidad/BotonCantidad"
import './ItemDetailContainer.css';
import { Link, useParams } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { cartContext } from "../../App";
import Swal from 'sweetalert2';


function ItemDetailContainer(){
    const [product, setProduct] = useState({});
    const[isAddedToCart, setIsAddedToCart]= useState(false);
    const {id} = useParams ();
    
const {addToCart}= useContext(cartContext)



async function requestProduct(){
    const respuesta = await getProductData(id);
    setProduct(respuesta);
}

useEffect(()=>{
    requestProduct()
}, [id]);

function handleAddToCard (clickCount){
    addToCart(product,clickCount);
    Swal.fire(`Producto agregado al carrito, cantidad: ${clickCount}`);
   
    setIsAddedToCart(true)
}

return(
    <div>
        <h1>Nuestros Productos</h1>
        <div className="card" >
              <img className="img" src={product.img}/>
              <h3>{product.nombre} </h3>
              <p>{product.descripcion} </p>
              <p>Precio:{product.precio} </p>
              {isAddedToCart ? (
                <Link to="/cart">
                   <button className="btn">Ir al carrito</button>
                </Link>
                
              ) : ( <BotonCantidad onConfirm={handleAddToCard} stock={product.stock} />

              )
              }
              
              <Link to="/">
              <ButtonComponent>Volver al Inicio</ButtonComponent>
              </Link>
              
              
         </div>
    </div>
    

)
}

export default ItemDetailContainer;