import React, { useState } from "react";
import { Link } from "react-router-dom";   // ✅ import Link from react-router-dom
import imgLogo from "../assets/b3e9c822eba4e3eca989f7257e890b4100f282f3.png";
import "../styles/NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Title */}
        <div className="navbar-logo">
          {/* Clicking logo goes back to Home */}
          <Link to="/">
            <img src={imgLogo} alt="Sakura Logo" />
            <span>Sakura</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li> {/* ✅ always goes back to Home */}
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
          <li><Link to="/">Home</Link></li> {/* ✅ mobile menu also has Home */}
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
