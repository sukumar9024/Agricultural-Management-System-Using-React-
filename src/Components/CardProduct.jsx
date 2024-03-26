import React from 'react';
import "..//Styling/Card.css";

function CardProduct(props){
        return(
            <div className="cards">
                <div className='image-holder'><img className='image' src={props.src} alt-text='fruit image'/></div>
                <h3 className="product-name">{props.pname}</h3>
                <p className="price">Rs.{props.price}</p>
                <p className="price">Stock  :  {props.Stock}</p>
            </div>
        );
}
export default CardProduct;