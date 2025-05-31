import React from "react"
import Header from "../components/estaticos/Header"
import Footer from "../components/estaticos/Footer"
import ProductList from "../components/ListaProductos"
import loading from "../assets/loading.gif"

const GaleriaProductos = ({cart,productos, cargando,agregarCarrito, borrarProducto}) => {
    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart}/>
            <h1>Bienvenido</h1>
            {
            cargando ? <img src={loading} alt='loading' /> :
            <ProductList agregarCarrito={agregarCarrito} productos={productos}/>
            }
            <Footer />
        </>
    )
}
export default GaleriaProductos