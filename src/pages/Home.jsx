import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="pt-20">
      <Navbar />
      <HeroSection />

      <section id="about" className="pt-20 px-6">
        About section
      </section>

      <section id="experience" className="pt-20 px-6">
        Experience section
      </section>

      <section id="projects" className="pt-20 px-6">
        Projects section
      </section>

      <section id="certs" className="pt-20 px-6">
        Certs section
      </section>

      <section id="volunteer" className="pt-20 px-6">
        Volunteer section
      </section>
    </div>
  );
};

export default Home;
