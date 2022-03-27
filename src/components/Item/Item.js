import React from 'react'
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({name,img,price,stock}) => {
    const onAdd = (quantity) => {
        console.log(quantity)
    }

    return(
        <div className='card'>
            <div className='containerImg'>
            <img src={img} className='img'/>
            </div>
            <h2 className='cardTitle'>{name}</h2>
            <p className='cardPrice'>${price}</p>
            <p className='cardStock'>Stock Disponible: {stock}</p>
            <button className='cardBtn'>Mas info</button>
            <div>
                <ItemCount initial={0} stock={stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default Item