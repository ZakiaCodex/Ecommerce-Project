import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // For programmatic navigation
import { CartContext } from "../components/CartContext";

export default function ProductCard({ item }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Function to handle Buy Now
  const handleBuyNow = () => {
    addToCart(item); // Add product to cart
    navigate("/Checkout"); // Navigate to checkout page
  };

  return (
    <div className="card">
      <div className="img-box">
        <img src={item.img} alt={item.title} />
      </div>

      <h3>{item.title}</h3>
      <p className="price">Rs {item.price}</p>

      {/* Add to Cart */}
      <button className="cart-btn" onClick={() => addToCart(item)}>
        <MdShoppingCart /> Add to Cart
      </button>

      {/* Buy Now */}
      <button className="buy-btn" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
}
