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
                {products.map(product => <div key={product.id} ><Item name={product.name} price={product.price} img= {product.img} stock={product.stock}/></div>)}
            </ul>
            
        </div>
    )
}

export default ItemList