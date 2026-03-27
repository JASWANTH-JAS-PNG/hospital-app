import React, { useState } from "react";
import "./about.css";

function About() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      <section className="about-page">
        <div className="about-hero">
          <h1>About Us</h1>
          <p>We are a leading hospital committed to providing high-quality healthcare to our patients. Our team of experts is dedicated to ensuring patient satisfaction and delivering exceptional results.</p>
          <p>Our mission is to innovate and excel in our field, constantly striving to improve and exceed expectations. We value integrity, teamwork, and excellence in everything we do.</p>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide compassionate, high-quality healthcare while
          advancing medical knowledge and community well-being.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          <div className="team-member">
            <img src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=200" alt="Dr. Smith" />
            <h3>Dr. Smith</h3>
            <p>Cardiologist</p>
          </div>
          <div className="team-member">
            <img src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg?w=200" alt="Dr. Emily" />
            <h3>Dr. Emily</h3>
            <p>Neurologist</p>
          </div>
          <div className="team-member">
            <img src="https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-coat_23-2148868893.jpg?w=200" alt="Dr. John" />
            <h3>Dr. John</h3>
            <p>Pediatrician</p>
          </div>
        </div>

        <div className="about-video">
          <button className="play-btn" onClick={() => setShowVideo(true)}>
            ▶ Watch Our Story
          </button>
        </div>
      </section>

      {showVideo && (
        <div className="video-modal">
          <div className="video-content">
            <span className="close" onClick={() => setShowVideo(false)}>✖</span>
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/watch?v=abc123xyz"
              title="Hospital Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;