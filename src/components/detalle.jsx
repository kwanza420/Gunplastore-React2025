import React from "react"
import { useParams } from "react-router-dom"
const DetallesProductos =({productos}) => {
    const {id}= useParams()
    const product=productos.find(producto => producto.id==id)
    return(
        <div>
            <h1>informacion adicional:</h1>
            {product ? (<h2>{product.nombre}</h2>):(<p>Producto no no encontrado</p>)}
        </div>
    )
}
export default DetallesProductos