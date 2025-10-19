import { Link } from "react-router-dom";
import "./NavigationBar.css"; // import the CSS for styling

function NavigationBar() {
  return (
    <header className="navbar">
      <div className="logo">🍔 Foodie</div>
      <ul className="nav-links">
        <li><Link to="/LoginSignUp">Login/SignUp</Link></li>
        <li><a href="/">Home</a></li>
        <li><Link to="/OrderMenu">Order Menu</Link></li>
        <li><Link to="/OrderHistory">Order History</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
         <li>
          <a href="#"><i className="fas fa-shopping-cart"></i></a>
        </li>
      </ul>
    </header>
  );
}

export default NavigationBar;
