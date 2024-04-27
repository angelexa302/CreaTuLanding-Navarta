import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetailContainer ()  {
    const [detail, setDetail] = useState(null)
    const {id} = useParams();

    useEffect(()=> {
        fetch('/src/data/productos.json')
        .then(res => res.json())
        .then(data=> {
            const productDetail = data.find (item=> item.id === id);
         setDetail (productDetail)
        });
    },[id])
    if (!detail) {
        return <div>Cargando...</div>;
    }
    return (
        
        <>
               <ItemCount detail={detail}/> 
        </>
        
    )
}
export default ItemDetailContainer;