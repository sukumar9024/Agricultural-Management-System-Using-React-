import React from 'react';
import contents from './product-contents';
import Card from './Card';
import ".//Styling"

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