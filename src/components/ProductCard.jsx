import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { cartcontext } from "../components/ThemeContext";

export default function ProductCard({ item }) {
  const { cart, setCart } = useContext(cartcontext);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    setCart([item]);
    navigate("/Checkout");
  };
  console.log(item);
  return (
    <div className="card">
      <div className="img-box">
        <img src={item.img} alt={item.title} />
      </div>

      <h3>{item.title}</h3>
      <p className="price">Rs {item.price}</p>

      {/* Add to Cart */}
      <button className="cart-btn" onClick={() => setCart(item)}>
        <MdShoppingCart /> Add to Cart
      </button>

      {/* Buy Now */}
      <button className="buy-btn" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
}
