import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./NavigationBar.css";

function NavigationBar() {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  const loadUser = () => {
    const storedUser = localStorage.getItem("user-info");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUser(); // initial load

    // Listen for login/logout events
    window.addEventListener("user-logged-in", loadUser);
    window.addEventListener("user-logged-out", loadUser);

    return () => {
      window.removeEventListener("user-logged-in", loadUser);
      window.removeEventListener("user-logged-out", loadUser);
    };
  }, []);

  function logout() {
    localStorage.removeItem("user-info");
    setUser(null);

    // Notify Navbar
    window.dispatchEvent(new Event("user-logged-out"));
  }

  return (
    <header className="navbar">
      <div className="logo">🍔 Western Food</div>
        <ul className="nav-links">
          {user ? (
            <li className="dropdown">
              <span className="dropdown-toggle">{user.name}</span>
              <ul className="dropdown-menu">
                <li><Link to="/AccountDetails">Account Details</Link></li>
                <li><button onClick={logout}>Logout</button></li>
              </ul>
            </li>
          ) : (
            <li><Link to="/LoginSignUp">Login/SignUp</Link></li>
          )}

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
