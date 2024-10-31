import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';

import all_products from './Components/Assets/all_products';


function App() {
  const [products, setProducts] = useState(all_products);

  useEffect(() => {
      // Функция для загрузки данных с API
      const fetchProducts = async () => {
          try {
              const response = await fetch('https://musicshop-api-0d4beebd49be.herokuapp.com/api/Products');
              const data = await response.json();
              
              // Форматирование данных API под структуру all_products
              const formattedData = data.map((product, index) => ({
                  id: product.id || index + 1,
                  name: product.name,
                  image: product.image , // Замените на изображение по умолчанию, если нужно
                  price: product.price,
                  category: product.category  // Замените на категорию по умолчанию, если нужно
              }));
              
              all_products.length = 0; // Очищаем массив
                all_products.push(...formattedData); // Перезаписываем массив
                
                console.log("all_products updated:", all_products); // Лог для проверки
         
          } catch (error) {
              console.error("Ошибка при загрузке данных:", error);
          }
      };

      fetchProducts();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
    
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/shop/guitars' element={<ShopCategory category='guitars'/>}/>
        <Route path='/shop/amplifiers' element={<ShopCategory category='amplifiers'/>}/>
        <Route path='/shop/accessories' element={<ShopCategory category='accessories'/>}/>
        <Route path='/shop/audio-interfaces' element={<ShopCategory category='audio interfaces'/>}/>
        <Route path='/shop/synthesizers' element={<ShopCategory category='synthesizers'/>}/>
        <Route path='/about' element={<About/>}/>

<Route path='/product' element={<Product/>}>
  <Route path=':productId' element={<Product/>}/>
</Route>

<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
