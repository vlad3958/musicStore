import React from 'react'
import './Navbar.css'

 import cart_icon from '../Assets/cart_icon.png'

 const Navbar = () => {
  return (
    <div className='navbar'>
 <p className='muza-text' >Muza</p>

     <ul className='nav-menu'>
        <li>Home</li>
        <li><Link to='/'>Shop</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li>Contact</li>
     </ul>
     <div className='navbar-rightside'>
     <button>Login</button>
     <img src={cart_icon} alt="" />
     </div>
    </div>

  )
}
export default Navbar