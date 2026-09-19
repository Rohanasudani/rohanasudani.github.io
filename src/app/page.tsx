'use client';

import BackgroundEffect from '@/components/BackgroundEffect';
import ScrollProgress from '@/components/ScrollProgress';
import LeftPanel from '@/components/LeftPanel';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import SkillsToolkit from '@/components/SkillsToolkit';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function PortfolioPage() {
  return (
    <div className="portfolio-root">
      <ScrollProgress />
      <BackgroundEffect />

      <div className="portfolio-layout-container">
        <LeftPanel />

        <main className="right-panel">
          <About />
          <Experience />
          <Projects />
          <SkillsToolkit />
          <Education />
          <Contact />

          <footer className="compact-footer">
            <p className="footer-built">
              Designed &amp; engineered by <strong>Rohan Asudani</strong> · Built with Next.js &amp; TypeScript · Hosted on GitHub Pages
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
