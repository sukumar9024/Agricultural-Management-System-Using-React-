import React from "react";
import "../Styling/customer_login.css"
import image from "../assets/farmImg.jpg";
function farmerlogin(){
        return(<div> 
            <div class="heading">
        <h2>FARMER LOGIN PANEL</h2>
    </div>
    <div class="content-box">
        <div class="image-icon">
            <img src={image} alt="Farmer logo"/>
        </div>
        <form class="login-form" action="customer_login.php" method="post">
            <div class="set-inputs">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required/>
            </div>
            <div class="set-inputs">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required/>
            </div>
            <div class="submit">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
            </div>);
}
export default farmerlogin;