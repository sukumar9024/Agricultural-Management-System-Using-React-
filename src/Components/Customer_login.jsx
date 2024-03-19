import React from "react";
import "../Styling/customer_login.css";
function Customerlogin(){
        return(<div> 
            <div class="heading">
        <h2>CUSTOMER LOGIN PANEL</h2>
    </div>
    <div class="content-box">
        <div class="image-icon">
            <img src="./assets/customer register image.jpg" alt="Customer logo"/>
        </div>
        <form class="login-form" action="#" method="post">
            <div class="set-inputs">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div class="set-inputs">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <div class="submit">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>

            </div>);
}
export default Customerlogin;