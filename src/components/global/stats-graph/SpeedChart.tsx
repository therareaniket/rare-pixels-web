'use client';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function SpeedChart() {
  const [value, setValue] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Gauge Geometry Parameters
  const size = 360;
  const strokeWidth = 30;
  const center = size / 2;
  const radius = (size - strokeWidth - 80) / 2;
  const circumference = Math.PI * radius;

  // Clamp value between 0 and 100
  const clampedValue = Math.min(Math.max(value, 0), 100);
  
  // Calculate arc stroke offset
  const strokeDashoffset = circumference - (clampedValue / 100) * circumference;

  // Calculate needle rotation angle (-90deg to +90deg)
  const needleAngle = -90 + (clampedValue / 100) * 180;

  // Generate 11 major tick labels
  const ticks = Array.from({ length: 11 }, (_, i) => i * 10);

  useEffect(() => {
    const animationObj = { val: 0 };

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%', // Triggers when top of chart hits 80% of viewport
      once: true, // Guarantees it runs only once
      onEnter: () => {
        gsap.to(animationObj, {
          val: 98,
          duration: 1.5,
          delay:  window.innerWidth > 479 ? 3 : 0.2,
          ease: 'power2.out',
          onUpdate: () => {
            setValue(animationObj.val);
          },
        });
      },
    });

    return () => {
      trigger.kill(); // Cleanup trigger on unmount
    };
  }, []);

  return (
    <div ref={containerRef}  className="flex flex-col items-center justify-center w-full max-w-[360px] mx-auto p-4" >
      <div className="relative w-full aspect-[2/1.2] flex justify-center items-center">
        <svg viewBox={`0 0 ${size} ${size / 2 + 50}`} className="w-full h-auto overflow-visible">
          {/* Background Track Arc */}
          <path d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center + radius} ${center}`} fill="none" stroke="#dddddd" strokeWidth={strokeWidth} strokeLinecap="butt" />

          {/* Active Value Arc (#C6D9C6) */}
          <path
            d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center + radius} ${center}`}
            fill="none"
            stroke="#C6D9C6"
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />

          {/* Outer Tick Labels (0% to 100%) */}
          {ticks.map((tick) => {
            const angle = -90 + (tick / 100) * 180;
            const angleRad = (angle * Math.PI) / 180;
            const labelRadius = radius + strokeWidth + 18;
            const x = center + labelRadius * Math.sin(angleRad);
            const y = center - labelRadius * Math.cos(angleRad);

            return (
              <text key={tick} x={x} y={y} fill="white" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="middle">
                {/* {tick}% */}
              </text>
            );
          })}

          {/* Center Pivot Point & Needle */}
          <g style={{ transform: `translate(${center}px, ${center}px) rotate(${needleAngle}deg)`, transformOrigin: '0px 0px', }} >
            {/* Needle shape pointing straight up before rotation */}
            <polygon points={`-${strokeWidth / 4},0 0,-${radius * 0.85} ${strokeWidth / 4},0`} fill="#C6D9C6" />

            {/* Pivot Pin Center */}
            <circle r={strokeWidth / 3 + 2} fill="#C6D9C6" />
          </g>
        </svg>

        {/* Central Dynamic Value Display */}
        {/* <div className="absolute bottom-2 left-0 right-0 text-center">
          <span className="text-[16px] font-bold text-[#0F172A]">
            {Math.round(clampedValue)}%
          </span>
        </div> */}
      </div>
    </div>
  );
}