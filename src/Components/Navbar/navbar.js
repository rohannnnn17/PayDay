import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>PayDay</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/login">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/paydaycontact">Contact</a>
        </li>
      </ul>
      <div className="navbar-auth">
        <a href="/login" className="auth-link">
          Login
        </a>
        <a href="/register" className="auth-link">
          Register
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
