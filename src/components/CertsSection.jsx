// CertsSection.jsx
import React from 'react';
import "../styles/CertsSection.css";
import googlecerts from '../assets/googlecerts.png';
import hexadvent from '../assets/Hexadvent.png';
import tisc from '../assets/TISC.png';
import tikoktechjam from '../assets/Tikoktechjam.png';
import cryptoblockchain from '../assets/cryptoblockchain.png';
const certs = [
  { title: 'CDDC Participant', image: cddc },
  { title: 'Google Cybersecurity Certificate', image: googlecerts },
  { title: 'Hex Advent CTF', image: hexadvent },
  { title: 'TISC CTF Participation', image: tisc },
  { title: 'TikTok TechJam Hackathon', image: tikoktechjam },
  { title: 'Crypto & Blockchain Compliance', image: cryptoblockchain },
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
