function ItemCount ({detail}) {

    return (       
    <div>
        <h1>{detail.titulo}</h1>
        <img src={detail.imagen} alt={detail.titulo} />
        <p>{detail.descripcion}</p>
        <p>${detail.precio}</p>
    </div>
    
)
}
export default ItemCount;