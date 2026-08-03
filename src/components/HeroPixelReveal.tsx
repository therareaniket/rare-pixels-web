'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Props {
  trigger: number;
  color: string;
}

export default function HeroPixelReveal({ trigger, color, }: Props) {
    
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;

        if (!grid) return;

        grid.innerHTML = '';

        const gridSize = 14;

        for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const pixel = document.createElement('div');

            pixel.classList.add('hero-pixel');

            // pixel.style.backgroundColor = color;
            pixel.style.backgroundColor = '#ED0180';

            const size = 100 / gridSize;

            pixel.style.width = `${size}%`;
            pixel.style.height = `${size}%`;
            pixel.style.left = `${col * size}%`;
            pixel.style.top = `${row * size}%`;

            grid.appendChild(pixel);
        }
        }
    }, [color]);

  useEffect(() => {
    const pixels =
      gridRef.current?.querySelectorAll('.hero-pixel');

    if (!pixels?.length) return;

    gsap.killTweensOf(pixels);

    gsap.set(pixels, {
      display: 'none',
    });

    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: {
        each: 0.0025,
        from: 'center',
      },
    });

    gsap.to(pixels, {
      display: 'none',
      duration: 0,
      delay: 0.5,
      stagger: {
        each: 0.0025,
        from: 'center',
      },
    });
  }, [trigger]);

  return (
    <div className="hero-pixel-overlay" ref={gridRef} />
  );
}