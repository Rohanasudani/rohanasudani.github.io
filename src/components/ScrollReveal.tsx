'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { ReactNode } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  threshold = 0.15,
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
  stagger?: boolean;
}) {
  const ref = useScrollReveal<HTMLDivElement>(threshold);

  return (
    <div
      ref={ref}
      className={`${stagger ? 'reveal-children' : 'reveal'} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
