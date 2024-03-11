import React from 'react'
import './Card.css'

function Card(props){
        return(
            <div className="cards">
                <div className='image-holder'><img className='image' src={props.src} alt-text='fruit image'/></div>
                <h4 className="seller"> {props.seller}</h4>
                <h3 className="product-name">{props.pname}</h3>
                <p className="price">Rs.{props.price}</p>
                <p className="price">Rating  :  {props.rating}</p>
            </div>
        );
}
export default Card;