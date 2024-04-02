import React, {useState}from 'react';
import cartContents from '../Components/CartContent.js';
import "..//Styling/Card.css";

function Card(props) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const addToCart = () => {
        const newItem = {
            src: props.src,
            productName: props.pname,
            price: props.price,
            quantity:1
        };
        cartContents.push(newItem);
        console.log('Item added to cart:', newItem);
        setIsAddedToCart(true); // Set the state to indicate that item has been added to cart
    };

    return (
        <div className="cards">
            <div className='image-holder'><img className='image' src={props.src} alt="fruit image" /></div>
            <h4 className="seller"> {props.seller}</h4>
            <h3 className="product-name">{props.pname}</h3>
            <p className="price">Rs.{props.price}</p>
            <div className="AddToCart">
                <p className="price">Rating  :  {props.rating}</p>
                {isAddedToCart ? (
                    <button disabled>Added to Cart</button> // Disable button if item is already added to cart
                ) : (
                    <button onClick={addToCart}>Add to Cart</button>
                )}
            </div>
        </div>
    );
}

export default Card;