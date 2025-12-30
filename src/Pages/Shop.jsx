import { useState, useMemo } from "react";
import { products } from "../components/Product";
import ProductCard from "../components/ProductCard";
import "../styles/Product.css";
import "../styles/Shop.css";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      return (
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (!minPrice || item.price >= Number(minPrice)) &&
        (!maxPrice || item.price <= Number(maxPrice)) &&
        (!color || item.color === color) &&
        (!brand || item.Brand.toLowerCase().includes(brand.toLowerCase()))
      );
    });
  }, [search, minPrice, maxPrice, color, brand]);

  return (
    <>
      {/* SEARCH */}
      <div className="search-box">
        <h2>Search Products</h2>
        <input
          type="text"
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
              setSearch("");
              setMinPrice("");
              setMaxPrice("");
              setColor("");
              setBrand("");
            }}
          >
            Reset Filters
          </button>

          {/* COLOR FILTER */}
          <div className="color-filter">
            <h3>Filter by Color</h3>
            <div className="color-options">
              {["black", "green", "yellow"].map((c) => (
                <span
                  key={c}
                  className={`color-circle ${color === c ? "active" : ""} ${c}`}
                  onClick={() => setColor(c)}
                />
              ))}
              <span
                className={`color-circle all ${color === "" ? "active" : ""}`}
                onClick={() => setColor("")}
              >
                All
              </span>
            </div>
          </div>

          {/* BRAND */}
          <div className="Bybrand">
            <h3>By Brand</h3>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </aside>

        {/* PRODUCTS */}
        <div className="parent">
          {filteredProducts.length === 0 && (
            <p className="empty">No products found</p>
          )}

          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
