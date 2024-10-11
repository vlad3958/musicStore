import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { Authenticator } from '@aws-amplify/ui-react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';


function App() {
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
