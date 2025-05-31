import React from 'react'
import './styleCarrito.css'

const cart = ({ cartItems, isOpen, onClose, borrarProducto }) => {
    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2 style={{ color: 'white' }}>carrito de Compras</h2>
                <button onClick={onClose} className='close-button'>X</button>
            </div>
            <div className='cart-content'>
                {cartItems.length === 0 ? (<p style={{ color: 'black' }}>El carrito esta vacío</p>) : (<ul className='Cart-item'>
                    {cartItems.map((item, index) => (
                        <>
                            <li key={item.id} style={{ color: 'black' }}>
                                {item.nombre} - {item.precio}
                                <button onClick={() => borrarProducto(item)}><i className="fa-solid fa-trash"></i></button>
                            </li>
                        </>
                    ))}
                </ul>)}

            </div>

        </div>
    )
}

export default cart
