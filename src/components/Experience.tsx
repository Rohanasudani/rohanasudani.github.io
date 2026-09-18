import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="content-section">
      <div className="section-head">
        <span className="section-eyebrow">02 // Career Track</span>
        <h2 className="section-title">Professional Experience</h2>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <article key={exp.company} className="experience-card">
            <div className="experience-card-header">
              <div className="experience-role-info">
                <span className="experience-number">0{index + 1}</span>
                <div>
                  <h3 className="role-title">{exp.title}</h3>
                  <p className="company-name">{exp.company}</p>
                </div>
              </div>
              <div className="experience-meta-badge">
                <span className="experience-period">{exp.period}</span>
                <span className="experience-location">{exp.location}</span>
              </div>
            </div>

            <ul className="experience-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i}>
                  <span className="bullet-arrow">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
