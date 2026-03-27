import React from "react";
import"./testimonal-card.css";


function TestimonalCard({ name, feedback, image }) {
  return (
    <div className="testimonal-card">
      <img src={image} alt={name} className="testimonal-image" />
      <h3 className="testimonal-name">{name}</h3>
      <p className="testimonal-feedback">{feedback}</p>
    </div>
  );
}   

export default TestimonalCard;
