'use client';

import BackgroundEffect from '@/components/BackgroundEffect';
import ScrollProgress from '@/components/ScrollProgress';
import PointerEffect from '@/components/PointerEffect';
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
      <PointerEffect />

      <div className="portfolio-layout-container">
        <LeftPanel />

        <main className="right-panel">
          <About />
          <Experience />
          <Projects />
          <SkillsToolkit />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}
