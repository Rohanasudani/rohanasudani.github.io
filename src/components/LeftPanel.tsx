'use client';

import {
  name,
  roles,
  tagline,
  bio,
  location,
  gradDate,
  metrics,
  socials,
  resumeHref,
  navItems,
} from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function LeftPanel() {
  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);
  const typedRole = useTypewriter(roles, 140, 70, 3500);

  return (
    <aside className="left-panel">
      <div className="left-panel-top">
        {/* Availability Badge */}
        <div className="status-pill">
          <span className="status-ping" />
          <span className="status-text">Open to Full-Time (May 2027) &amp; Summer 2026 Internships</span>
        </div>

        {/* Identity & Avatar */}
        <div className="identity-block">
          <div className="avatar-wrapper" title="Swap with your headshot: replace the monogram div with an img tag">
            <div className="avatar-monogram">RA</div>
            <div className="avatar-ring" />
          </div>

          <div className="identity-text">
            <h1 className="display-name">{name}</h1>
            {/* Typewriter cycling through roles */}
            <p className="primary-title typewriter-line">
              {typedRole}
              <span className="cursor-blink">|</span>
            </p>
          </div>
        </div>

        {/* Core Positioning & Bio */}
        <p className="core-tagline">{tagline}</p>
        <p className="core-bio">{bio}</p>

        {/* Location & Academic Meta */}
        <div className="meta-badges">
          <span className="meta-pill">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {location}
          </span>
          <span className="meta-pill">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            UofA · {gradDate}
          </span>
          <span className="meta-pill honor-pill">
            ★ Dean&apos;s List &middot; Global Wildcat Award
          </span>
        </div>

        {/* Action CTAs */}
        <div className="panel-actions">
          <a href="#projects" className="action-btn action-primary">
            View Projects
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="action-btn action-secondary"
          >
            Resume PDF ↗
          </a>
        </div>

        {/* Desktop Sticky In-Page Navigation */}
        <nav className="panel-nav" aria-label="Page section navigation">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`panel-nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="nav-index">0{idx + 1}</span>
                <span className="nav-line" />
                <span className="nav-label">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Resume Impact Metrics */}
        <div className="verified-metrics">
          <p className="metrics-heading">Verified Highlights</p>
          <div className="metrics-grid">
            {metrics.map((m) => (
              <div key={m.label} className="metric-card">
                <span className="metric-val">{m.value}</span>
                <span className="metric-name">{m.label}</span>
                <span className="metric-sub">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social & Contact Footer */}
      <div className="left-panel-bottom">
        <div className="social-links-row">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="panel-social-link"
              {...(s.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="copyright-mini">© {new Date().getFullYear()} Rohan Asudani</p>
      </div>
    </aside>
  );
}
