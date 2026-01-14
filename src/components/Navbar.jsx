import React, { useState } from "react";
import imgLogo from "../assets/b3e9c822eba4e3eca989f7257e890b4100f282f3.png";
import "../styles/NavBar.css"; // ✅ import CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Title */}
        <div className="navbar-logo">
          <img src={imgLogo} alt="Sakura Logo" />
          <span>Sakura</span>
        </div>

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certs">Certs</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="navbar-dropdown">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certs">Certs</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
