import { skills } from '@/data/portfolio';

export default function SkillsToolkit() {
  return (
    <section id="skills" className="content-section">
      <div className="section-head">
        <span className="section-eyebrow">04 // Capabilities</span>
        <h2 className="section-title">Technical Toolkit</h2>
      </div>

      <div className="skills-grid-container">
        {skills.map((group) => (
          <div
            key={group.category}
            className={`skill-category-card ${group.highlighted ? 'highlighted-category' : ''}`}
          >
            <div className="skill-category-header">
              <span className="category-indicator" />
              <h3 className="category-title">{group.category}</h3>
              {group.highlighted && (
                <span className="core-focus-badge">Core Specialization</span>
              )}
            </div>

            <div className="skill-pills-wrap">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`skill-tag ${group.highlighted ? 'highlighted-tag' : ''}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
