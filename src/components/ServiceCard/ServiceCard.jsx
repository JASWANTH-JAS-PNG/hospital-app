
import React from "react";

function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h2 className="service-title">{title}</h2>
      <p className="service-description">{description}</p>
    </div>
  );
}

export default ServiceCard;
