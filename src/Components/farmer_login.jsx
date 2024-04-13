// FarmerLogin.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../Styling/customer_login.css";
import image from "../assets/farmImg.jpg";
import Customer from './Customer'; // Import the Customer component
import { email, setEmail } from './email'; // Import email variable and setEmail function

function FarmerLogin() {
  const [email1,setEmail1]=useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleLogin = () => {
    if (email1 && password) {
      // Redirect to /farmer when email and password are filled
      setEmail(email1);
      navigate('/farmer');
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <div>
      <div className="heading">
        <h2>FARMER LOGIN PANEL</h2>
      </div>
      <div className="content-box">
        <div className="image-icon">
          <img src={image} alt="Farmer logo" />
        </div>
        <form className="login-form">
          <div className="set-inputs">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)} // Use setEmail to update email variable
              required
            />
          </div>
          <div className="set-inputs">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="submit">
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FarmerLogin;
export {email};