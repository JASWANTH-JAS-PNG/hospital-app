import React from "react";

function DoctorCard({ name, specialization, experience, image }) {
  return (
    <div className="doctor-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{specialization}</p>
      <p>Experience: {experience}</p>
    </div>
  );
}

export default DoctorCard;