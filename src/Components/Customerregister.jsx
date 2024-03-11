import React from "react";
import "../Styling/farmerregister.css";
import {Link} from "react-router-dom";
function customerregister(){
        return(<div class="reg_content-box">
        <div class="reg_image-icon">
            <img src="./assets/customer register image.jpg" alt="Farmer logo"/>
        </div>
        <form action="customer_register.php" method="POST">
            <div class="reg_set-inputs">
                <label for="farmer-name">Customer Name</label><br/>
                <input type="text" id="username" name="username" placeholder="Username" required/><br/>
            </div>
            <div class="reg_set-inputs">
                <label for="Email">Email- ID</label><br/>
                <input type="email" id="email" name="email" placeholder="Email" required/><br/>
            </div>
            <div class="reg_set-inputs">
                <label for="password">Password</label><br/>
                <input type="password" id="password" name="password" placeholder="Password" required/><br/>
            </div>
            <div class="reg_set-inputs">
                <label for="cpassword">Confirm Password</label><br/>
                <input type="password" id="cpassword" name="cpassword" placeholder="Confirm Password" required/><br/>
            </div>
            <div class="reg_set-inputs">
                <label for="address">Address</label><br/>
                <input type="text" id="address" name="address" placeholder="Address" required/><br/>
            </div>
            <div class="reg_set-inputs">
                <label for="state">State</label><br/>
                <input type="text" id="state" name="state" placeholder="State" required/><br/>
            </div>
            <div class="reg_set-inputs">
                <label for="city">City</label><br/>
                <input type="text" id="city" name="city" placeholder="City" required/><br/>
            </div>
            <div class="reg_set-inputs">
                <label for="Mobile">Mobile</label><br/>
                <input type="number" id="mobile" name="mobile" placeholder="Mobile" required/><br/>
            </div>
            <div class="reg_set-inputs">
                <label for="pcode">Pin Code</label><br/>
                <input type="text" id="pincode" name="pincode" placeholder="Pin Code" required/><br/>
            </div>
            <div class="reg_submit">
                <Link to ="/login"><button type="submit">Register</button></Link>
            </div>
        </form>
    </div>);
} 
export default customerregister;