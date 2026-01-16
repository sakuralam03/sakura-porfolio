import React from "react";
import { ReactTyped } from "react-typed";
import imgHero from "../assets/f298b5e0434fd3bfeff706f169a1515f2a8872f2.png";
import "../styles/HeroSection.css"; //

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Left Text Block */}
      <div className="hero-text">
        <h1 className="hero-heading">
          Hi, I'm{" "}
          <ReactTyped
            strings={["Sakura 🌸"]}
            typeSpeed={80}
            backSpeed={40}
            loop={true}
            className="typed-text"
          />
        </h1>
        <p className="hero-subtext">
          Currently an undergrad student studying at SUTD, taking on the CyberSecurity Track and AI minor.
        </p>
        <div className="hero-links">
          <a
            href="https://github.com/sakuralam03"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button github"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sakuralam"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button linkedin"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right Image Block */}
      <div className="hero-image">
        <img
          src={imgHero}
          alt="Sakura illustration"
          className="hero-img"
        />
      </div>
    </section>
  );
};

export default HeroSection;
