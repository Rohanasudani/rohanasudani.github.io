import { projects, additionalProjects } from '@/data/portfolio';

function TerminalWidget() {
  return (
    <div className="terminal-box" aria-label="Terminal Coding Agent execution preview">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="terminal-title">termagent — zsh</span>
        <span className="terminal-status-tag">Fixture 8/8 ✓</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-line prompt">
          <span className="prompt-symbol">$</span>
          <span className="prompt-cmd">termagent run --repo ./project --provider openai</span>
        </div>
        <div className="terminal-line step">
          <span className="step-tag">[1/4]</span>
          <span className="step-desc">Inspect repository, AST &amp; symbol indices</span>
        </div>
        <div className="terminal-line step">
          <span className="step-tag">[2/4]</span>
          <span className="step-desc">Plan guarded write with patch-plan checksum</span>
        </div>
        <div className="terminal-line step">
          <span className="step-tag">[3/4]</span>
          <span className="step-desc">Preview git diff &amp; safety gate approval</span>
        </div>
        <div className="terminal-line success">
          <span className="step-tag">[4/4]</span>
          <span className="step-desc">Deterministic test loop: 176 automated tests &amp; 8/8 fixtures passed</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="content-section">
      <div className="section-head">
        <span className="section-eyebrow">03 // Engineering Showcase</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-stack">
        {projects.map((proj) => (
          <article key={proj.title} className="project-feature-card">
            {/* Project Media Banner */}
            <div className="project-media-wrapper">
              {proj.visual === 'image' && proj.imageSrc ? (
                <div className="project-image-frame">
                  <img
                    src={proj.imageSrc}
                    alt={proj.imageAlt || proj.title}
                    className="project-screenshot"
                    loading="lazy"
                    decoding="async"
                    width={1376}
                    height={768}
                  />
                  <div className="project-image-overlay" />
                </div>
              ) : proj.visual === 'terminal' ? (
                <TerminalWidget />
              ) : null}
            </div>

            {/* Project Content */}
            <div className="project-details">
              <div className="project-meta-row">
                <span className="project-num">{proj.index}</span>
                {proj.status && (
                  <span className="project-status-chip">{proj.status}</span>
                )}
                {proj.year && (
                  <span className="project-year-chip">{proj.year}</span>
                )}
              </div>

              <h3 className="project-name">{proj.title}</h3>
              <p className="project-lead">{proj.description}</p>

              {/* Expandable Technical Details for clean, condensed mobile UX */}
              {proj.details && (
                <details className="project-details-disclosure">
                  <summary className="details-toggle-btn">
                    <span className="toggle-icon">▸</span>
                    <span>Technical Architecture &amp; Implementation</span>
                  </summary>
                  <p className="project-bullets">{proj.details}</p>
                </details>
              )}

              <div className="project-impact-box">
                <span className="impact-bullet">⚡</span>
                <span className="impact-text">{proj.result}</span>
              </div>

              <div className="project-tech-pills">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links-row">
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-cta primary"
                  >
                    Live Demo ↗
                  </a>
                )}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-cta"
                >
                  {proj.githubLabel || 'Source Code ↗'}
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* Additional Projects (brief mention) */}
        <div className="more-project-card">
          <div className="more-project-info">
            <span className="more-project-badge">Additional Projects</span>
            <p className="more-project-desc">
              {additionalProjects.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
