import React, { useState, useEffect } from 'react';
import './NavbarShopItems.css';
import { Link, useLocation } from 'react-router-dom';

const NavbarShopItems = () => {
  const location = useLocation(); // Получаем текущий путь
  const [menu, setMenu] = useState("guitars");

  // Следим за изменением пути и обновляем состояние меню
  useEffect(() => {
    if (location.pathname === '/shop/amplifiers') {
      setMenu("amplifiers");
    } else if (location.pathname === '/shop/guitars') {
      setMenu("guitars") ;
    } else if (location.pathname === '/shop/audio-interfaces') {
        setMenu("audio interfaces") ;
      } else if (location.pathname === '/shop/synthesizers') {
        setMenu("synthesizers") ;
      } else if (location.pathname === '/shop/accesories') {
        setMenu("accesories") ;
      } 
  }, [location.pathname]);

  return (
    <div>
      <ul className='navbar-shop-items'>
        <li >
         <Link style={{ all: 'unset' }} to='/shop/guitars'>Guitars</Link>  
         {menu === "guitars" && <hr />}
        </li>
        <li >
          <Link style={{ all: 'unset' }} to='/shop/amplifiers'>Amplifiers</Link>
          {menu === "amplifiers" && <hr />}
        </li>
        <li>
        <Link style={{ all: 'unset' }} to='/shop/audio-interfaces'> Audio Interfaces</Link> 
        {menu === "audio interfaces" && <hr />}
        </li>
        <li >
        <Link style={{ all: 'unset' }} to='/shop/synthesizers'> Synthesizers </Link> 
          {menu === "synthesizers" && <hr />}
        </li>
        <li>
        <Link style={{ all: 'unset' }} to='/shop/accesories'> Accessories  </Link> 
          {menu === "accesories" && <hr />}
        </li>
      </ul>
    </div>
  );
};

export default NavbarShopItems;
