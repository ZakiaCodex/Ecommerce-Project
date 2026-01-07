import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import "../styles/checkout.css";

export default function Checkout() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOrder = () => {
    alert("🎉 Thanks for your order!");
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      {/* LEFT SIDE */}
      <div className="checkout-left">
        <h2>Customer Login</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="checkout-form">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Continue</button>
          </form>
        ) : (
          <p className="success">Logged in as {formData.email}</p>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="checkout-right">
        <h2>Order Summary</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="order-item" key={item.id}>
                <div>
                  <h4>{item.title}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>
                <div>
                  <p>Rs {item.price * item.quantity}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            <hr />

            <div className="order-total">
              <h3>Total</h3>
              <h3>Rs {total}</h3>
            </div>

            <button className="place-order-btn" onClick={handleOrder}>
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}
