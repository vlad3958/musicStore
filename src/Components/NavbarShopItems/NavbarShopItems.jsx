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
    }
    // Добавьте другие пути, если нужно
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
          Audio Interfaces {menu === "audio interfaces" && <hr />}
        </li>
        <li >
          Synthesizers {menu === "synthesizers" && <hr />}
        </li>
        <li>
          Accessories {menu === "accesories" && <hr />}
        </li>
      </ul>
    </div>
  );
};

export default NavbarShopItems;
