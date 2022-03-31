import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getProductByType, getProducts } from '../../asynmock'
import ItemList from "../ItemList/ItemList"

function ItemlistContainer(){

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const {typeId} = useParams()

    

    useEffect(()=>{
        if(typeId){
            setLoading(true)
            getProductByType(typeId).then(producs =>{
                setProducts(producs)
                
            }).catch(err=>{
                console.log(err)
            }).finally(()=>{
                setLoading(false)
            })
        } else {
            setLoading(true)
            getProducts().then(produc => {
                setProducts(produc)
                
            }).catch(err => {
                console.log(err)
            }).finally(()=>{
                setLoading(false)
            })
        }

        return (()=>{
            setProducts([])
            
        })
    }, [typeId],)

    if(loading){
        return <h2>Cargando...</h2>
    }

    if(products.length === 0){
        return <h2>Productos no disponibles por el momento.</h2>
    }

    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemlistContainer