import { projects, moreProject } from '@/data/portfolio';

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
          <span className="step-desc">Inspect repository, AST & symbol indices</span>
        </div>
        <div className="terminal-line step">
          <span className="step-tag">[2/4]</span>
          <span className="step-desc">Plan guarded write with patch-plan checksum</span>
        </div>
        <div className="terminal-line step">
          <span className="step-tag">[3/4]</span>
          <span className="step-desc">Preview git diff & safety gate approval</span>
        </div>
        <div className="terminal-line success">
          <span className="step-tag">[4/4]</span>
          <span className="step-desc">Deterministic test loop: 8/8 tasks passed (0 errors)</span>
        </div>
      </div>
    </div>
  );
}

function RLChartWidget() {
  const models = [
    { name: 'Approx. Q-learning', rate: 99, display: '98–100%', highlight: true },
    { name: 'Tabular Q-learning', rate: 45, display: '30–49%', highlight: false },
    { name: 'SARSA baseline', rate: 40, display: '27–51%', highlight: false },
  ];

  return (
    <div className="rl-chart-box" aria-label="Reinforcement learning benchmark success rates">
      <div className="rl-chart-header">
        <span className="rl-chart-title">Snake Agent Reliability Across Board Sizes</span>
        <span className="rl-chart-sub">Evaluation Window</span>
      </div>
      <div className="rl-chart-bars">
        {models.map((m) => (
          <div key={m.name} className={`rl-bar-row ${m.highlight ? 'accent-row' : ''}`}>
            <span className="rl-bar-label">{m.name}</span>
            <div className="rl-bar-track">
              <div
                className="rl-bar-fill"
                style={{ width: `${m.rate}%` }}
              />
            </div>
            <span className="rl-bar-value">{m.display}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="content-section">
      <div className="section-head">
        <span className="section-eyebrow">01 // Engineering Showcase</span>
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
                  />
                  <div className="project-image-overlay" />
                </div>
              ) : proj.visual === 'terminal' ? (
                <TerminalWidget />
              ) : proj.visual === 'chart' ? (
                <RLChartWidget />
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
              <p className="project-bullets">{proj.details}</p>

              {/* Concrete Result / Impact callout */}
              <div className="project-impact-box">
                <span className="impact-bullet">⚡</span>
                <span className="impact-text">{proj.result}</span>
              </div>

              {/* Technologies */}
              <div className="project-tech-pills">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions & Links */}
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
                  Source Code ↗
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* Additional Project Card */}
        <div className="more-project-card">
          <div className="more-project-info">
            <span className="more-project-badge">Additional Project</span>
            <h4 className="more-project-title">{moreProject.title}</h4>
            <p className="more-project-desc">{moreProject.description}</p>
          </div>
          <div className="more-project-tags">
            {moreProject.tech.map((t) => (
              <span key={t} className="tech-tag mini">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
