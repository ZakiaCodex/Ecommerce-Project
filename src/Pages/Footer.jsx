
 import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left section */}
        <div className="footer-section">
          <h3>My Website</h3>
          <p>
            We provide quality services and reliable solutions for your
            business growth.
          </p>
        </div>

        {/* Middle section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +92 300 1234567</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
  
}
