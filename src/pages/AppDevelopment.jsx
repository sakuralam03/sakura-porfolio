import React from "react";
import "../styles/AppDevelopment.css";
import headerImg from "../assets/appdevelopment.png";
import glottoImg from "../assets/GlottoApp.png";

const AppDevelopment = () => {
  return (
    <section className="app-section">
      <div className="app-header">
        <img src={headerImg} alt="App Development Banner" className="app-banner" />
        <h1 className="app-title">Glotto Language Learning App</h1>
      </div>

      <div className="app-content">
        <div className="app-description-block">
          <p className="app-description">
            I contributed to the design of <strong>Glotto</strong>, an interactive language-learning app that combines immersive gameplay, real-world contexts, and smart revision to make learning engaging and practical. My role focused on creating the <strong>Figma design prototype</strong>, where I translated our team’s ideas into a clear, user-friendly interface.
          </p>
          <p className="app-description">
            This included designing the flow for the core features—<strong>AI-MAGE</strong> (object recognition for instant vocabulary learning), the <strong>Adventure Quest Game</strong> (real-life inspired scenarios), and the <strong>Flashcard System</strong> (spaced repetition with pronunciation grading). The Figma prototype helped our team visualize the app’s functionality, refine user experience, and communicate the concept effectively.
          </p>
        </div>

        <div className="app-visuals">
          <img src={glottoImg} alt="Glotto App Infographic" className="app-image" />
        </div>

        <div className="app-video">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/dUMAY7Z7r4k"
            title="Glotto App Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;
