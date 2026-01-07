import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) return <p>Cart is empty</p>;

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} x {item.quantity}
          </p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
