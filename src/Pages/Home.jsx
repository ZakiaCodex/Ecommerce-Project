import { useState } from "react";
import { products } from "./Product";
import { MdShoppingCart } from "react-icons/md";
import SliderComponent from "./SliderComponent";

export default function Home() {

  return (
   <>
<SliderComponent/>
   
    
 <div className="parent">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.img} style={{ width: "15vw" }} />
          <h3 style={{ color: "black", fontSize: "16px" }}>{item.title}</h3>
          <h3 style={{ color: "black", fontSize: "15px" }}>Rs {item.price}</h3>
          <button className="buy">Buy Now</button>
             <button className="cart-btn">
                          <MdShoppingCart /> Add to Cart
                        </button>
        </div>
      ))}
    </div>
  
    </>
  );
}
