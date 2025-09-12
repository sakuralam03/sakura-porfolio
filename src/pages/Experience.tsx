

function Experience() {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Professional Experience</h1>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2>💼 Workflow Architect & ML Deployment Lead</h2>
        <p>
          Designed modular ingestion pipelines for multi-format documents, enabling fallback logic,
          metadata tagging, and privacy-first processing. Led deployment of transformer-based ML models
          with versioning, config swapping, and API integration.
        </p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2>🧠 Educator & Mentor</h2>
        <p>
          Created reusable teaching resources for CAD and software development. Mentored students in
          modular thinking, debugging strategies, and creative problem-solving. Scaffolded onboarding
          modules and flashcards for hackathon prep.
        </p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2>🔧 Backend Strategist</h2>
        <p>
          Built deployment-ready model artifact utilities with a focus on maintainability and extensibility.
          Documented workflows for internal teaching, emphasizing privacy and long-term sustainability.
        </p>
      </div>
    </section>
  );
}

export default Experience;
