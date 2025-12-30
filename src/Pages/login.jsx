import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>

          <div className="auth-footer">
            Don’t have an account?
            <Link to="/signup"> Signup</Link>
          </div>
        </form>
      ) : (
        <p>Email: {formData.email}</p>
      )}
    </div>
  );
}
