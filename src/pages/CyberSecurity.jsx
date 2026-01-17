import React from "react";
import "../styles/CyberSecurity.css";
import vulnImg from "../assets/vulnerabilityscanner.png";
import bannerImg from "../assets/cybersecurity.png"; // ✅ new banner image

const CyberSecurity = () => {
  return (
    <section className="cyber-section">
      <div className="cyber-header">
        <img src={bannerImg} alt="CyberSecurity Banner" className="cyber-banner" />
        <h1 className="cyber-title">CyberSecurity Projects</h1>
      </div>

      {/* Wi-Fi Security Analyzer */}
      <div className="cyber-project">
        <div className="cyber-details">
          <h2 className="cyber-name">Wi‑Fi Security Analyzer</h2>
          <p className="cyber-description">
            I developed <strong>Wi‑Fi Security Analyzer</strong>, an Android app built with Android Studio that scans nearby Wi‑Fi networks, analyzes their security protocols, and reports risk levels (Low, Medium, High) for educational and awareness purposes. The app uses Android Wi‑Fi APIs to display SSID, BSSID, signal strength, and security type, while a custom risk analysis system classifies networks based on standards like WEP, WPA/WPA2, and WPA3.
          </p>
          <p className="cyber-description">
            I integrated cryptographic utilities via JCA/BouncyCastle for hashing and fingerprinting, implemented a clean RecyclerView UI for listing networks, and handled modern Android permission requirements. This project taught me how to combine network scanning, crypto utilities, and UI design into a cohesive tool that helps users understand Wi‑Fi security.
          </p>
          <div className="cyber-links">
            <a href="https://github.com/sakuralam03/WifiSecurityAnalyser" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        </div>

        <div className="cyber-video">
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/XOgjH4sPh8o"
            title="Wi-Fi Analyzer Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Website Vulnerability Scanner */}
      <div className="cyber-project">
        <div className="cyber-details">
          <h2 className="cyber-name">Website Vulnerability Scanner</h2>
          <p className="cyber-description">
            I built a modular vulnerability scanner designed to teach and demonstrate web security concepts using OWASP Juice Shop as a target. The pipeline automatically discovers endpoints, fingerprints technologies, and tests for common issues like SQL injection, XSS, and CSRF.
          </p>
          <p className="cyber-description">
            Findings are translated into clear, structured reports with evidence, risk scores, and reproducible curl commands. By breaking the system into standalone modules (<code>Crawler → Fingerprinter → Harness → Heuristics Engine → Reporter</code>), the project highlights both technical depth and educational value—showing how complex security analysis can be made transparent, reusable, and approachable for learners.
          </p>
          <div className="cyber-links">
            <a href="https://github.com/sakuralam03/vulnscanner" target="_blank" rel="noopener noreferrer">Github Repo </a>
          </div>
        </div>

        <div className="cyber-visuals">
          <img src={vulnImg} alt="Vulnerability Scanner Screenshot" className="cyber-image" />
        </div>
      </div>
    </section>
  );
};

export default CyberSecurity;
