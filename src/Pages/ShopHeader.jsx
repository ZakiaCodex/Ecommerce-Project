import { useState, useEffect } from "react";
import { MdShoppingCart } from "react-icons/md";
import { products } from "./Product";
import "./Shop.css";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    const result = products.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesMin = !minPrice || item.price >= Number(minPrice);
      const matchesMax = !maxPrice || item.price <= Number(maxPrice);
      return matchesSearch && matchesMin && matchesMax;
    });

    setFiltered(result);
  }, [search, minPrice, maxPrice]);

  return (
    <>
      {/* SEARCH */}
      <div className="search-box">
        <h2>Search Products</h2>
        <input
          type="search"
          placeholder="Search phones, laptops, accessories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="page">
        {/* FILTER */}
        <aside className="filter-box">
          <h3>Price Filter</h3>

          <input
            type="number"
            placeholder="Min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          <button
            className="reset-btn"
            onClick={() => {
              setMinPrice("");
              setMaxPrice("");
              setSearch("");
            }}
          >
            Reset Filters
          </button>
        </aside>

        {/* PRODUCTS */}
        <div className="parent">
          {filtered.length === 0 && (
            <p className="empty">No products found</p>
          )}

          {filtered.map((item) => (
            <div className="card" key={item.id}>
              <div className="img-box">
                <img src={item.img} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p className="price">Rs {item.price}</p>

              <button className="cart-btn">
                <MdShoppingCart /> Add to Cart
              </button>

              <button className="buy-btn">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
