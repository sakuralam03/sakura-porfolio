import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";
import ExperienceSection from "../components/ExperienceSection";

const sectionVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <div className="pt-20">
      <Navbar />
      <HeroSection />

      <motion.section
        id="about"
        className="pt-20 px-6"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.section>

      <motion.section
        id="experience"
        className="pt-20 px-6"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <ExperienceSection />
      </motion.section>
    </div>
  );
};

export default Home;
