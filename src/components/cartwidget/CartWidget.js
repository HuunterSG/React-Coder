import ContextCart from "../../context/CartContext";
import {useContext} from 'react'

function CartWidget(){
    const {getQuantity} = useContext(ContextCart)
    
    return(
        <div>
            <p>{ getQuantity() }</p>
            <img src="../img/carrito-de-compras.png" alt="Carrito"/>
        </div>
    )
}

export default CartWidget;