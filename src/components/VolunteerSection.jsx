import "../styles/VolunteerSection.css";

import webDevImg from "../assets/c0e0d40f9c3dbf92b1c8b3c73b8455368360b099.png";
import designHackImg from "../assets/b13e21af3ff90931e3e464582f9fc7dc1e2b7712.png";
import cyberImg from "../assets/7685ee6d991e1634c3f6e6e819af8c2f2cf5d9d4.png";

const VolunteerSection = () => {
  return (
    <section className="Volunteer-section">
      <h2 className="Volunteer-heading">Volunteer Experience</h2>

      <div className="experience-list">

        {/* Web Development Facilitator */}
        <div className="experience-card">
          <div className="experience-header">
            <img src={webDevImg} alt="Web Development Workshop" className="experience-image" />
            <div>
              <h3 className="experience-title">Web Development Workshop Facilitator</h3>
              <p className="experience-date">2025</p>
            </div>
          </div>

          <ul className="experience-bullets">
            <li>Taught fundamentals of frontend and backend development, covering core concepts and practical workflows.</li>
            <li>Demonstrated website hosting and deployment dry-runs.</li>
            <li>Provided hands-on troubleshooting support by assisting participants individually.</li>
            <li>Helped students gain confidence applying web technologies to real projects.</li>
          </ul>
        </div>

        {/* Design Facilitator */}
        <div className="experience-card">
          <div className="experience-header">
            <img src={designHackImg} alt="Design Hackathon" className="experience-image" />
            <div>
              <h3 className="experience-title">Design Facilitator – WHAT-THE-HACK Hackathon</h3>
              <p className="experience-date">2025</p>
            </div>
          </div>

          <ul className="experience-bullets">
            <li>Guided participants through design thinking, ideation, and rapid prototyping.</li>
            <li>Supported teams in building user-centric solutions.</li>
            <li>Fostered collaboration, creativity, and fast iteration under tight deadlines.</li>
          </ul>
        </div>

        {/* Cybersecurity Volunteer */}
        <div className="experience-card">
          <div className="experience-header">
            <img src={cyberImg} alt="Cybersecurity Red Team" className="experience-image" />
            <div>
              <h3 className="experience-title">Cybersecurity Red Team Tech Writer (Volunteer)</h3>
              <p className="experience-date">2025</p>
            </div>
          </div>

          <ul className="experience-bullets">
            <li>Managed attack objective sheets in coordination with judges.</li>
            <li>Documented significant Red Team actions with precise timestamps.</li>
            <li>Monitored Red Team screens to identify enumeration, access, and modification events.</li>
            <li>Interacted with judges to describe the real-time state of the exercise.</li>
            <li>Gained practical exposure to Cyber-Physical Systems.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default VolunteerSection;
