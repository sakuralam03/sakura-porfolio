// ProjectsSection.jsx
import React from 'react';
import "../styles/ProjectsSection.css";
import WebDevelopment from "../pages/webdevelopment";


const projects = [
  {
    title: 'Web Development Projects',
    image: 'src/assets/dcdbd311b1424b0d2e063f1dd82a65715cf6de04.png',
    link: '/webdevelopment',
  },
  {
    title: 'CyberSecurity Projects',
    image: 'src/assets/d738bb246dfa6444676ea523629ed3ca0c4e1b0a.png',
    link: '/cybersecurity',
  },
  {
    title: 'Game Development Projects',
    image: 'src/assets/101ff07299229563730e0bb60c6f5610e77851d8.png',
    link: '/gamedevelopment',
  },
  {
    title: 'App Development Projects',
    image: 'src/assets/6a5139c32c47b37421efef6da39c0d9104e89a18.png',
    link: '/appdevelopment',
  },
  {
    title: 'Other Projects',
    image: 'src/assets/161479c00fcb23413951c68e0ab638903df5f9f5.png',
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
