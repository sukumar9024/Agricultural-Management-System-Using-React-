import React from "react";
import "../Styling/farmerregister.css";
import {Link} from "react-router-dom";
function farmerregister(){
        return(<div> 
            
                <div class="heading ">
                    <h2>FARMER REGISTRATION PANEL</h2>
                </div> 
                <div class="reg_content-box">
                    <div class="reg_image-icon"><img src="./assets/farmer register image.jpg" alt="Farmer logo" />
                    </div>
                
                    <div class="reg_set-inputs lefti">
                        <label>Farmer Name</label><br/>
                        <input type="text" id="farmer-name"/><br/>
                    </div>
                    <div class="reg_set-inputs righti">
                        <label>Email- ID</label><br/>
                        <input type="text" id="Email"/><br/>
                    </div>
                    <div class="reg_set-inputs lefti">
                        <label>Password</label><br/>
                        <input type="password" id="password"/><br/>
                    </div>
                    <div class="reg_set-inputs righti">
                        <label>Confirm Password</label><br/>
                        <input type="password" id="Email"/><br/>
                    </div>
                    <div class="reg_set-inputs lefti">
                        <label>Address </label><br/>
                        <input type="text" id="address"/><br/>
                    </div>
                    <div class="reg_set-inputs righti">
                        <label>State </label><br/>
                        <input type="text" id="state"/><br/>
                    </div>
                    <div class="reg_set-inputs lefti">
                        <label>City </label><br/>
                        <input type="text" id="city"/><br/>
                    </div>
                    <div class="reg_set-inputs righti">
                        <label>Pin Code </label><br/>
                        <input type="text" id="pcode"/><br/>
                    </div>

                </div>
                <div class="reg_submit">
                <Link to ="/login"><button type="submit">Register</button></Link>
                </div>
            </div>

    );
}
export default farmerregister;