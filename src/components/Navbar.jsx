import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>

      <div className="login">
        <Link to="/signup" className="btn">
          Signup
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>
      </div>
    </div>
  );
}
