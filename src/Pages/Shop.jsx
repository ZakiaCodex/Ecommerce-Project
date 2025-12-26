import ShopHeader from "./ShopHeader";
 import './Shop.css';
// import ShopLayout from "./ShopLayout";

export default function Shop() {
  return (
    <>
      <ShopHeader />

    </>
  );
}
    // {/* FILTER */}
    //     <aside className="filter-box">
    //       <h3>Price Filter</h3>

    //       <input
    //         type="number"
    //         placeholder="Min price"
    //         value={minPrice}
    //         onChange={(e) => setMinPrice(e.target.value)}
    //       />

    //       <input
    //         type="number"
    //         placeholder="Max price"
    //         value={maxPrice}
    //         onChange={(e) => setMaxPrice(e.target.value)}
    //       />

    //       <button
    //         className="reset-btn"
    //         onClick={() => {
    //           setMinPrice("");
    //           setMaxPrice("");
    //           setSearch("");
    //         }}
    //       >
    //         Reset Filters
    //       </button>
    //     </aside>
