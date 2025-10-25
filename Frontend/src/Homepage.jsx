import React from "react";
import "./Homepage.css";
import heroImage from "./images/hero.jpg";
import burgerImage from "./images/burger.jpg";
import pizzaImage from "./images/pizza.jpg";
import friesImage from "./images/fries.jpg";

function Homepage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>🍔 Welcome to Western Food</h1>
          <p>Delicious, freshly made meals that bring the taste of Western cuisine to you!</p>
          <button onClick={() => window.location.href="/OrderMenu"}>Order Now</button>
        </div>
        <img src={heroImage} alt="Delicious food" className="hero-img" />
      </section>

      {/* Featured Menu */}
      <section className="featured">
        <h2>Our Popular Dishes</h2>
        <div className="featured-items">
          <div className="item-card">
            <img src={burgerImage} alt="Burger" />
            <h3>Juicy Burger</h3>
            <p>Classic beef burger with fresh veggies and cheese.</p>
          </div>
          <div className="item-card">
            <img src={pizzaImage} alt="Pizza" />
            <h3>Cheesy Pizza</h3>
            <p>Hot pizza topped with mozzarella and pepperoni.</p>
          </div>
          <div className="item-card">
            <img src={friesImage} alt="Fries" />
            <h3>Crispy Fries</h3>
            <p>Golden fries perfect as a snack or side dish.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
