import React from "react";
import { ReactTyped } from "react-typed";


import imgHero from "../assets/f298b5e0434fd3bfeff706f169a1515f2a8872f2.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen">
      {/* Left Text Block */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm{" "}
   <ReactTyped
  strings={["Sakura 🌸"]}
  typeSpeed={80}
  backSpeed={40}
  loop={false}
/>

        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Currently an undergrad student studying at SUTD, taking on the CyberSecurity Track and AI minor.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://github.com/sakuralam03"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sakuralam"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right Image Block */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={imgHero}
          alt="Sakura illustration"
          className="max-w-xs md:max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
