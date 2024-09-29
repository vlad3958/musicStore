import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart-cross-icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_products,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartItems'>
<div className="cartItems-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
</div>
<hr />
{all_products.map((e)=>{
    if(cartItems[e.id]>0){
        return <div>
                    <div className="cartItems-format cartItems-format-main">
                        <img src={e.image} alt="" className='cartIcon-product-icon'/>
                        <p>{e.name}</p>
                        <p>${e.price}</p>
                        <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.price*cartItems[e.id]}</p>
                        <img className='remove' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                     </div>
                    <hr />
                </div>
    }
    return null;
})}
<div className="cartItems-down">
    <div className="cartItems-total">
        <h2>Cart totals</h2>
        <div>
            <div className="cartItems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
                <p>Shipping Free</p>
                <p>Free</p>
            </div>
            <hr />
<div className="cartItems-total-item">
    <h3>Total</h3>
    <h3>${getTotalCartAmount()}</h3>
</div>
        </div>
        <button>Proceed to checkout</button>
    </div>

</div>
    </div>
  )
}

export default CartItems