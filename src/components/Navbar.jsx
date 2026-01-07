import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";

import logo3 from "../assets/logo3.png";

export default function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo3} alt="logo" width="90" height="90" />
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>
      </nav>

      <div className="login">
        <NavLink to="/signup" className="btn">
          Signup
        </NavLink>
        <NavLink to="/login" className="btn btn-secondary">
          Login
        </NavLink>
      </div>
    </div>
  );
}
