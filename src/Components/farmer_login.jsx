import React from "react";
import "../Styling/customer_login.css"
import image from "../assets/farmImg.jpg";
import {Link} from "react-router-dom";
function farmerlogin(){
        return(<div> 
            <div className="heading">
        <h2>FARMER LOGIN PANEL</h2>
    </div>
    <div className="content-box">
        <div className="image-icon">
            <img src={image} alt="Farmer logo"/>
        </div>
        <form className="login-form" action="customer_login.php" method="post">
            <div className="set-inputs">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required/>
            </div>
            <div className="set-inputs">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required/>
            </div>
            <div className="submit">
                <Link to="/customer"><button type="submit">Login</button></Link>
            </div>
        </form>
    </div>
            </div>);
}
export default farmerlogin;