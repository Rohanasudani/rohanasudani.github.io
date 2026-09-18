'use client';

import BackgroundEffect from '@/components/BackgroundEffect';
import ScrollProgress from '@/components/ScrollProgress';
import LeftPanel from '@/components/LeftPanel';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import SkillsToolkit from '@/components/SkillsToolkit';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function PortfolioPage() {
  return (
    <div className="portfolio-root">
      <ScrollProgress />
      <BackgroundEffect />

      <div className="portfolio-layout-container">
        {/* Left column / Top on mobile: Identity, Summary, Highlights, Navigation, CTAs */}
        <LeftPanel />

        {/* Right column: Projects showcase, Experience, Skills, Education, Contact */}
        <main className="right-panel">
          <Projects />
          <Experience />
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
