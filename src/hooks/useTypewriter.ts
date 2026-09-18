'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Cycles through an array of strings with a typing / deleting animation.
 * Returns the currently visible text.
 */
export function useTypewriter(
  strings: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseMs = 2000,
) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');
  const charPos = useRef(0);

  const tick = useCallback(() => {
    const current = strings[index];

    if (phase === 'typing') {
      charPos.current++;
      setText(current.slice(0, charPos.current));
      if (charPos.current >= current.length) {
        setPhase('pausing');
        return pauseMs;
      }
      return typingSpeed + Math.random() * 40;
    }

    if (phase === 'pausing') {
      setPhase('deleting');
      return 0;
    }

    // deleting
    charPos.current--;
    setText(current.slice(0, charPos.current));
    if (charPos.current <= 0) {
      setPhase('typing');
      setIndex((i) => (i + 1) % strings.length);
      return 300;
    }
    return deletingSpeed;
  }, [index, phase, strings, typingSpeed, deletingSpeed, pauseMs]);

  useEffect(() => {
    const delay = tick();
    const timer = setTimeout(() => {
      // Force a state update to trigger the next tick
      setPhase((p) => p);
    }, delay);
    return () => clearTimeout(timer);
  }, [tick, text, phase, index]);

  return text;
}
