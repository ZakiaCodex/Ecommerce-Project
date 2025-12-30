import React, { useState } from "react";
import "../styles/Checkout.css";
export default function Checkout() {
  const [Firstname, setFirstname] = useState("");
  //   const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submited, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("thanks your oreder is created");
  };

  return (
    <>
      <div className="parent1">
        <div className="card1">
          <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
            <h2>Shopping Cart</h2>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="firstName">First Name</label>
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" style={{ marginRight: "10px" }} />I
                  have read and agree with the{" "}
                  <a href="#">terms & condition.</a>
                </label>
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "#FFD90C", color: "black" }}
              >
                Proceed to Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
