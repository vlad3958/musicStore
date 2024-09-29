import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {

    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productDisplay'>
<div className="productDisplay-left">
    <div className="productDisplay-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
    </div>
    <div className="productDisplay-img">
        <img className='productDisplay-main-img' src={product.image} alt="" />
    </div>
</div>
<div className="productDisplay-right">
    <h2>{product.name}</h2>
    <div className="productDisplay-right-desc">
    Hop on to the same network and jam with others 
    using multiple devices running Link-enabled software.
     While others play, anyone can start and stop their 
     part; or start and stop multiple Link-running 
     applications at the same time. And anyone can adjust
      the tempo and the rest will follow. No MIDI cables,
       no installation, just free-flowing sync that works.
    </div>
    <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
</div>
    </div>
  )
}

export default ProductDisplay