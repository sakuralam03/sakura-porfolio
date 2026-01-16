import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-heading">Get in Touch</h3>
        <p className="footer-text">Phone: +65 87981341</p>
        <p className="footer-text">Email: sakuralam03@gmail.com</p>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sakura Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
