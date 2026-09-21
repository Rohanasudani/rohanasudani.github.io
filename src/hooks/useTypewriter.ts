'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function useTypewriter(
  strings: string[],
  typingSpeed = 85,
  deletingSpeed = 45,
  pauseMs = 2000,
) {
  const [text, setText] = useState(strings[0] || '');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (reducedMotion) return;
    if (!strings || strings.length === 0) return;

    const current = strings[index];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < current.length) {
        timer = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseMs);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % strings.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, strings, typingSpeed, deletingSpeed, pauseMs, reducedMotion]);

  if (reducedMotion) {
    return strings[0] || '';
  }

  return text;
}
