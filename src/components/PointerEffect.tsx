'use client';

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

export default function PointerEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch / coarse pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    const spotlight = spotlightRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Trail history points for the fluid ribbon
    const trail: Point[] = [];
    const maxTrailLength = 16;

    // Glowing ember sparks
    const sparks: Spark[] = [];
    const sparkColors = [
      'rgba(99, 102, 241, ', // Electric indigo
      'rgba(139, 92, 246, ', // Violet
      'rgba(6, 182, 212, ',  // Cyan
      'rgba(52, 211, 153, ', // Emerald
    ];

    let lastX = -100;
    let lastY = -100;
    let isHoveringInteractive = false;

    // Listen to hover states on cards, buttons, links
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, .project-feature-card, .experience-card, .metric-card, .tech-tag, .contact-method-tile');
      isHoveringInteractive = !!interactive;

      // Update card spotlight coordinates on the hovered card
      const card = target.closest<HTMLElement>('.project-feature-card, .experience-card, .metric-card, .contact-container-card, .about-card');
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--card-mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--card-mouse-y', `${e.clientY - rect.top}px`);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Move the ambient background torch
      if (spotlight) {
        spotlight.style.opacity = '1';
        spotlight.style.transform = `translate(${x}px, ${y}px)`;
      }

      // Add to ribbon trail
      trail.push({ x, y, age: 0 });
      if (trail.length > maxTrailLength) {
        trail.shift();
      }

      // Emit floating embers when cursor moves
      const dx = x - lastX;
      const dy = y - lastY;
      const speed = Math.hypot(dx, dy);

      if (speed > 2 && lastX > 0) {
        const sparkCount = Math.min(Math.floor(speed / 5) + 1, 3);
        for (let i = 0; i < sparkCount; i++) {
          const color = sparkColors[Math.floor(Math.random() * sparkColors.length)];
          sparks.push({
            x: x + (Math.random() - 0.5) * 6,
            y: y + (Math.random() - 0.5) * 6,
            vx: -dx * 0.05 + (Math.random() - 0.5) * 1.2,
            vy: -dy * 0.05 + (Math.random() - 0.5) * 1.2 - 0.2, // slight upward float
            size: Math.random() * 2.8 + (isHoveringInteractive ? 2.0 : 1.2),
            color,
            alpha: 0.85,
            decay: Math.random() * 0.03 + 0.02,
          });
        }
      }

      lastX = x;
      lastY = y;
    };

    const onMouseLeave = () => {
      if (spotlight) {
        spotlight.style.opacity = '0';
      }
      trail.length = 0;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Fluid Luminous Ribbon Trail
      if (trail.length > 2) {
        for (let i = 1; i < trail.length; i++) {
          const p1 = trail[i - 1];
          const p2 = trail[i];
          p1.age++;

          const progress = i / trail.length; // 0 (oldest) to 1 (newest)
          const ribbonWidth = progress * (isHoveringInteractive ? 4.5 : 2.8);
          const alpha = progress * 0.35;

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
          ctx.lineWidth = ribbonWidth;
          ctx.lineCap = 'round';
          ctx.shadowColor = 'rgba(6, 182, 212, 0.6)';
          ctx.shadowBlur = 10;
          ctx.stroke();
          ctx.restore();
        }

        // Gradually remove old points if cursor stopped
        if (trail.length > 0 && trail[0].age > 10) {
          trail.shift();
        }
      }

      // 2. Draw Floating Luminescent Embers
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;
        s.size *= 0.96;

        if (s.alpha <= 0 || s.size <= 0.2) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${s.alpha})`;
        ctx.shadowColor = `${s.color}0.9)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Ambient Blueprint Torch Spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-spotlight"
        aria-hidden="true"
      />
      {/* Luminous Fluid Ribbon & Stardust Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-canvas"
        aria-hidden="true"
      />
    </>
  );
}
