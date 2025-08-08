import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <button className="menu-btn">☰</button>
      <div className="logo">Little Lemon</div>
      <Link to="/booking" className="cart-icon">🛒+</Link>
    </nav>
  );
}
