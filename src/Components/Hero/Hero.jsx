import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="hero">
      <div className="logo-container">
        <img src="./src/assets/logo.png" alt="Logo" />
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="nav-container desktop-only">
        <button>Home</button>
        <button>About</button>

        <div className="services">
          <button
            className="services-btn"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services <span className="arrow"><img src='./src/assets/arrow.alt.left_24px.png'/></span>
          </button>

          {servicesOpen && (
            <div className="services-dropdown">
              <button>Web Development</button>
              <button>SEO Optimization</button>
              <button>UI/UX Design</button>
              <button>Digital Marketing</button>
            </div>
          )}
        </div>

        <button>SEO Case Study</button>
        <button>Contact Us</button>
      </div>

      <div className="contact-container desktop-only">
        <img src="./src/assets/call.png" alt="Call" />
        <p>+8801404282727</p>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="nav-container">
          <button>Home</button>
          <button>About</button>

          <div className="services">
            <button
              className="services-btn"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <span className="arrow"><img src='./src/assets/arrow.alt.left_24px.png'/></span>
            </button>

            {servicesOpen && (
              <div className="services-dropdown">
                <button>Web Development</button>
                <button>SEO Optimization</button>
                <button>UI/UX Design</button>
                <button>Digital Marketing</button>
              </div>
            )}
          </div>

          <button>SEO Case Study</button>
          <button>Contact Us</button>
        </div>

        <div className="contact-container">
          <img src="./src/assets/call.png" alt="Call" />
          <p>+8801404282727</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
