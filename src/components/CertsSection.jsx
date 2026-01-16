// CertsSection.jsx
import React from 'react';
import "../styles/CertsSection.css";

const certs = [
  { title: 'CDDC Participant', image: 'src/assets/cddc.png' },
  { title: 'Google Cybersecurity Certificate', image: 'src/assets/googlecerts.png' },
  { title: 'Hex Advent CTF', image: 'src/assets/Hexadvent.png' },
  { title: 'TISC CTF Participation', image: 'src/assets/TISC.png' },
  { title: 'TikTok TechJam Hackathon', image: 'src/assets/Tikoktechjam.png' },
  { title: 'Crypto & Blockchain Compliance', image: 'src/assets/cryptoblockchain.png' },
];

const CertsSection = () => {
  return (
    <section className="certs-section">
      <h2 className="certs-title">Hackathons, CTFs & Certifications</h2>
      <div className="certs-grid">
        {certs.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <p className="cert-label">{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertsSection;
