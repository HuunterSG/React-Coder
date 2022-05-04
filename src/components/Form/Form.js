import { useState, useContext } from "react"
import ContextCart from "../../context/CartContext"
import { Link } from "react-router-dom"
import { createOrderModifyStock } from "../../services/firebase/firestore"

const Formulario =()=> {
    const{cart, priceGlobal, clearCart} = useContext(ContextCart);
    
    const [purchase, setPurchase] = useState(false)
    const [datos, setDatos] = useState({
        name:"",
        dni:"",
        telefono:"",
        email:"",
        direccion:"",
    })
    const[loading, setLoading]= useState(false)
    
    const [orderId, setOrderId] = useState(null)
    
    const formE =(e)=>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    
    const submit= (e)=>{
        e.preventDefault();
        createOrder()
    }
    
    
    const createOrder = () =>{
        setLoading(true)
        const objOrder={
        buyer:{
            name: datos.name,
            dni: datos.dni,
            telefono: datos.telefono,
            email: datos.email,
            direccion: datos.direccion
        },
        items: cart,
        total: priceGlobal() 
        }

        createOrderModifyStock(cart,objOrder).then(id => {
            clearCart()
            setOrderId(id)
        }).catch((error)=>{
            
            console.log(error)

        }).finally(()=>{
            setPurchase(true)
            setLoading(false)
        })
    }
    if (loading){
        return <h2>Su orden se esta procesando, Gracias por comprar con nosotros</h2>
    }

    if(orderId){
        return <div>
                    <h2>Este es su comprobante:</h2>
                    <p>{orderId}</p> 
                    <p>No olvide guardarlo, por cualquier consulta o reclamo</p>
                    <Link to='/'>Volver a la tienda</Link>
                </div>
    }

    
    return(
         <div>
                        <h2>Ingrese sus datos para finalizar su compra</h2>
                        <h2>Detalle:</h2>
                        <ul>
                            {cart.map(prod=> <li key={prod.id}>
                                <p>{prod.name}</p>
                                <p>{prod.quantity}</p>
                                <p>{prod.quantity * prod.price}</p>
                            </li>)}
                        </ul>
                        <p>Valor total de su compra: ${priceGlobal()}</p>

                        <form onSubmit={submit}>
                            
                            <input type="text" name="name" placeholder="Nombre:" onChange={formE} value={datos.name} required/>
                            
                            <input type="number" name="dni" placeholder="DNI:" onChange={formE} value={datos.dni} required />
                            
                            <input type="number" name="telefono" placeholder="Telefono:" onChange={formE} value={datos.telefono} required />
                            
                            <input type="email" name="email" placeholder="ejemplo555@gmail.com" onChange={formE} value={datos.email} required />

                            <input type="text" name="direccion" placeholder="Direccion" onChange={formE} value={datos.direccion} required />
                            
                            <button type="submit" >Enviar</button>
                        </form>
                    </div>
    )
}

export default Formulario
