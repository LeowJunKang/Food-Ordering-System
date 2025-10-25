import React from "react";
import "./AboutUs.css";
import mission from "./images/mission.jpg"; // your mission image
import story from "./images/story.png"; // placeholder for video thumbnail

function About() {
  return (
    <div className="about-container">
      
      {/* Our Mission */}
      <section className="mission-section">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make delicious, high-quality meals accessible to everyone, 
            anytime, anywhere. We combine fresh ingredients, local flavors, and fast, 
            reliable delivery so that you can enjoy your favorite foods without leaving home. 
            At the heart of our service is the goal to connect food lovers with their community 
            and support local restaurants.
          </p>
        </div>
        <div className="mission-image">
          <img src={mission} alt="Our Mission" />
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="story-image">
          <img src={story} alt="Our Story" />
        </div>
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2020 in the heart of Kuala Lumpur, our food ordering platform started 
            as a small project to help busy people enjoy their favorite meals from local 
            restaurants without the hassle. Over time, we’ve grown into a trusted service 
            connecting thousands of restaurants with hungry customers across the city. 
            Our commitment is simple: tasty food, and supporting our local community.
          </p>
        </div>
      </section>

    </div>
  );
}

export default About;
