'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PixelImageCanvasProps { src: string; alt: string; pixelSize?: number; }

export default function PixelImageCanvas({
    src,
    alt,
    pixelSize = 40,
}: PixelImageCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new window.Image();
        // img.crossOrigin = 'anonymous';
        img.src = src;

        let animationCtx: gsap.Context | null = null;

        img.onload = () => {
            const render = () => {
                const width = container.clientWidth;
                const height = container.clientHeight;

                if (width === 0 || height === 0) return;

                // Handle high-DPI (Retina) displays smoothly without line artifacts
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);

                const cols = Math.ceil(width / pixelSize);
                const rows = Math.ceil(height / pixelSize);
                const tileW = width / cols;
                const tileH = height / rows;

                // Generate tile objects array with scale state
                const tiles: Array<{
                    col: number;
                    row: number;
                    scale: number;
                    opacity: number;
                }> = [];

                for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < cols; c++) {
                        tiles.push({ col: c, row: r, scale: 0, opacity: 0 });
                    }
                }

                // Render function called by GSAP on tick updates
                const draw = () => {
                    ctx.clearRect(0, 0, width, height);

                    tiles.forEach((tile) => {
                        if (tile.opacity <= 0 || tile.scale <= 0) return;

                        const destX = tile.col * tileW;
                        const destY = tile.row * tileH;

                        // Source coordinates from original image
                        const srcX = (tile.col / cols) * img.naturalWidth;
                        const srcY = (tile.row / rows) * img.naturalHeight;
                        const srcW = img.naturalWidth / cols;
                        const srcH = img.naturalHeight / rows;

                        ctx.save();
                        ctx.globalAlpha = tile.opacity;

                        // Scale tile from center point
                        const centerX = destX + tileW / 2;
                        const centerY = destY + tileH / 2;
                        ctx.translate(centerX, centerY);
                        ctx.scale(tile.scale, tile.scale);
                        ctx.translate(-centerX, -centerY);

                        // Draw slightly larger tile (+0.5px overlap) to prevent sub-pixel seams
                        ctx.drawImage(
                            img,
                            srcX, srcY, srcW, srcH,
                            destX - 0.25, destY - 0.25, tileW + 0.5, tileH + 0.5
                        );

                        ctx.restore();
                    });
                };

                // GSAP Stagger Animation
                if (animationCtx) animationCtx.revert();

                animationCtx = gsap.context(() => {
                    gsap.to(tiles, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.35,
                        ease: 'back.out(1.7)',
                        stagger: {
                            amount: 1.2,
                            from: 'random',
                        },
                        onUpdate: draw,
                        scrollTrigger: {
                            trigger: container,
                            start: () => (window.innerWidth > 1024 ? 'top 60%' : 'top 40%'),
                            toggleActions: 'play none none reverse',
                        },
                    });
                }, container);
            };

            render();

            const observer = new ResizeObserver(() => render());
            observer.observe(container);

            return () => {
                observer.disconnect();
                if (animationCtx) animationCtx.revert();
            };
        };
    }, [src, pixelSize]);

    return (
        <div
            ref={containerRef}
            className="pixel-canvas-container"
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
            aria-label={alt}
        >
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                }}
            />
        </div>
    );
}