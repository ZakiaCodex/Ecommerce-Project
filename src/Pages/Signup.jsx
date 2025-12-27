import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function SignupForm() {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [submited, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Create Account</h2>
      <h3 style={{ color: "white", marginBottom: "10px" }}>
        Please register account detail
      </h3>

      {!submited ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              value={Lastname}
              placeholder="First Name"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              value={Lastname}
              placeholder="Last Name"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" style={{ marginRight: "10px" }} />I have
              read and agree with the <a href="#">terms & condition.</a>
            </label>
          </div>

          <button type="submit">CREATE</button>

          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
              backgroundColor: "#001f3f",
              color: "#fff",
              padding: "15px",
            }}
          >
            Already have account?{" "}
            <a
              style={{
                color: "white",
                marginLeft: "10px",
                border: "2px solid yellow",
                padding: "6px",
              }}
            >
              <Link to="/Login">Login</Link>
            </a>
          </div>
        </form>
      ) : (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Firstname}</td>
              <td>{Lastname}</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
