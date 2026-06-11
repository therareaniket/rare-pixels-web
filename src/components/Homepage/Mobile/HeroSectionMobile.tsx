"use client";

// import "@/assets/css/mobile-custom.css";
// import "@/assets/css/responsive/mobile-responsive.css"
// import GlassEffect from "@/components/LiquideGlass";
// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSectionMobile() {
//     return (
//         <>
//             <section className="section">
//                 <div className="container">
//                     <div className="hero-wrapper">
//                         <div className="scroll-effect-wrapper">
//                             <div className="hero-content">
//                                 <div className="site-hero-discrp">
//                                     <h1 className="text-md">
//                                         <span>Seen.</span>
//                                         <span>Remembered.</span>
//                                         <span>Chosen.</span>
//                                     </h1>

//                                     <p>Most brands compete for attention. The memorable ones earn it. At RarePixels, we blend strategy, creativity, and technology to create digital experiences that people notice, trust, and return to.</p>
                                    
//                                     <Link href="/about" title="Make it RARE" className="hero-link-cta text-rg">Make it Rare <span className="icon-hero-cta-arrow cta-arrow"></span></Link>
//                                 </div>

//                                 <div className="brand-statistics">
//                                     <div className="stat-item">
//                                         <h2 className="h5 text-md">100+</h2>
//                                         <p>Brands Empowered</p>
//                                     </div>

//                                     <div className="stat-item">
//                                         <h2 className="h5 text-md">120K+</h2>
//                                         <p>Lines of Code Crafted</p>
//                                     </div>

//                                     <div className="stat-item">
//                                         <h2 className="h5 text-md">250+</h2>
//                                         <p>Creative Campaigns</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="element-box">
//                                 <Image src="/images/homepage/ui-ux-eye-mobile.png" width={424} height={225} alt=""></Image>
//                             </div>

//                             <div className="services-highlight">
//                                 <div className="service-item">
//                                     <GlassEffect>
//                                         <h5 className="text-md">👁️ UI/UX Design Services</h5>
//                                     </GlassEffect>
                                    
//                                     <p className="text-rg">Experiences users remember and businesses benefit from</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }



import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import GlassEffect from "@/components/LiquideGlass";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Define each sequence: folder name, first frame, last frame
const SEQUENCES = [
    { folder: "eye-frames", first: 24, last: 160 },
    { folder: "brain-frames", first: 12, last: 100 },
    { folder: "heart-frames", first: 1, last: 100 },
    { folder: "hand-frames", first: 4, last: 75 },
] as const;

function getFrameSrc(folder: string, frameNum: number) {
    const padded = String(frameNum).padStart(4, "0");
    return `/images/homepage/${folder}/frame_${padded}.jpeg`;
}

export default function HeroSectionMobile() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // frames[seqIndex][frameIndex] = HTMLImageElement
    const framesRef = useRef<HTMLImageElement[][]>([]);

    // Track current (seqIndex, frameIndex) to avoid redundant draws
    const currentRef = useRef({ seq: -1, frame: -1 });
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const seqLengths = SEQUENCES.map((s) => s.last - s.first + 1);
        const totalSequences = SEQUENCES.length;

        // Initialize frame arrays
        framesRef.current = SEQUENCES.map(() => []);

        let totalLoaded = 0;
        const totalFramesAll = seqLengths.reduce((a, b) => a + b, 0);

        const drawFrame = (seqIndex: number, frameIndex: number) => {
            const img = framesRef.current[seqIndex]?.[frameIndex];
            if (!img || !img.complete) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        // Scroll handler — figure out which sequence + which frame within it
        const handleScroll = () => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;

            const rect = wrapper.getBoundingClientRect();
            const wrapperTop = window.scrollY + rect.top;
            const scrollStart = wrapperTop;

            // Total scroll distance for the whole animation.
            // Each sequence gets one viewport-height (100vh) of scroll.
            const scrollEnd = wrapperTop + window.innerHeight * totalSequences;

            const scrolled = window.scrollY - scrollStart;
            const scrollRange = scrollEnd - scrollStart;
            const overallProgress = Math.min(Math.max(scrolled / scrollRange, 0), 1);

            // Which segment (0 to totalSequences-1) are we in?
            const segmentSize = 1 / totalSequences;
            let seqIndex = Math.floor(overallProgress / segmentSize);
            if (seqIndex >= totalSequences) seqIndex = totalSequences - 1;
            if (seqIndex < 0) seqIndex = 0;

            // Progress within this segment (0 to 1)
            const segmentProgress = Math.min( Math.max((overallProgress - seqIndex * segmentSize) / segmentSize, 0), 1 );

            const frameCount = seqLengths[seqIndex];
            const frameIndex = Math.round(segmentProgress * (frameCount - 1));

            const current = currentRef.current;
            if (seqIndex !== current.seq || frameIndex !== current.frame) {
                current.seq = seqIndex;
                current.frame = frameIndex;

                if (rafRef.current) cancelAnimationFrame(rafRef.current);
                    rafRef.current = requestAnimationFrame(() => {
                        drawFrame(seqIndex, frameIndex);
                    });
            }
        };

        // Preload all frames across all sequences
        SEQUENCES.forEach((seq, seqIndex) => {
            const count = seqLengths[seqIndex];
            for (let i = 0; i < count; i++) {
                const img = new window.Image();
                img.src = getFrameSrc(seq.folder, seq.first + i);
                framesRef.current[seqIndex][i] = img;

                img.onload = () => {
                    totalLoaded++;
                    // Draw the very first frame of the very first sequence as soon as ready
                    if (seqIndex === 0 && i === 0) drawFrame(0, 0);
                    // Once everything is loaded, redraw whatever is currently active
                    if (totalLoaded === totalFramesAll) { drawFrame(currentRef.current.seq, currentRef.current.frame); }
                };
            }
        });

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="hero-wrapper" ref={wrapperRef}>
                        <div className="scroll-effect-wrapper">
                            <div className="hero-content">
                                <div className="site-hero-discrp">
                                <h1 className="text-md">
                                    <span>Seen.</span>
                                    <span>Remembered.</span>
                                    <span>Chosen.</span>
                                </h1>
                                <p>Most brands compete for attention. The memorable ones earn it. At RarePixels, we blend strategy, creativity, and technology to create digital experiences that people notice, trust, and return to.</p>
                                <Link href="#" title="Make it RARE" className="hero-link-cta text-rg">
                                    Make it Rare <span className="icon-hero-cta-arrow cta-arrow"></span>
                                </Link>
                                </div>

                                <div className="brand-statistics">
                                <div className="stat-item">
                                    <h2 className="h5 text-md">100+</h2>
                                    <p>Brands Empowered</p>
                                </div>
                                <div className="stat-item">
                                    <h2 className="h5 text-md">120K+</h2>
                                    <p>Lines of Code Crafted</p>
                                </div>
                                <div className="stat-item">
                                    <h2 className="h5 text-md">250+</h2>
                                    <p>Creative Campaigns</p>
                                </div>
                                </div>
                            </div>

                            <div className="element-box">
                                <canvas ref={canvasRef} width={424} height={225} />
                            </div>

                            <div className="services-highlight">
                                <div className="service-item">
                                    <GlassEffect>
                                        <h5 className="text-md">👁️ UI/UX Design Services</h5>
                                    </GlassEffect>

                                    <p className="text-rg">Experiences users remember and businesses benefit from</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}