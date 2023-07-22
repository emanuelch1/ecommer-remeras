import{useState, useEffect} from "react";
import {getProductData} from "../../servicios/asyncMocks";
import BotonCantidad from "../BotonCantidad/BotonCantidad"
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";



function ItemDetailContainer(){
    const [product, setProduct] = useState({});
    const {id} = useParams ();
    

async function requestProduct(){
    const respuesta = await getProductData(id);
    setProduct(respuesta);
}

useEffect(()=>{
    requestProduct()
}, []);


return(
    <div>
        <h1>Nuestros Productos</h1>
        <div className="card" >
              <img className="img" src={product.img}/>
              <h3>{product.nombre} </h3>
              <p>{product.descripcion} </p>
              <p>Precio:{product.precio} </p>
              <BotonCantidad/>
              <button className="button">Comprar</button>
         </div>
    </div>
    

)
}

export default ItemDetailContainer;