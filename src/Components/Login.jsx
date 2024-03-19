import React from "react";
import "../Styling/Login.css"
import {Link} from "react-router-dom";
import image from "../assets/background-login.jpeg";
import customer from "../assets/customer.png";
import farmer from "../assets/farmer.png";
function Login(){
    let myStyle={
        backgroundImage: `url(${image})`,
        backgroundPosition: "center"
      
    }
    return(
        
        <div class="login-cointainer" style={myStyle}>
        <div class="customer">
            <div class="customer-heading"><h2>Customer</h2></div>
            <div class="customer-logo"><span class="material-symbols-outlined">
                <img src={customer} style={{height: 50}}/>
                </span></div>
            <div class="customer-para"><p>Are you willing to purchase products from farmers? </p></div>
            <div class="login-line">login/register as  Customer</div>
            <div class="login_button"><Link to="/Customerlogin" ><button type="button">Login</button></Link></div>
            <div class="login_button"><Link to="/Customerregister"><button type="button">Register</button></Link></div>
        </div>
        <div class="farmer">
            <div class="farmer-heading"><h2>Farmer</h2></div>
            <div class="farmer-logo"><span class="material-symbols-outlined">
                <img src={farmer} style={{height: 50}}/>
                </span></div>
            <div class="farmer-para"><p>Online Market where you can sell agri products. </p></div>
            <div class="login-line">login/register as  Farmer</div>
            <div class="login_button"><Link to="/farmerlogin" ><button type="button">Login</button></Link></div>
            <div class="login_button"><Link to="/farmerregister" ><button type="button">Register</button></Link></div>
        </div>
        
    </div>
    );
}
export default Login;