import React from "react";
import "../Styling/customer_login.css";
function Customerlogin(){
        return(<div> 
            <div className="heading">
        <h2>CUSTOMER LOGIN PANEL</h2>
    </div>
    <div className="content-box">
        <div className="image-icon">
            <img src="./assets/customer register image.jpg" alt="Customer logo"/>
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
                <button type="submit">Login</button>
            </div>
        </form>
    </div>

            </div>);
}
export default Customerlogin;