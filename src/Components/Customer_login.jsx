import React, { useState } from "react";
import "../Styling/customer_login.css";
import customerBuy from "../assets/customerBuy.jpg";
import { Link, useNavigate } from "react-router-dom";

function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (email && password) {
      navigate("/products");
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <div>
      <div className="heading">
        <h2>CUSTOMER LOGIN PANEL</h2>
      </div>
      <div className="content-box">
        <div className="image-icon">
          <img src={customerBuy} alt="Customer logo" />
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="set-inputs">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerLogin;
