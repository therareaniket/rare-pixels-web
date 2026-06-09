'use client';

import { useEffect, useRef } from 'react';

type Particle = {
    x: number;
    y: number;
    originX: number;
    originY: number;
    color: string;
};

const PARTICLE_DIAMETER = 3;
const REPEL_RADIUS = 200;
const REPEL_SPEED = 15;
const RETURN_SPEED = 0.1;

export default function Brain() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const particles: Particle[] = [];
        const img = new Image();

        let mouseX = Infinity;
        let mouseY = Infinity;

        // ✅ Put your image in /public folder
        img.src = '/images/brain.png';

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = event.clientX - rect.left;
            mouseY = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseX = Infinity;
            mouseY = Infinity;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, img.width, img.height);

            const numRows = Math.round(img.height / PARTICLE_DIAMETER);
            const numColumns = Math.round(img.width / PARTICLE_DIAMETER);

            for (let row = 0; row < numRows; row++) {
                for (let col = 0; col < numColumns; col++) {
                    const x = col * PARTICLE_DIAMETER;
                    const y = row * PARTICLE_DIAMETER;
                    const pixelIndex = (y * img.width + x) * 4;

                    const red = imageData.data[pixelIndex];
                    const green = imageData.data[pixelIndex + 1];
                    const blue = imageData.data[pixelIndex + 2];
                    const alpha = imageData.data[pixelIndex + 3];

                    if (alpha > 0) {
                        particles.push({
                        x: x + PARTICLE_DIAMETER / 2,
                        y: y + PARTICLE_DIAMETER / 2,
                        originX: x + PARTICLE_DIAMETER / 2,
                        originY: y + PARTICLE_DIAMETER / 2,
                        color: `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`,
                        });
                    }
                }
            }

            drawParticles();
        };

        function drawParticles() {
            updateParticles();

            if(ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((p) => {
                    ctx.beginPath();
                    ctx.arc( p.x, p.y, PARTICLE_DIAMETER / 2, 0, Math.PI * 2 );
                    ctx.fillStyle = p.color;
                    ctx.fill();
                });   
            }

            requestAnimationFrame(drawParticles);
        }

        function updateParticles() {
            particles.forEach((p) => {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < REPEL_RADIUS) {
                const angle = Math.atan2(dy, dx);
                const force = (REPEL_RADIUS - distance) / REPEL_RADIUS;

                p.x -= Math.cos(angle) * force * REPEL_SPEED;
                p.y -= Math.sin(angle) * force * REPEL_SPEED;
            } else {
                const dxOrigin = p.originX - p.x;
                const dyOrigin = p.originY - p.y;
                const distanceOrigin = Math.sqrt( dxOrigin * dxOrigin + dyOrigin * dyOrigin, );

                if (distanceOrigin > 0.1) {
                    const angle = Math.atan2(dyOrigin, dxOrigin);
                    p.x += Math.cos(angle) * distanceOrigin * RETURN_SPEED;
                    p.y += Math.sin(angle) * distanceOrigin * RETURN_SPEED;
                }
            }
        });
        }

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
  
    }, []);

  return(
    <>
        <div>
            <canvas ref={canvasRef} />;
        </div>
    </>
  )
}