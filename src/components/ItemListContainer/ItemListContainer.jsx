import { useState, useEffect } from "react";

import { getData, getCategoryData } from "../../servicios/firebase";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { DotSpinner } from '@uiball/loaders'



function ItemListContainer() {
    const [products, setProducts]=useState(null);
    const [isLoading, setLoading]= useState(true);
    const {categoryId} = useParams ();

    useEffect(()=> {
        setLoading(true)
        async function requestProducts() {
            let respuesta = categoryId
              ? await getCategoryData(categoryId)
              : await getData();
            setProducts(respuesta);
            setLoading(false);
        }

        requestProducts();
    }, [categoryId] );

if (isLoading){
    return <DotSpinner  size={200} speed={0.9} color="white" />
}


    return <ItemList products={products} />;
}
   

export default ItemListContainer;