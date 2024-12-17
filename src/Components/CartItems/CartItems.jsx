import React, { useState, useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart-cross-icon.png';
import emailjs from 'emailjs-com';

const CartItems = () => {
    const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);
    const [showForm, setShowForm] = useState(false); // Состояние для показа формы
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    // Обработчик изменения значений в форме
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Обработчик отправки формы
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Подготовка данных для отправки на почту
        const selectedProducts = all_products.filter(product => cartItems[product.id] > 0)
            .map(product => ({
                name: product.name,
                quantity: cartItems[product.id],
                total: product.price * cartItems[product.id],
            }));
            const selectedProductsString = selectedProducts.map(product => {
                return `Product: ${product.name},\n Quantity: ${product.quantity},\n Total: $${product.total}`;
            }).join('\n');
        const emailData = {
            to_name: formData.name,
            to_email: formData.email,
            address: formData.address,
            phone: formData.phone,
            items: selectedProductsString,
            total: getTotalCartAmount(),
        };

        // Отправка данных через EmailJS
        emailjs.send('service_i9eomyk', 'template_kb88ktw', emailData,'duPgxbMMypt-OJTqE')
            .then(response => {
                console.log('Email sent successfully:', response);
                alert('Order has been sent successfully!');
                setShowForm(false); // Закрыть форму после отправки
            })
            .catch(err => {
                console.error('Error sending email:', err);
                alert('Failed to send order. Please try again.');
            });
    };

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
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartItems-format cartItems-format-main">
                                <img src={e.image} alt="" className='cartIcon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.price}</p>
                                <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.price * cartItems[e.id]}</p>
                                <img className='remove' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
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
                    {/* Кнопка для отображения формы */}
                    <button onClick={() => setShowForm(true)}>Proceed to checkout</button>
                </div>
            </div>

            {/* Форма заказа */}
            {showForm && (
                <div className="order-form">
                    <h2>Order Form</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label>Address:</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Enter your address"
                                required
                            />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <button type="submit">Submit Order</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CartItems;
