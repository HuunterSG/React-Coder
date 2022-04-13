import { useContext } from "react"
import ContextCart from "../../context/CartContext"
const Cart = () => {
    const {cart, clearCart, removeItem} = useContext(ContextCart)
    
    return (
        <div>
            <h2>My Cart</h2>
            <ul>
                {cart.map(prod=> <li key={prod.id}>
                                        <div className='card'>
                                            <div className='containerImg'>
                                                <img src={prod.img} className='img'/>
                                            </div>
                                            <h2 className='cardTitle'>{prod.name} </h2>
                                            <p className='cardPrice'>Precio: {prod.price} Cantidad: {prod.quantity}  </p>
                                            <button onClick={()=>removeItem(prod.id)} className='cardBtn'> Remove </button>
                                        </div>
                                        </li>)}
            </ul>
            <button onClick={clearCart} className='cardBtn'> vaciar carrito </button>
        </div>
    )
} 

export default Cart