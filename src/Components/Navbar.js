import React from 'react'
import './Navbar.css'



function Navbar(){
    return (<div className="tool-bar">
    <div className="logo">
        <h1 style={{color: "white"}}>Grabit</h1>
        <div className="top-menu">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="farmers_market.html">Market</a></li>
                <li><a href="my_account.html">Account</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </div>
</div>);
}
export default Navbar;