import React, { useState } from "react";
import axios from "axios";
import "../Styling/customer_login.css";

function FarmerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("farmer_login.php", {
        email: email,
        password: password,
      });
      
      // Assuming your PHP backend returns a success message upon successful login
      if (response.data === "success") {
        // Redirect to another page upon successful login
        window.location.href = "/dashboard";
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="heading">
        <h2>FARMER LOGIN PANEL</h2>
      </div>
      <div className="content-box">
        <form className="login-form" onSubmit={handleSubmit}>
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
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default FarmerLogin;
