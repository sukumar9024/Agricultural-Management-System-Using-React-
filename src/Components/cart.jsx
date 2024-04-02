import React, { useState, useEffect } from 'react';
import BillModal from './BillModal'; // Import the bill modal component
import cartContents from './CartContent';
import "../Styling/cart.css";



function CartItem({ item, onRemove, onUpdateQuantity }) {
    const [quantity, setQuantity] = useState(item.quantity || 1);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onUpdateQuantity(item, quantity - 1);
        }
    };

    const handleIncrement = () => {
        if (quantity < 5) {
            setQuantity(quantity + 1);
            onUpdateQuantity(item, quantity + 1);
        }
    };

    return (
        <div className="product">
            <img src={item.src} alt={item.productName} />
            <div className="info">
                <div className="product-name-display">
                    <h3>Product name</h3><p>{item.productName}</p>
                </div>
                <div className="quantity">
                    <button className="decrement" onClick={handleDecrement} style={{ borderRadius: "5px" }}>-</button>
                    <input type="text" value={quantity} readOnly />
                    <button className="increment" onClick={handleIncrement} style={{ borderRadius: "5px" }}>+</button>
                </div>
                <div className="product-name-display">
                    <h3>PRICE</h3><p>{item.price * quantity}</p>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item)}>Remove</button>
            </div>
        </div>
    );
}
function Cart() {
    const [cartItems, setCartItems] = useState(cartContents);

    useEffect(() => {
        cartContents.splice(0, cartContents.length, ...cartItems);
    }, [cartItems]);

    const handleRemoveFromCart = (itemToRemove) => {
        const updatedCart = cartItems.filter(item => item !== itemToRemove);
        setCartItems(updatedCart);
        console.log('Item removed from cart:', itemToRemove.productName);
    };

    const handleUpdateQuantity = (item, newQuantity) => {
        const updatedItems = cartItems.map(cartItem => {
            if (cartItem === item) {
                return { ...cartItem, quantity: newQuantity };
            }
            return cartItem;
        });
        setCartItems(updatedItems);
    };

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="product-items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <>
                            {cartItems.map((item, index) => (
                                <CartItem key={index} item={item} onRemove={handleRemoveFromCart} onUpdateQuantity={handleUpdateQuantity} />
                            ))}
                        </>
                    )}
                </div>
                <BillModal bill={cartItems} />
            </div>
        </div>
    );
}

export default Cart;
