import "./styles/global.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Footer from "./Pages/Footer";
import SignupForm from "./Pages/Signup";
import Login from "./Pages/login";
import Checkout from "./components/Checkout";
import { CartProvider } from "./components/ThemeContext";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      <ProductCard />
      <Footer />
    </CartProvider>
  );
}

export default App;
