import { Link } from "react-router-dom";
import "./NavigationBar.css"; // import the CSS for styling

function NavigationBar() {
  return (
    <header className="navbar">
      <div className="logo">🍔 Western Food</div>
      <ul className="nav-links">
        <li><Link to="/LoginSignUp">Login/SignUp</Link></li>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/OrderMenu">Order Menu</Link></li>
        <li><Link to="/OrderHistory">Order History</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li>
          <Link to="/Cart">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default NavigationBar;
