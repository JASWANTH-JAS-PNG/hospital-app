import React from "react";
import "./hero.css";

function Hero({ title, subtitle, buttonText, image }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="hero-btn">{buttonText}</button>
      </div>
      <div className="hero-image">
        <img src={image} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;

