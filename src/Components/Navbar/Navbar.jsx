import React from 'react'
import './Navbar.css'

 import cart_icon from '../Assets/cart_icon.png'
 import {Link} from 'react-router-dom';
 const Navbar = () => {
  return (
    <div className='navbar'>
 <p className='muza-text' >Muza</p>

     <ul className='nav-menu'>
        <li>Home</li>
        <li><Link style={{textDecoration:'none'}} to='/shop/guitars'>Shop</Link></li>
        <li><Link style={{textDecoration:'none'}} to='/about'>About</Link></li>
        <li>Contact</li>
     </ul>
     <div className='navbar-rightside'>
     <Link to='/login'><button>Login</button></Link>
     <Link to='/cart'><img src={cart_icon} alt="" /></Link>
     </div>
    </div>

  )
}
export default Navbar