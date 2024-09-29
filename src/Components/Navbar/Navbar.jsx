import React, { useContext } from 'react'
import './Navbar.css'
 import cart_icon from '../Assets/cart_icon.png'
 import {Link} from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

 const Navbar = () => {
  const {getTotalCartItems}=useContext(ShopContext)

  return (
    <div className='navbar'>
 <p className='muza-text' >Muza</p>

     <ul className='nav-menu'>
        <li><Link style={{textDecoration:'none'}} to='/'>Home</Link></li>
        <li style={{color:"red"}}><Link style={{textDecoration:'none'}} to='/shop/guitars'>Shop</Link></li>
        <li><Link style={{textDecoration:'none'}} to='/about'>About</Link></li>
        <li>Contact</li>
     </ul>
     <div className='navbar-rightside'>
     <Link to='/login'><button>Login</button></Link>
     <Link to='/cart'><img src={cart_icon} alt="" /></Link>
     <div className="nav-cart-count"><p>{getTotalCartItems()}</p></div>
     </div>
    </div>

  )
}
export default Navbar