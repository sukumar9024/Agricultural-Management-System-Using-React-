import React from 'react'
import {Link} from "react-router-dom";
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

function Customer() {
  return (
    <div>
        <div className="tool-bar">
            <div className="logo">
                <div className="left-corner">
                    <h1 style={{color: "white"}}>Grabit</h1>
                    <span>Ramana</span>
                </div>
                <div className="top-menu">
                <Link to="./addProduct" ><button>Add Product</button></Link>
                    <Link to="/"> <button>Logout</button>  </Link>
                </div>
            </div>
        </div>
        {Products()}
    </div>
  )
}

export default Customer