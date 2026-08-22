'use client'

import { useState, useRef, useEffect } from "react";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

const PROJECT_DATA = [
    { id: "proj-1", title: "DJK", videoSrc: `${CDN_URL}/images/homepage/projects/djk-project.mp4` },
    { id: "proj-2", title: "Cameriz", videoSrc: `${CDN_URL}/images/homepage/projects/cameriz-project.mp4` },
    { id: "proj-3", title: "A.U.T.O.B.O.T", videoSrc: `${CDN_URL}/images/homepage/projects/autobot-project.mp4` },
    { id: "proj-4", title: "RA", videoSrc: `${CDN_URL}/images/homepage/projects/ra-project.mp4` },
    { id: "proj-5", title: "steamOvap", videoSrc: `${CDN_URL}/images/homepage/projects/steamovap-project.mp4` },
    { id: "proj-6", title: "DJK", videoSrc: `${CDN_URL}/images/homepage/projects/djk-project.mp4` },
    { id: "proj-7", title: "RA", videoSrc: `${CDN_URL}/images/homepage/projects/ra-project.mp4` },
]

export default function ProjectsSectionDesktop() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % PROJECT_DATA.length);
    const handleSetActive = (index: number) => setActiveIndex(index);

    return (
        <section className="section projects-section">
            <div className="container">
                <div className="project-titles">
                    <h2 className="text-sb">Our Projects</h2>
                    <p className="text-18">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
                </div>

                <div className="projects-lists-wrapper">
                    <div className="projects-lists" style={{ ['--active-index' as any]: activeIndex }}>
                        {PROJECT_DATA.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} isActive={index === activeIndex} onNext={handleNext} onSetActive={handleSetActive} />
                        ))}
                    </div>

                    <h3 className="h4 active-project-title text-md">{PROJECT_DATA[activeIndex].title}</h3>
                </div>
            </div>
        </section>
    );
}

interface ProjectCardProps { project: any; index: number; isActive: boolean; onNext: () => void; onSetActive: (index: number) => void; }

function ProjectCard({ project, index, isActive, onNext, onSetActive }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (!videoRef.current) return;
        if (isActive) { videoRef.current.play().catch(() => {});
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isActive]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleClick = () => { if (isActive) { onNext(); } else { onSetActive(index); } };

    return (
        <div ref={cardRef} className={`project-list ${isActive ? 'active' : ''}`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onMouseMove={handleMouseMove} onClick={handleClick}>
            {isHovering && (
                <div className="custom-cursor-box" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}>
                    <span className="text-sb">
                        {isActive ? "Check out Next Project" : "Checkout This Project"}
                    </span>
                </div>
            )}

            <video ref={videoRef} className="project-video" src={project.videoSrc} loop muted autoPlay playsInline></video>
        </div>
    );
}