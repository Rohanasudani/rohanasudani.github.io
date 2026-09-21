'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

function subscribePointer(callback: () => void) {
  const mqlTouch = window.matchMedia('(pointer: coarse)');
  const mqlMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  mqlTouch.addEventListener('change', callback);
  mqlMotion.addEventListener('change', callback);
  return () => {
    mqlTouch.removeEventListener('change', callback);
    mqlMotion.removeEventListener('change', callback);
  };
}

function getPointerSnapshot() {
  if (typeof window === 'undefined') return false;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return !isTouch && !prefersReducedMotion;
}

function getServerSnapshot() {
  return false;
}

export default function PointerEffect() {
  const reticleRef = useRef<HTMLDivElement>(null);
  const torchRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLSpanElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const enabled = useSyncExternalStore(subscribePointer, getPointerSnapshot, getServerSnapshot);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isHovering = false;
    let isRunning = false;
    let rafId = 0;

    const render = () => {
      const ease = isHovering ? 0.28 : 0.18;
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      currentX += dx * ease;
      currentY += dy * ease;

      if (reticleRef.current) {
        reticleRef.current.style.opacity = mouseX > 0 ? '1' : '0';
        reticleRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
        isRunning = false;
        return;
      }

      rafId = requestAnimationFrame(render);
    };

    const wakeLoop = () => {
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(render);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (torchRef.current) {
        torchRef.current.style.opacity = '1';
        torchRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (coordsRef.current) {
        coordsRef.current.textContent = `${Math.round(mouseX)}:${Math.round(mouseY)}`;
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, .action-btn, .project-feature-card, .experience-card, .tech-tag, .contact-method-tile, .metric-card, .details-toggle-btn',
        );
        const hoveringNow = !!interactive;
        if (hoveringNow !== isHovering) {
          isHovering = hoveringNow;
          setIsLocked(hoveringNow);
        }

        const card = target.closest<HTMLElement>(
          '.project-feature-card, .experience-card, .contact-container-card, .about-card, .education-card',
        );
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--card-mouse-x', `${e.clientX - rect.left}px`);
          card.style.setProperty('--card-mouse-y', `${e.clientY - rect.top}px`);
        }
      }

      wakeLoop();
    };

    const onMouseLeave = () => {
      if (torchRef.current) torchRef.current.style.opacity = '0';
      if (reticleRef.current) reticleRef.current.style.opacity = '0';
      setIsLocked(false);
      mouseX = -100;
      mouseY = -100;
      wakeLoop();
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Background torch spotlight */}
      <div ref={torchRef} className="pointer-torch" aria-hidden="true" />

      {/* Reticle */}
      <div
        ref={reticleRef}
        className={`hud-reticle ${isLocked ? 'target-locked' : ''}`}
        aria-hidden="true"
      >
        <span className="reticle-corner corner-tl" />
        <span className="reticle-corner corner-tr" />
        <span className="reticle-corner corner-bl" />
        <span className="reticle-corner corner-br" />
        <span className="reticle-center-cross" />

        <div className="reticle-coords">
          <span className="reticle-status-text">
            {isLocked ? 'LOCK' : 'SYS'}
          </span>
          <span ref={coordsRef} className="reticle-pos">
            0:0
          </span>
        </div>
      </div>
    </>
  );
}
