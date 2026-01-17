import React from "react";
import "../styles/OtherProjects.css";
import bannerImg from "../assets/otherprojects.png"; // ✅ banner import

const OtherProjects = () => {
  return (
    <section className="other-section">
      <div className="other-header">
        <img src={bannerImg} alt="Other Projects Banner" className="other-banner" />
        <h1 className="other-title">Other Projects</h1>
      </div>

      {/* Study Planner */}
      <div className="other-project">
        <div className="other-details">
          <h2 className="other-name">Study Planner</h2>
          <p className="other-description">
            I designed a <strong>study planner web app</strong> that helps students plan courses across terms while ensuring they meet graduation requirements. The backend, built with <strong>Express</strong>, validates credits and prerequisites, while <strong>MongoDB</strong> stores personalized study plans by student ID for persistence and retrieval.
          </p>
          <p className="other-description">
            To streamline administration, the app connects to <strong>Google Sheets via the Sheets API</strong>, allowing prerequisites, tracks, and minors to be updated directly in Excel. On the frontend, I developed an intuitive interface that visualizes course selections and integrates seamlessly with backend validation, creating a smooth and reliable planning experience.
          </p>
          <div className="other-links">
            <a href="https://study-planner-3lqc.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/sakuralam03/study-planner" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        </div>
      </div>

      {/* AnonymousDoc AI */}
      <div className="other-project">
        <div className="other-details">
          <h2 className="other-name">AnonymousDoc AI</h2>
          <p className="other-description">
            <strong>AnonymousDoc AI</strong> is a privacy-first document processing webapp that uses intelligent redaction to protect sensitive information in PDFs, contracts, and reports—without breaking context or usability. Users simply upload a document, and our AI scans it for personally identifiable information, legal risk markers, and metadata leaks.
          </p>
          <p className="other-description">
            It then applies smart anonymization and assigns a proprietary <strong>Cookie Score</strong>—a transparency metric that quantifies how well the document preserves utility while minimizing exposure. Whether you're handling NDAs, medical records, or internal reports, AnonymousDoc AI ensures your documents stay useful, shareable, and safe.
          </p>
          <div className="other-links">
            <a href="https://github.com/sakuralam03/anonymousdocai" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>

          {/* Embedded Demo Video */}
          <div className="other-video">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/kWKFREgQVUs"
              title="AnonymousDoc AI Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
