'use client';

import { useEffect, useRef } from 'react';

interface Particle {
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
    // Disable on touch devices
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

    const particles: Particle[] = [];
    const colors = [
      'rgba(99, 102, 241, ', // indigo
      'rgba(139, 92, 246, ', // violet
      'rgba(6, 182, 212, ',  // cyan
      'rgba(52, 211, 153, ', // emerald
    ];

    let lastX = 0;
    let lastY = 0;
    let isMoving = false;
    let moveTimeout: NodeJS.Timeout;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Update ambient mouse spotlight position
      if (spotlight) {
        spotlight.style.opacity = '1';
        spotlight.style.transform = `translate(${x}px, ${y}px)`;
      }

      // Calculate speed of cursor
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.hypot(dx, dy);

      if (dist > 3) {
        isMoving = true;
        clearTimeout(moveTimeout);
        moveTimeout = setTimeout(() => {
          isMoving = false;
        }, 100);

        // Spawn a trail particle
        const count = Math.min(Math.floor(dist / 6) + 1, 4);
        for (let i = 0; i < count; i++) {
          const colorBase = colors[Math.floor(Math.random() * colors.length)];
          particles.push({
            x: x + (Math.random() - 0.5) * 8,
            y: y + (Math.random() - 0.5) * 8,
            vx: -dx * 0.08 + (Math.random() - 0.5) * 1.2,
            vy: -dy * 0.08 + (Math.random() - 0.5) * 1.2,
            size: Math.random() * 3 + 1.5,
            color: colorBase,
            alpha: 0.85,
            decay: Math.random() * 0.035 + 0.025,
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
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size *= 0.96;

        if (p.alpha <= 0 || p.size <= 0.2) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = `${p.color}0.8)`;
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
      document.removeEventListener('mouseleave', onMouseLeave);
      clearTimeout(moveTimeout);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Interactive Radial Spotlight that tracks cursor */}
      <div
        ref={spotlightRef}
        className="pointer-spotlight"
        aria-hidden="true"
      />
      {/* Dynamic trailing particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-canvas"
        aria-hidden="true"
      />
    </>
  );
}
