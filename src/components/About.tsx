import { aboutParagraphs } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="section-head">
        <span className="section-eyebrow">01 // Introduction</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-card">
        {aboutParagraphs.map((p, i) => (
          <p key={i} className="about-paragraph">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
