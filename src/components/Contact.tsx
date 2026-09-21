import { email, phone, location, socials, resumeHref } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="content-section">
      <div className="section-head">
        <span className="section-eyebrow">06 // Direct Outreach</span>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="contact-container-card">
        <p className="contact-invite">
          I&apos;m actively seeking full-time software engineering roles starting upon graduation in May 2027, as well as co-op, part-time, or internship opportunities across full-stack development, AI infrastructure, and systems engineering. Whether you have an open role, an exciting technical challenge, or just want to connect, feel free to reach out.
        </p>

        <div className="contact-methods-grid">
          <a href={`mailto:${email}`} className="contact-method-tile">
            <span className="method-label">Email</span>
            <span className="method-val">{email}</span>
            <span className="method-action">Send an email ↗</span>
          </a>

          <div className="contact-method-tile static">
            <span className="method-label">Location</span>
            <span className="method-val">{location}</span>
            <span className="method-sub">University of Arizona</span>
          </div>

          <div className="contact-method-tile static">
            <span className="method-label">Direct Line</span>
            <span className="method-val">{phone}</span>
            <span className="method-sub">Available for interviews</span>
          </div>

          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="contact-method-tile highlight"
          >
            <span className="method-label">Official Resume</span>
            <span className="method-val">resume-rohan-asudani.pdf</span>
            <span className="method-action">Download PDF ↗</span>
          </a>
        </div>

        {/* Profiles and Links */}
        <div className="contact-socials-bar">
          <span className="socials-bar-label">Profiles &amp; Portals:</span>
          <div className="socials-bar-items">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-bar-link"
                {...(s.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
