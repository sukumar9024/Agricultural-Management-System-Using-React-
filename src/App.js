import React from "react";
import NavBar from "./Components/NavBar.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Customerlogin from "./Components/Customer_login.jsx";
import Customerregister from "./Components/Customerregister.jsx";
import Farmerlogin from "./Components/farmer_login.jsx";
import Farmerregister from "./Components/farmerregister.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searcher from "./Components/searcher.js";
import Products from "./Components/Products.js";
import Customer from "./Components/Customer.jsx";
import CustomerAddProduct from "./Components/customerAddProduct.jsx";
import Cart from "./Components/cart.jsx";

function App() {

  return (
<Router>
    <div>
    
      <Routes>
        <Route exact path="/" element={<div><NavBar/><Home/></div>} />
        <Route exact path="/Login" element={<div><NavBar/><Login /></div>} />   
        <Route exact path="/Customerlogin" element={<div><NavBar/><Customerlogin /></div>} />
        <Route exact path="/Customerregister" element={<div><NavBar/><Customerregister/></div>}/>
        <Route exact path="/farmerlogin" element={<div><NavBar/>< Farmerlogin/></div>} />
        <Route exact path="/farmerregister" element={<div><NavBar/><Farmerregister /></div>} />
        <Route exact path="/products" element={<div><NavBar/> <Searcher/><Products/></div>} />
        <Route exact path="/farmer" element={<Customer/>} />
        <Route exact path="/farmer/addProduct" element={<CustomerAddProduct/>} />
        <Route exact path="/cart" element={<div><NavBar/><Cart/></div>} />
      </Routes>
        
      
      </div>
  </Router>
  );
}

export default App;
