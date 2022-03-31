import './Navbar.css';
import CartWidget from '../cartwidget/CartWidget';
import {NavLink} from 'react-router-dom'
function NavBar(){
    return <>
        <nav className='nav'>
            
            <NavLink to="/"className='titleNav'> GamingLand</NavLink>
            <div className='containerCartBtn'>
            <CartWidget/>
            <NavLink to='/category/gabinete'className='btnNav'>Gabinetes</NavLink>
            <NavLink to='/category/silla'className='btnNav'>Sillas</NavLink>
            <NavLink to='/category/monitor'className='btnNav'>Monitores</NavLink>
            </div>
            
        </nav>
    </>
}

export default NavBar;