import React from "react";
import { motion } from "framer-motion";
import "../styles/AboutSection.css";
import imgAbout from "../assets/0293ec588352e21d3ab5726ed69e9d5d62ee4f9c.png";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      {/* Left Image Block */}
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={imgAbout}
          alt="Sakura walking with umbrella"
          className="about-img"
        />
      </motion.div>

      {/* Right Text Block */}
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="about-heading">About me</h2>
        <h3 className="about-subheading">Introduction</h3>
        <p className="about-description">
          I’m a student developer with experience in full-stack projects and a growing interest in cybersecurity.
          My goal is to design applications that are not only functional but also secure, empowering users with trust and transparency.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
