'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PixelImageAssembleProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    pixelSize?: number; // Configured to 50px
}

export default function PixelImageAssemble({
    src,
    alt,
    width,
    height,
    pixelSize = 50,
}: PixelImageAssembleProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [tiles, setTiles] = useState<Array<{ id: number; col: number; row: number }>>([]);
    const [colsCount, setColsCount] = useState(0);

    useEffect(() => {
        const cols = Math.ceil(width / pixelSize);
        const rows = Math.ceil(height / pixelSize);
        setColsCount(cols);

        const tileList = [];
        let count = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                tileList.push({ id: count++, col: c, row: r });
            }
        }
        setTiles(tileList);
    }, [width, height, pixelSize]);

    useEffect(() => {
        if (tiles.length === 0 || !gridRef.current) return;

        const tileElements = gridRef.current.querySelectorAll('.pixel-tile');

        const ctx = gsap.context(() => {
            // Set initial state: completely invisible and scaled down at original position
            gsap.set(tileElements, {
                opacity: 0,
                scale: 0,
                transformOrigin: 'center center',
            });

            // Animate each 50px tile popping up randomly in its exact place
            gsap.to(tileElements, {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: 'back.out(1.7)',
                stagger: {
                    amount: 1.4,
                    from: 'random',
                },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [tiles]);

    return (
        <div
            ref={containerRef}
            className="pixel-assemble-container"
            style={{
                position: 'relative',
                width: `${width}px`,
                height: `${height}px`,
                overflow: 'hidden',
            }}
            aria-label={alt}
        >
            {/* Grid of sliced 50px image tiles */}
            {tiles.length > 0 && (
                <div
                    ref={gridRef}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${colsCount}, ${pixelSize}px)`,
                        width: `${width}px`,
                        height: `${height}px`,
                    }}
                >
                    {tiles.map((tile) => (
                        <div
                            key={tile.id}
                            className="pixel-tile"
                            style={{
                                width: `${pixelSize}px`,
                                height: `${pixelSize}px`,
                                backgroundImage: `url(${src})`,
                                backgroundSize: `${width}px ${height}px`,
                                backgroundPosition: `-${tile.col * pixelSize}px -${tile.row * pixelSize}px`,
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}