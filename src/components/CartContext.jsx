import { createContext, useState } from "react";

// Create context
export const CartContext = createContext();

// Context provider component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prev) => {
      // Check if product already in cart
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        // Increase quantity if exists
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        // Add new product with quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Optional: remove from cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
