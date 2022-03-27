import './Navbar.css';
import CartWidget from '../cartwidget/CartWidget';

function NavBar(){
    return <>
        <nav className='nav'>
            
            <h2 className='titleNav'> GamingLand</h2>
            <div className='containerCartBtn'>
            <CartWidget/>
            <button className='btnNav'>PC</button>
            <button className='btnNav'>Consolas</button>
            </div>
            
        </nav>
    </>
}

export default NavBar;