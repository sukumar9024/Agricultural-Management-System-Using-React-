import React from "react";
import "../Styling/NavBar.css";
function NavBar(){
    return(
        <div class="tool-bar">
        <div class="logo">
            <h1 style={{color: "white"}}>Grabit</h1>
            <div class="top-menu">
                <ul>
                    <li>Home</li>
                    <li>Market</li>
                    <li>Account</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
    );

}
export default NavBar;