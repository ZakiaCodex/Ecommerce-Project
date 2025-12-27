import { Link } from "react-router-dom";
import "./Navbar.css";
import logo3 from "../assets/logo3.png";

export default function Navbar() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            src={logo3}
            style={{ width: "90px", height: "90px" }}
            alt="logo"
          />
        </div>

        <div className="navbar">
          <nav>
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
        </div>

        <div className="login">
          <button>
            <Link to="/signup">Signup</Link>
          </button>
          <button style={{ marginLeft: "20px" }}>
            <Link to="/Login">Login</Link>
          </button>
        </div>
      </div>
    </>
  );
}
