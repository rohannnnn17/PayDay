// src/user/pages/Login.js
import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom"; // Import for navigation after login
import api from "../../api"; // Import the Axios instance

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Assuming the correct endpoint is /login
      const response = await api.post("/login", { email, password });
      console.log("Login successful:", response.data);

      // Assuming response.data contains a token
      const { token } = response.data;
      // Save token to localStorage or state management solution
      localStorage.setItem("token", token); // Example of saving token

      // Redirect to another page, e.g., dashboard
      navigate("/dashboard"); // Change to your desired route
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
