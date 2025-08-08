import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section>
      <div className="hero">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking" className="btn-primary">Reserve a table</Link>
      </div>

      <div className="delivery-section">
        <h3>ORDER FOR DELIVERY!</h3>
        <div className="delivery-tags">
          <button>Lunch</button>
          <button>Mains</button>
          <button>Desserts</button>
          <button>A La Carte</button>
          <button>Specials</button>
        </div>
        <div className="menu-items">
          <div>
            <h4>Greek Salad</h4>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style dressing.</p>
            <span>$12.99</span>
          </div>
          <div>
            <h4>Bruschetta</h4>
            <p>Our Bruschetta is made from grilled bread with garlic.</p>
            <span>$7.99</span>
          </div>
          <div>
            <h4>Grilled Fish</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
