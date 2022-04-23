import { useContext, useState } from "react"
import ContextCart from "../../context/CartContext"
import {Link} from 'react-router-dom'
import { createOrderModifyStock } from "../../services/firebase/firestore"
const Cart = () => {
    const {cart, clearCart, removeItem, priceGlobal} = useContext(ContextCart)
    const [loading, setLoading] = useState(false)
    
    const createOrder = () =>{
        setLoading(true)
        const objOrder={
        buyer:{

            name: 'Agustin',
            phone: '2233112233',
            email: 'agustinjperez.r@gmail.com'
        },
        items: cart,
        total: priceGlobal() 
        }

        createOrderModifyStock(cart,objOrder).then(id => {
            clearCart()
            alert(`Se ha generado su orden corractamente, no olvide anotar su numero de comprobante: ${id}` )
        }).catch((error)=>{
            //generar modals de notificaciones paraa errores y alertas!!!
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }
    if (loading){
        return <h2>Su orden se esta procesando, Gracias por comprar con nosotros</h2>
    }

    
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
                <button onClick={createOrder}>Finalizar Compra</button>
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