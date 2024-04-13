import React from 'react';
import { Link } from "react-router-dom";
import Products from '../Components/AddProductt.jsx';
import {email} from "./farmer_login.jsx";
import "../Styling/Products.css";
import "../Styling/Customer.css";

function Customer() {


  return (
    <div>
      <div className="tool-bar">
        <div className="logo">
          <div className="left-corner">
            <h1 style={{ color: "white" }}>Grabit</h1>
            <span>{email}</span>
          </div>
          <div className="top-menu">
            <Link to="./addProduct"><button>Add Product</button></Link>
            <Link to="/"><button>Logout</button></Link>
            <Link to="./guide"><button>Support</button></Link>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Customer;
