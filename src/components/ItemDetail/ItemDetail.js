import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({name,price,img,stock,description}) => {
    
    const [quantity, setQuantity] = useState (0)

    const handleOnAdd = (count) => {
        console.log('agregue al carrito '+ count)
        setQuantity(count)
    }
    
    return (
        <div className="contDetail">
            <div className="contDetailImg">
                <img src={img} alt="producto" className="Detailimg"/>
            </div>
            <div className="contDetailText">
            <h2 className="contDetailTitle">{name}</h2>
            <p className="contDetailP">{description}</p>
            <p className="DetailPrice">${price}</p>
            </div>
            <div>
                {quantity === 0 ? <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} /> : <button> Go to cart </button> }
            </div>
        </div>
    )
}

export default ItemDetail