import React from "react";
import "../styles/ExperienceSection.css";

const experiences = [
  {
    title: "Fullstack Developer – SUTD",
    date: "October 2025 – January 2026",
    bullets: [
      "Designed a study planner web app that allowed students to plan courses across terms.",
      "Connected Google Sheets via Sheets API so administrators could update tracks and view them directly.",
      "Developed backend logic to evaluate graduation criteria and validate requirements.",
      "Integrated MongoDB to store personalized study plans by student ID.",
      "Created a security system with role-based data selections and validation.",
      "Built a resume builder with a review panel for standardized resume formatting.",
      "Implemented login and session management with JWT tokens, password reset via NodeMailer.",
    ],
    skills: [
      "React", "Express", "MongoDB", "HTML", "CSS", "Backend Iteration", "Javascript", "Hosting Fullstack Project"
    ],
  },
  {
    title: "Web Development Intern – Upsilon AI",
    date: "August – December 2025",
    bullets: [
      "Developed and refined React + Node.js components for the company’s website.",
      "Collaborated on Figma designs for a partner product, translating iterations into prototypes.",
      "Gained hands-on experience in frontend workflows and design iteration.",
    ],
    skills: [
      "React", "Node.js", "Frontend Iteration", "HTML", "CSS", "Figma"
    ],
  },
  {
    title: "Fullstack Development Intern – Chiyoda Kohan Singapore",
    date: "October 2025",
    bullets: [
      "Built and deployed the company’s official website from scratch.",
      "Developed a responsive frontend using Next.js, optimized for clarity and performance.",
      "Implemented backend form handling via Formspree for secure submissions.",
      "Configured DNS and deployed the site to chiyodakohan.sg via Vercel.",
    ],
    skills: [
      "React", "Javascript", "HTML", "CSS", "Hosting Domain", "Node.js"
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">Work or Relevant Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-date">{exp.date}</p>
            <ul className="experience-bullets">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="experience-skills">
              <strong>Skills picked up:</strong> {exp.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
