import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import CertsSection from "../components/CertsSection";
import VolunteerSection from "../components/VolunteerSection";
import Footer from "../components/Footer";
const sectionVariants = {
  hidden: { opacity: 0, y: 300, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 }
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
        transition={{ duration: 0.6 , ease: "easeOut" }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.section>

      <motion.section
        id="experience"
        className="pt-20 px-6"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={sectionVariants}
      >
        <ExperienceSection />
      </motion.section>


         <motion.section
        id="projects"
        className="pt-20 px-6"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={sectionVariants}
      >
        <ProjectsSection />
      </motion.section>


      
         <motion.section
        id="certs"
        className="pt-20 px-6"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={sectionVariants}
      >
        <CertsSection />
      </motion.section>

          <motion.section
        id="volunteer"
        className="pt-20 px-6"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={sectionVariants}
      >
        <VolunteerSection />
      </motion.section>

            <Footer />
    </div>
  );
};

export default Home;
