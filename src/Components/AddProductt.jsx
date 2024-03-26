import React from 'react';
import contents from '../Components/AddProducts.js';
import Card from '../Components/CardProduct.jsx';
import "../Styling/Products.css";

function helper(props){
    return (<Card src={props.src}
        seller={props.seller}
        pname={props.pname}
        Stock={props.Stock}
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