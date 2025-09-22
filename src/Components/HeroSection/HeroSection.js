import React from "react";
import "./HeroSection.css";
import image from "./image.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Make your business powerful with Shade.</h1>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
          <div className="hero-buttons">
            <button className="quote-btn">Get A Free Quote</button>
            <span className="watch-video">WATCH HOW WE CAN HELP</span>
          </div>
        </div>

        <div className="hero-image">
          <img src={image} alt="Consultant" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
