// 'use client';

// import { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export function useThemeTrigger() {
//   useEffect(() => {
//     const sections = document.querySelectorAll<HTMLElement>('[data-theme-color]');

//     const ctx = gsap.context(() => {
//       sections.forEach((section) => {
//         const theme = section.getAttribute('data-theme-color');

//         ScrollTrigger.create({
//           trigger: section,
//           start: 'top 30%',
//           end: 'bottom 50%',
//           onEnter: () => {
//             if (theme) document.body.setAttribute('data-theme', theme);
//           },
//           onEnterBack: () => {
//             if (theme) document.body.setAttribute('data-theme', theme);
//           },
//         });
//       });
//     });

//     return () => ctx.revert();
//   }, []);
// }






// hooks/useThemeTrigger.ts
'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useThemeTrigger(isSmallScreen: boolean | null) {
  useEffect(() => {
    // Don't run triggers while initial screen check is null
    if (isSmallScreen === null) return;

    let ctx: gsap.Context;

    // Use requestAnimationFrame / timeout to ensure Lenis & DOM have painted mobile layout
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // Find all theme wrappers EXCEPT individual horizontal cards inside Industries
        const sections = Array.from(
          document.querySelectorAll<HTMLElement>('[data-theme-color]')
        ).filter((el) => !el.classList.contains('industry-item'));

        sections.forEach((section) => {
          const theme = section.getAttribute('data-theme-color');

          ScrollTrigger.create({
            trigger: section,
            // Fire trigger when top of section reaches 60% down the viewport
            start: 'top 60%',
            end: 'bottom 40%',
            // Debugging: Set markers to true to visually verify triggers on screen
            // markers: true, 
            onEnter: () => {
              if (theme) document.body.setAttribute('data-theme', theme);
            },
            onEnterBack: () => {
              if (theme) document.body.setAttribute('data-theme', theme);
            },
          });
        });
      });

      // Force GSAP to recalculate offsets after pinned spacers are created
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [isSmallScreen]);
}