// ProjectsSection.jsx
import React from 'react';
import "../styles/ProjectsSection.css";

// ✅ Import each image properly
import webDevImg from "../assets/dcdbd311b1424b0d2e063f1dd82a65715cf6de04.png";
import cyberSecImg from "../assets/d738bb246dfa6444676ea523629ed3ca0c4e1b0a.png";
import gameDevImg from "../assets/101ff07299229563730e0bb60c6f5610e77851d8.png";
import appDevImg from "../assets/6a5139c32c47b37421efef6da39c0d9104e89a18.png";
import otherProjImg from "../assets/161479c00fcb23413951c68e0ab638903df5f9f5.png";

const projects = [
  {
    title: 'Web Development Projects',
    image: webDevImg,
    link: '/webdevelopment',
  },
  {
    title: 'CyberSecurity Projects',
    image: cyberSecImg,
    link: '/cybersecurity',
  },
  {
    title: 'Game Development Projects',
    image: gameDevImg,
    link: '/gamedevelopment',
  },
  {
    title: 'App Development Projects',
    image: appDevImg,
    link: '/appdevelopment',
  },
  {
    title: 'Other Projects',
    image: otherProjImg,
    link: '/otherprojects',
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-name">{project.title}</h3>
            <a href={project.link} className="project-button">See All</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
