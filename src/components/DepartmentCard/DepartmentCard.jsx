import React from "react";

function DepartmentCard({ name, description }) {
  return (
    <div className="department-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default DepartmentCard;