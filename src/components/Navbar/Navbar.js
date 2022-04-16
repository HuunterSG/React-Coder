import './Navbar.css';
import CartWidget from '../cartwidget/CartWidget';
import {NavLink} from 'react-router-dom'
import { useContext } from "react"
import ContextCart from "../../context/CartContext"

function NavBar(){
    const {cart} = useContext(ContextCart)

    return <>
        <nav className='nav'>
            
            <NavLink to="/"className='titleNav'> GamingLand</NavLink>
            <div className='containerCartBtn'>
            {cart == 0 ? <></>: <NavLink to='/Cart'><CartWidget/></NavLink>}
            
            <NavLink to='/category/gabinete'className='btnNav'>Gabinetes</NavLink>
            <NavLink to='/category/silla'className='btnNav'>Sillas</NavLink>
            <NavLink to='/category/monitor'className='btnNav'>Monitores</NavLink>
            </div>
            
        </nav>
    </>
}

export default NavBar;