'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useThemeTrigger() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-theme-color]');

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        const theme = section.getAttribute('data-theme-color');

        ScrollTrigger.create({
          trigger: section,
          start: 'top 30%',
          end: 'bottom 50%',
          onEnter: () => {
            if (theme) document.body.setAttribute('data-theme', theme);
          },
          onEnterBack: () => {
            if (theme) document.body.setAttribute('data-theme', theme);
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}