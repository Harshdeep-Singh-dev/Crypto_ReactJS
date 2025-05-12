// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // Create this if needed

const HeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay muted loop className="back-video">
        <source src="/videos/140578-775389242.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1>crafted for the Millionaires</h1>
      <h3>
        Crypto is a members-only cryptocurrency broker that enables people to make progress
      </h3>

      <button>DOWNLOAD CRYPTO &nbsp; &rarr;</button>
    </div>
  );
};

export default HeroSection;
