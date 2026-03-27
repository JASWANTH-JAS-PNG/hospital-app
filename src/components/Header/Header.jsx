import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const topBarStyle = {
  backgroundColor: "#020202",
  color: "#fff",
  padding: "8px 32px",
  fontSize: "14px",
};

const navStyle = {
  display: "flex",
  alignItems: "center",
  gap: "32px",
  padding: "16px 32px",
  backgroundColor: "#2a5c8e",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "500",
  letterSpacing: "0.5px",
};

function Header() {
  return (
    <header>
      <div style={topBarStyle}>
        <span>📞 975464******</span>
      </div>
      <nav style={navStyle}>
        <span style={{ color: "#fff", fontSize: "22px", fontWeight: "700", marginRight: "auto" }}>
          🏥 MediCare
        </span>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;