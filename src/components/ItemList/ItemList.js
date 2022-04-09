import './ItemList.css';

import Item from "../Item/Item";
const ItemList = ({products}) => {
    

    console.table(products)
    return (
        <div>
            <ul className="ulProducts">
                {products.map(product => <li key={product.id}><Item  {...product}/></li>)}
            </ul>
            
        </div> 
        
    )
}

export default ItemList