import { products } from "../components/Product";
import ProductCard from "../components/ProductCard";
import SliderComponent from "../assets/SliderComponent";

export default function Home() {
  return (
    <>
      <SliderComponent />

      <div className="parent">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
