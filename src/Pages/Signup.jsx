import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
      <h2>Create Account</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="auth-field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="auth-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="auth-btn">
            CREATE
          </button>

          <div className="auth-footer">
            Already have an account?
            <Link to="/login"> Login</Link>
          </div>
        </form>
      ) : (
        <p>{formData.email}</p>
      )}
    </div>
  );
}
