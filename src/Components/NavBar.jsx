import React from "react";
import "../Styling/NavBar.css";
import {Link} from "react-router-dom";
function NavBar(){
    return(
        <div className="tool-bar">
        <div className="logo">
            <h1 style={{color: "white"}}>Grabit</h1>
            <div className="top-menu">
                <Link to="/" ><li>Home</li></Link>
                <Link to="/products"><li>Market</li></Link>
                    <li>Cart</li>
            </div>
        </div>
    </div>
    );

}
export default NavBar;