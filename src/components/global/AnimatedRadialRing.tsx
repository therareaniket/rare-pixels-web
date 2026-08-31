'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedRadialRingProps {
    className?: string;
    width?: number;
    height?: number;
}

export default function AnimatedRadialRing({
    className = "",
    width = 350,
    height = 350,
}: AnimatedRadialRingProps) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        const paths = svg.querySelectorAll('path');
        if (paths.length === 0) return;

        const ctx = gsap.context(() => {
            // Re-order paths: small arc segments first (clockwise), main big block last
            // [0: Top-left small, 1: Top-mid, 2: Top-right small, ..., Last: Large block]
            const smallBlocks = Array.from(paths).slice(1); // Small segments
            const largeBlock = paths[0];                    // Main big segment

            const allInOrder = [...smallBlocks.reverse(), largeBlock];

            // Set initial state: Hidden & scaled down from center
            gsap.set(allInOrder, {
                opacity: 0,
                scale: 0.5,
                transformOrigin: '50% 50%',
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: svg,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            });

            // 1. Clockwise pop-in for small segments
            tl.to(smallBlocks, {
                opacity: 1,
                scale: 1,
                duration: 0.35,
                ease: 'back.out(1.8)',
                stagger: 0.08,
            });

            // 2. Main large block reveals with an impactful bounce
            tl.to(
                largeBlock,
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'back.out(2)',
                },
                '-=0.1'
            );

            // 3. Subtle total ring pulse completion effect
            tl.to(svg, {
                scale: 1.05,
                duration: 0.2,
                yoyo: true,
                repeat: 1,
                ease: 'power1.inOut',
            });
        }, svgRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className={`radial-ring-wrapper ${className}`} style={{ width, height }}>
            <svg
                ref={svgRef}
                width="100%"
                height="100%"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ overflow: 'visible' }}
            >
                {/* 1. Large Main Segment (Top/Right Half) */}
                <path
                    d="M100 2C100 0.89543 100.896 -0.00208977 102 0.0199933C121.387 0.407666 140.26 6.42494 156.308 17.3598C172.908 28.6703 185.717 44.7178 193.066 63.4118C200.416 82.1059 201.965 102.58 197.512 122.167C193.207 141.104 183.486 158.363 169.553 171.849C168.76 172.618 167.493 172.57 166.74 171.762L145.629 149.061C144.876 148.253 144.925 146.989 145.71 146.212C154.499 137.52 160.637 126.489 163.383 114.409C166.277 101.677 165.27 88.3688 160.493 76.2177C155.716 64.0665 147.39 53.6357 136.6 46.2838C126.362 39.3079 114.355 35.411 102 35.0308C100.896 34.9968 100 34.1046 100 33L100 2Z"
                    fill="#E8DB7D"
                />

                {/* 2. Small Arc Segments (Clockwise Order) */}
                <path
                    d="M54.5422 13.1807C54.0298 12.2022 54.407 10.9916 55.3956 10.4989C67.2444 4.59382 80.1482 1.10018 93.3577 0.220846C94.4598 0.147478 95.3962 1.00242 95.4475 2.1058L96.8876 33.0723C96.9389 34.1757 96.0856 35.1086 94.9843 35.1938C86.8744 35.8215 78.9541 37.9658 71.6353 41.5154C70.6414 41.9975 69.4341 41.6225 68.9217 40.644L54.5422 13.1807Z"
                    fill="#E8DB7D"
                />
                <path
                    d="M19.0777 44.7227C18.1656 44.0997 17.9297 42.8539 18.5708 41.9544C26.3726 31.0097 36.301 21.7498 47.7622 14.7286C48.7041 14.1516 49.9305 14.4736 50.4885 15.4269L66.1503 42.1796C66.7084 43.1328 66.3861 44.3553 65.4505 44.9424C58.4494 49.3357 52.3503 55.0242 47.4804 61.7026C46.8296 62.5951 45.5876 62.8314 44.6755 62.2084L19.0777 44.7227Z"
                    fill="#E8DB7D"
                />
                <path
                    d="M5.08173 75.6172C4.0119 75.3424 3.36541 74.2517 3.66157 73.1875C6.02248 64.7047 9.49346 56.5708 13.9844 48.9969C14.5478 48.0468 15.7825 47.7589 16.7212 48.3411L43.0645 64.6822C44.0031 65.2644 44.2892 66.4959 43.7361 67.452C41.1048 72.0006 39.0347 76.8516 37.5713 81.8985C37.2637 82.9594 36.1767 83.6049 35.1069 83.3301L5.08173 75.6172Z"
                    fill="#E8DB7D"
                />
                <path
                    d="M8.88494 136.084C7.85797 136.491 6.69373 135.988 6.30764 134.953C-0.0814399 117.828 -1.65435 99.2773 1.76008 81.3206C1.96642 80.2355 3.02948 79.5444 4.11026 79.7723L34.4427 86.1709C35.5235 86.3989 36.2116 87.4596 36.017 88.5469C34.0072 99.7741 34.9873 111.334 38.8588 122.062C39.2337 123.101 38.734 124.263 37.707 124.67L8.88494 136.084Z"
                    fill="#E8DB7D"
                />
                <path
                    d="M60.5322 189.701C60.0874 190.712 58.906 191.173 57.904 190.708C36.7957 180.912 19.7624 164.059 9.74358 143.056C9.26802 142.059 9.71619 140.872 10.7224 140.417L38.9633 127.632C39.9696 127.176 41.1519 127.625 41.6382 128.616C48.0853 141.766 58.787 152.355 72.0041 158.662C73.001 159.138 73.4618 160.315 73.0169 161.326L60.5322 189.701Z"
                    fill="#E8DB7D"
                />
                <path
                    d="M120.131 195.91C120.358 196.991 119.666 198.053 118.58 198.259C101.4 201.507 83.6674 200.195 67.153 194.451C66.1097 194.089 65.5815 192.936 65.9651 191.9L76.7312 162.83C77.1149 161.794 78.2647 161.268 79.3119 161.62C89.636 165.086 100.667 165.903 111.389 163.995C112.476 163.801 113.536 164.49 113.763 165.571L120.131 195.91Z"
                    fill="#E8DB7D"
                />
                <path
                    d="M163.236 174.868C163.948 175.712 163.843 176.976 162.985 177.671C152.541 186.141 140.495 192.418 127.569 196.125C126.507 196.429 125.411 195.791 125.128 194.724L117.179 164.76C116.896 163.692 117.533 162.6 118.591 162.284C126.515 159.919 133.916 156.063 140.394 150.924C141.26 150.238 142.52 150.342 143.233 151.185L163.236 174.868Z"
                    fill="#E8DB7D"
                />
            </svg>
        </div>
    );
}