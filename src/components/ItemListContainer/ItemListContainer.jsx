import { useState, useEffect } from "react";
import './ItemListContainer.css';
import BotonCantidad from "../BotonCantidad/BotonCantidad";
import getData,{getCategoryData} from "../../servicios/asyncMocks";
import { useParams } from "react-router-dom";


function ItemListContainer() {
    const [products, setProducts]=useState([]);
    const {categoryId} = useParams ();

    async function requestProducts(){
       
        let respuesta =[];
        if(categoryId === undefined){
          respuesta = await getData();
        } 
        else {
            respuesta = await getData(categoryId);
        }
        setProducts(respuesta)
    }

    useEffect(()=>{
        requestProducts();
    }, [] );




    return(
        <div>
             <h1>Nuestros Productos</h1>
            
               <ul>
                  {products.map((producto)=> {
                      return(
                        <div className="card">
                          <img className="img" src={producto.img} />
                          <h3>{producto.nombre} </h3>
                          <p>{producto.descripcion} </p>
                          <p>Precio:{producto.precio} </p>
                          <BotonCantidad/>
                          <button className="button">Comprar</button>
                      </div>
                        
                      );
                  })}
              </ul>
        </div>  
    );
}
   

export default ItemListContainer;