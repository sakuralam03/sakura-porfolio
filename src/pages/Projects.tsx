

function Projects() {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Featured Projects</h1>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2>🔐 Privacy-First Document Ingestion Pipeline</h2>
        <p>
          Built a modular backend system for multi-format document parsing, with fallback logic,
          metadata tagging, and chunking for NLP pipelines. Designed for extensibility and
          maintainability in banking environments.
        </p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2>🚀 Transformer-Based ML Deployment Toolkit</h2>
        <p>
          Developed artifact-saving utilities for transformer models, enabling version control,
          config swapping, and seamless API integration. Used in production-grade ML workflows.
        </p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2>📚 Teaching Resource Generator</h2>
        <p>
          Created a system to convert technical explanations into reusable flashcards, onboarding
          modules, and hackathon prep kits. Designed for educators and mentors in STEM fields.
        </p>
      </div>
    </section>
  );
}

export default Projects;
