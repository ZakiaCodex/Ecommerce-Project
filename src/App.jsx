//  import './App.css';
 import './Ecommerce.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Footer from "./Pages/Footer";
 import SignupForm from './Pages/Signup';
 import Login from './Pages/login';

function App() {
  return (
    <div>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
         <Route path="/Shop" element={<Shop/>} />
           <Route path="/signup" element={<SignupForm/>}/>
              <Route path="/Login" element={<Login/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
