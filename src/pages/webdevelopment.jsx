import React from "react";
import "../styles/WebDevelopment.css";
import headerImg from "../assets/webdevelopment.png";
import chiyodaImg from "../assets/chiyodakohanwensite.png";
import upsilonImg from "../assets/upsilonaiwebsite.png";

const WebDevelopment = () => {
  return (
    <section className="webdev-section">
      <div className="webdev-header">
        <img src={headerImg} alt="Web Development Banner" className="webdev-banner" />
        <h1 className="webdev-title">Web Development Projects</h1>
      </div>

      <div className="webdev-project">
        <img src={chiyodaImg} alt="Chiyoda Kohan Website" className="webdev-image" />
        <div className="webdev-details">
          <h2 className="webdev-name">Chiyoda Kohan Singapore</h2>
          <p className="webdev-description">
            I built and deployed Chiyoda Kohan Singapore’s official company website from the ground up, handling both frontend and backend workflows as well as hosting. The site features a responsive, modular Next.js frontend optimized for clarity and performance, with secure contact form handling via Formspree to avoid server overhead. I deployed the project on Vercel and managed DNS configuration and domain propagation for their branded domain, <strong>chiyodakohan.sg</strong>, delivering a polished and professional online presence.
          </p>
          <div className="webdev-links">
            <a href="https://chiyodakohan.sg/" target="_blank" rel="noopener noreferrer">Website Link</a>
            <a href="https://github.com/sakuralam03/chiyodakohanwebsite" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>
      </div>

      <div className="webdev-project">
        <img src={upsilonImg} alt="Upsilon AI Website" className="webdev-image" />
        <div className="webdev-details">
          <h2 className="webdev-name">Upsilon AI</h2>
          <p className="webdev-description">
            I built the Upsilon AI website using React and Vite, which gave me valuable hands‑on experience in modern frontend development. Through this project, I learned how to structure a clean and scalable folder architecture, making the codebase more modular and maintainable. I also gained practical knowledge in hosting workflows, from configuring builds to deploying the site live, which helped me understand the full lifecycle of a web application—from development to deployment.
          </p>
          <div className="webdev-links">
            <a href="https://upsilonai.vercel.app/" target="_blank" rel="noopener noreferrer">Website Link</a>
            <a href="https://github.com/sakuralam03/upsilonai" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
