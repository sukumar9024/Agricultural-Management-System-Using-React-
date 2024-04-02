import React from "react";
import "../Styling/customer_login.css";
import customerBuy from "../assets/customerBuy.jpg";
import {Link} from "react-router-dom";
function Customerlogin(){
        return(<div> 
            <div className="heading">
        <h2>CUSTOMER LOGIN PANEL</h2>
    </div>
    <div className="content-box">
        <div className="image-icon">
            <img src={customerBuy} alt="Customer logo"/>
        </div>
        <form className="login-form" action="#" method="post">
            <div className="set-inputs">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="set-inputs">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <div className="submit">
                <Link to="/products"> <button type="submit">Login</button></Link>
            </div>
        </form>
    </div>

            </div>);
}
export default Customerlogin;