'use client';

import { useEffect, useRef, useState } from 'react';

export default function PointerEffect() {
  const reticleRef = useRef<HTMLDivElement>(null);
  const torchRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on mobile / touch screens
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update background torch immediately
      if (torchRef.current) {
        torchRef.current.style.opacity = '1';
        torchRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check what we are hovering
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, .action-btn, .project-feature-card, .experience-card, .tech-tag, .contact-method-tile, .metric-card',
        );
        const hoveringNow = !!interactive;
        if (hoveringNow !== isHovering) {
          isHovering = hoveringNow;
          setIsLocked(hoveringNow);
        }

        // Also update card spotlight reflection variables
        const card = target.closest<HTMLElement>(
          '.project-feature-card, .experience-card, .contact-container-card, .about-card, .education-card',
        );
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--card-mouse-x', `${e.clientX - rect.left}px`);
          card.style.setProperty('--card-mouse-y', `${e.clientY - rect.top}px`);
        }
      }
    };

    const onMouseLeave = () => {
      if (torchRef.current) torchRef.current.style.opacity = '0';
      if (reticleRef.current) reticleRef.current.style.opacity = '0';
      setIsLocked(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    let rafId: number;

    // Smooth spring physics loop for the reticle
    const render = () => {
      const ease = isHovering ? 0.28 : 0.18;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      if (reticleRef.current) {
        reticleRef.current.style.opacity = mouseX > 0 ? '1' : '0';
        reticleRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    // Update coordinate readout occasionally for tech vibe
    const coordInterval = setInterval(() => {
      if (mouseX > 0) {
        setCoords({ x: Math.round(mouseX), y: Math.round(mouseY) });
      }
    }, 120);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
      clearInterval(coordInterval);
    };
  }, []);

  return (
    <>
      {/* Ambient Blueprint Torch Spotlight */}
      <div ref={torchRef} className="pointer-torch" aria-hidden="true" />

      {/* High-Tech Developer HUD Crosshair & Targeting Reticle */}
      <div
        ref={reticleRef}
        className={`hud-reticle ${isLocked ? 'target-locked' : ''}`}
        aria-hidden="true"
      >
        {/* 4 Precision Corner Brackets */}
        <span className="reticle-corner corner-tl" />
        <span className="reticle-corner corner-tr" />
        <span className="reticle-corner corner-bl" />
        <span className="reticle-corner corner-br" />

        {/* Central Targeting Cross */}
        <span className="reticle-center-cross" />

        {/* Mini Tech Coordinate Readout on hover */}
        <div className="reticle-coords">
          <span className="reticle-status-text">
            {isLocked ? 'LOCK' : 'SYS'}
          </span>
          <span className="reticle-pos">
            {coords.x}:{coords.y}
          </span>
        </div>
      </div>
    </>
  );
}
