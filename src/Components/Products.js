import React from 'react';
import contents from '../Components/product-contents.js';
import Card from '../Components/Card.js';
import "../Styling/Products.css";

function helper(props){
    return (<Card src={props.src}
        seller={props.seller}
        pname={props.pname}
        rating={props.rating}
        price={props.price}
    />)
    ;
}

function Products(){


    
    return (
        <div className='cards-holder'>
        {contents.map(helper)}
        </div>
    );
}
export default Products;