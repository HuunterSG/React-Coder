import { useContext } from "react"
import ContextCart from "../../context/CartContext"
import {Link} from 'react-router-dom'
const Cart = () => {
    const {cart, clearCart, removeItem, priceGlobal} = useContext(ContextCart)
    
    return (
        <div>
            <h2>My Cart</h2>
            <ul className="ulProducts">
                {cart.map(prod=> <li key={prod.id}>
                                        <div className='card'>
                                            <div className='containerImg'>
                                                <img src={prod.img} className='img'/>
                                            </div>
                                            <h2 className='cardTitle'>{prod.name} </h2>
                                            <p className='cardPrice'>Precio Unitario: {prod.price}  </p>
                                            <p className='cardPrice'>Cantidad: {prod.quantity} </p>
                                            <p className='cardPrice'>Precio: {prod.price*prod.quantity}</p>
                                            <button onClick={()=>removeItem(prod.id)} className='cardBtn'> Remove </button>
                                        </div>
                                        </li>)}
            </ul>

            {cart != 0 ?<div>
                <h2>Su compra total serie de: ${priceGlobal()}</h2>
                <button onClick={clearCart}>Finalizar Compra</button>
            </div> :    
            <div> 
                <p >Gracias por realizar su compra</p>
                <Link className='cardPrice' to='/'>Ir a la tienda</Link>
            </div>}

            <button onClick={clearCart} className='cardBtn'> vaciar carrito </button>
        </div> 
    )
} 

export default Cart