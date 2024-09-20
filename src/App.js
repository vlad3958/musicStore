import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import About from './Pages/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>

<Route path="product" element={<Product/>}>
  <Route path=' :productId' element={<Product/>}/>
</Route>

<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
