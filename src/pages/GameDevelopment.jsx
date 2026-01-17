import React from "react";
import "../styles/GameDevelopment.css";
import headerImg from "../assets/gamedevelopment.png";

const GameDevelopment = () => {
  return (
    <section className="game-section">
      <div className="game-header">
        <img src={headerImg} alt="Game Development Banner" className="game-banner" />
        <h1 className="game-title">Sustainability Game</h1>
      </div>

      <div className="game-content">
        <p className="game-description">
          I built the core foundation of the game using <strong>Phaser.js</strong>, establishing the essential mechanics and architecture that drive the entire experience. The game engine was initialized through a modular <code>GameScene</code> class based on <code>Phaser.Scene</code>, with clearly defined <code>preload</code>, <code>create</code>, and <code>update</code> lifecycle methods to handle assets, logic, and player movement.
        </p>
        <p className="game-description">
          A reusable Player system was implemented, featuring bin-swapping controls (<strong>G, Y, B</strong> keys), movement via arrow keys and WASD, trash collection and sorting feedback, as well as bin meter tracking and drop-off mechanics. To manage waste dynamically, I integrated a trash spawning system that prevents overlap with shops, classifies trash types through a <code>TrashManager</code>, and handles collision detection with sorting feedback.
        </p>
        <p className="game-description">
          Interactive shops and drop zones were placed for recycling, donation, and incineration, each with tailored drop zone logic, CO₂ tracking for incineration, and visual feedback supported by cooldown timers. A responsive HUD and feedback system was designed to display bin meter bars with color-coded fills, a money tracker with upgrade prompts, CO₂ levels, and real-time feedback messages for sorting and drop-offs.
        </p>
        <p className="game-description">
          Finally, I developed a modular upgrade system with configurable cost, name, and effect parameters, complete with <code>apply()</code> logic, dynamic rendering of upgrade buttons, purchase validation, and state tracking to enhance gameplay progression.
        </p>

        {/* Embedded YouTube Demo */}
        <div className="game-video">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/aLVJFm7gKr0"
            title="Sustainability Game Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="game-links">
          <a href="https://susgame-ten.vercel.app/" target="_blank" rel="noopener noreferrer">Play Game</a>
          <a href="https://github.com/sakuralam03/wastetoenergygame" target="_blank" rel="noopener noreferrer">See Repo</a>
        </div>
      </div>
    </section>
  );
};

export default GameDevelopment;
