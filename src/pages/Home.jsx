import React from "react"
import Header from "../components/estaticos/Header"
import Footer from "../components/estaticos/Footer"
const Home = ({cart,borrarProducto}) => {
    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart}/>
            <h1>Bienvenido</h1>
            
            <Footer />
        </>
    )
}
export default Home