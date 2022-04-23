import './Navbar.css';
import CartWidget from '../cartwidget/CartWidget';
import {NavLink} from 'react-router-dom'
import { useContext, useState, useEffect } from "react"
import ContextCart from "../../context/CartContext"
import { getCategories } from '../../services/firebase/firestore';
import { order} from './Order'

function NavBar(){
    const {cart} = useContext(ContextCart)
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then(categories=> {
            order(categories)
            setCategories(categories)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    return <>
        <nav className='nav'>
            
            <NavLink to="/"className='titleNav'> GamingLand</NavLink>
            <div className='containerCartBtn'>
            {cart == 0 ? <></>: <NavLink to='/Cart'><CartWidget/></NavLink>}
            {categories.map(cat=>
                <NavLink 
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className='btnNav'>
                    {cat.description}
                </NavLink>)}
            </div>
            
        </nav>
    </>
}

export default NavBar;