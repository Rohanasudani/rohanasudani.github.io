'use client';

import { useState, useEffect } from 'react';

/**
 * Robust, flicker-free typewriter hook.
 * Types forward, stays on screen for pauseMs, deletes back, and advances to the next string.
 */
export function useTypewriter(
  strings: string[],
  typingSpeed = 110,
  deletingSpeed = 50,
  pauseMs = 3500,
) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!strings || strings.length === 0) return;

    const current = strings[index];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < current.length) {
        // Type the next character
        timer = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // FULL STRING DISPLAYED — Stay steady and readable for pauseMs (3.5s)!
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseMs);
      }
    } else {
      if (text.length > 0) {
        // Delete backward
        timer = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting — wait a brief moment, then advance to next string
        timer = setTimeout(() => {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % strings.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, strings, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}
