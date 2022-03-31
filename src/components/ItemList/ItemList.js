import './ItemList.css';
import { getProducts } from "../../asynmock";
import Item from "../Item/Item";
import { useState, useEffect } from 'react'

const ItemList = () => {
    
    const [products, setProducts] = useState([])

    useEffect(()=> {
        getProducts().then(response =>{
            setProducts(response)
        }) 
    },[])

    console.table(products)
    return (
        <div>
            <ul className="ulProducts">
                {products.map(product => <li><Item key={product.id} {...product}/></li>)}
            </ul>
            
        </div> 
        
    )
}

export default ItemList