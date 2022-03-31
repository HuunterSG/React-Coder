import React from 'react'
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';


const Item = ({name,img,price,stock,id}) => {
    
    return(
        <div className='card'>
            <div className='containerImg'>
            <img src={img} className='img'/>
            </div>
            <h2 className='cardTitle'>{name}</h2>
            <p className='cardPrice'>${price}</p>
            <p className='cardStock'>Stock Disponible: {stock}</p>
            <Link to={`/Item/${id}`} className='cardBtn'>Mas info</Link>
            
        </div>
    )
}

export default Item