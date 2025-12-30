import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div className="card">
      <div className="img-box">
        <img src={item.img} alt={item.title} />
      </div>

      <h3>{item.title}</h3>
      <p className="price">Rs {item.price}</p>

      <button className="cart-btn">
        <MdShoppingCart /> Add to Cart
      </button>

      <Link to="/checkout" className="buy-btn">
        Buy Now
      </Link>
    </div>
  );
}
