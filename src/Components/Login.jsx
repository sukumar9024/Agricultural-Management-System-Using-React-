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
        
        <div className="login-cointainer" style={myStyle}>
        <div className="customer">
            <div className="customer-heading"><h2>Customer</h2></div>
            <div className="customer-logo"><span className="material-symbols-outlined">
                <img src={customer} style={{height:"10em"}}/>
                </span></div>
            <div className="customer-para"><p>Are you willing to purchase products from farmers? </p></div>
            <div className="login-line">login/register as  Customer</div>
            <div className="login_button"><Link to="/Customerlogin" ><button type="button" style={{height:"2em", width:"5em"}}>Login</button></Link></div>
            <div className="login_button"><Link to="/Customerregister"><button type="button" style={{height:"2em", width:"5em"}}>Register</button></Link></div>
        </div>
        <div className="farmer">
            <div className="farmer-heading"><h2>Farmer</h2></div>
            <div className="farmer-logo"><span className="material-symbols-outlined">
                <img src={farmer} style={{height:"10em"}}/>
                </span></div>
            <div className="farmer-para"><p>Online Market where you can sell agri products. </p></div>
            <div className="login-line">login/register as  Farmer</div>
            <div className="login_button"><Link to="/farmerlogin" ><button type="button" style={{height:"2em", width:"5em"}}>Login</button></Link></div>
            <div className="login_button"><Link to="/farmerregister" ><button type="button" style={{height:"2em", width:"5em"}}>Register</button></Link></div>
        </div>
        
    </div>
    );
}
export default Login;