import React, { useState } from "react";
import { email, setEmail } from './email'; // Import email variable and setEmail function from FarmerLogin
import "../Styling/farmerregister.css";

import { useNavigate } from 'react-router-dom';

function FarmerRegister() {
    const [email1,setEmail1]=useState("");
  const [farmerName, setFarmerName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleRegister = () => {
    // Here you can use the email state variable imported from FarmerLogin
    if (email1 && farmerName && password && confirmPassword && address && state && city && pinCode) {
      // Handle registration logic
      // For example, you can set the email state variable using the setEmail function
      setEmail(email1); // Update email variable with the email entered in FarmerRegister component
      navigate('/farmer'); // Navigate to /farmer route
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <div className="heading">
        <h2>FARMER REGISTRATION PANEL</h2>
      </div>
      <div className="reg_content-box">
        <div className="reg_image-icon">
          <img src="./assets/farmer register image.jpg" alt="Farmer logo" />
        </div>

        <div className="reg_set-inputs lefti">
          <label>Farmer Name</label><br/>
          <input type="text" value={farmerName} onChange={(e) => setFarmerName(e.target.value)} /><br/>
        </div>
        <div className="reg_set-inputs righti">
          <label>Email- ID</label><br/>
          <input type="text" value={email1} onChange={(e) => setEmail1(e.target.value)} /><br/>
        </div>
        <div className="reg_set-inputs lefti">
          <label>Password</label><br/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        </div>
        <div className="reg_set-inputs righti">
          <label>Confirm Password</label><br/>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br/>
        </div>
        <div className="reg_set-inputs lefti">
          <label>Address </label><br/>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br/>
        </div>
        <div className="reg_set-inputs righti">
          <label>State </label><br/>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} /><br/>
        </div>
        <div className="reg_set-inputs lefti">
          <label>City </label><br/>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /><br/>
        </div>
        <div className="reg_set-inputs righti">
          <label>Pin Code </label><br/>
          <input type="text" value={pinCode} onChange={(e) => setPinCode(e.target.value)} /><br/>
        </div>

      </div>
      <div className="reg_submit">
        <button type="button" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default FarmerRegister;
