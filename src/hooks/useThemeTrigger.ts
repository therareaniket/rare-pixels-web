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



// 'use client';

// import { useLayoutEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export function useThemeTrigger(dependency?: any) {
//   useLayoutEffect(() => {
//     // Select all potential theme wrapper elements
//     const allSections = Array.from(
//       document.querySelectorAll<HTMLElement>('main [data-theme-color]')
//     );

//     // Filter out sections inside hidden containers (display: none / hidden class)
//     const visibleSections = allSections.filter((section) => {
//       const style = window.getComputedStyle(section);
//       return style.display !== 'none' && section.offsetParent !== null;
//     });

//     if (!visibleSections.length) return;

//     // Immediately apply the theme of the very FIRST visible section
//     const initialTheme = visibleSections[0].getAttribute('data-theme-color');
//     if (initialTheme) {
//       document.body.setAttribute('data-theme', initialTheme);
//     }

//     const ctx = gsap.context(() => {
//       visibleSections.forEach((section) => {
//         const theme = section.getAttribute('data-theme-color');

//         ScrollTrigger.create({
//           trigger: section,
//           start: 'top 40%',
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

//     ScrollTrigger.refresh();

//     return () => ctx.revert();
//   }, [dependency]);
// }