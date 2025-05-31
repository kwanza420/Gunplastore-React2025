import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./stylesEstatico.css"
import Cart from '../carrito'

const Header = ({cartItems,borrarProducto}) => {
const [isCartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <h1>full frontal</h1>
            <nav>
                <ul>
                    <li><Link to="/" className='Linkh'>inicio</Link> </li>
                    <li><Link to="/acercaDe" className='Linkh'>sobre nosotros</Link> </li>
                    <li><Link to="/productos" className='Linkh'>productos</Link> </li>
                    <li><Link to="/contacto" className='Linkh'>contacto</Link> </li>
                    <li className='cartnav'>
                        <button className='btnCart' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
                        <Cart borrarProducto={borrarProducto} cartItems={cartItems} isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
                    </li>
                </ul>
            </nav>

        </header>
    )
}
export default Header
