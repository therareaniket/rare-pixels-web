'use client'

import { useState, useRef, useEffect, useLayoutEffect, forwardRef } from "react";
import gsap from "gsap";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

type ProjectItem = {
    id: string;
    title: string;
    videoSrc: string;
    thumbNail: string;
    foreGroundColor: "black" | "white";
};

const PROJECT_DATA: ProjectItem[] = [
    { id: "proj-1", title: "DJK", videoSrc: `${CDN_URL}/images/homepage/projects/djk-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/djk-project-tmbn.png`, foreGroundColor: "black" },
    { id: "proj-2", title: "A.U.T.O.B.O.T", videoSrc: `${CDN_URL}/images/homepage/projects/autobot-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/autobot-project-tmbn.png`, foreGroundColor: "white" },
    { id: "proj-3", title: "Cameriz", videoSrc: `${CDN_URL}/images/homepage/projects/cameriz-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/cameriz-project-tmbn.png`, foreGroundColor: "black" },
    { id: "proj-4", title: "Portal", videoSrc: `${CDN_URL}/images/homepage/projects/ra-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/ra-project-tmbn.png`, foreGroundColor: "white" },
    { id: "proj-5", title: "steamOvap", videoSrc: `${CDN_URL}/images/homepage/projects/steamovap-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/steamovap-project-tmbn.png`, foreGroundColor: "black" },
    { id: "proj-6", title: "Mugoray", videoSrc: `${CDN_URL}/images/homepage/projects/mugoray-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/mugoray-project-tmbn.png`, foreGroundColor: "white" },
    { id: "proj-7", title: "Lalita", videoSrc: `${CDN_URL}/images/homepage/projects/lalita-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/lalita-project-tmbn.png`, foreGroundColor: "white" },
];

export default function ProjectsSectionDesktop() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const prevIndexRef = useRef<number>(0);

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => Math.min(prev + 1, PROJECT_DATA.length - 1));
    };

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleSetActive = (index: number) => {
        if (index === activeIndex) return;

        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    useEffect(() => {
        if (cardRefs.current.length === 0) return;

        const previousIndex = prevIndexRef.current;
        const isMovingForward = activeIndex >= previousIndex;

        const firstCard = cardRefs.current[0];
        if (!firstCard) return;

        const style = window.getComputedStyle(firstCard.parentElement!);
        const gap = parseFloat(style.gap) || 0;
        const cardWidth = firstCard.offsetWidth;
        const stepSize = cardWidth + gap;

        const targetX = -activeIndex * stepSize;
        const baseDelay = 0.08;

        cardRefs.current.forEach((card, i) => {
            if (!card) return;

            let delay = baseDelay;

            if (isMovingForward) {
                if (i > previousIndex) {
                    delay = baseDelay + 0.15 + (i - (previousIndex + 1)) * 0.08;
                }
            } else {
                if (i < previousIndex) {
                    delay = baseDelay + 0.15 + (previousIndex - 1 - i) * 0.08;
                }
            }

            const tiltAngle = isMovingForward ? -5 : 5;

            gsap.killTweensOf(card);

            gsap.timeline({ delay })
                .to(card, {
                    x: targetX,
                    rotation: tiltAngle,
                    duration: 1,
                    ease: "power4.inOut"
                })
                .to(card, {
                    rotation: 0,
                    duration: 1.5,
                    ease: "power4.out"
                }, "-=0.25");
        });

        prevIndexRef.current = activeIndex;
    }, [activeIndex]);

    return (
        <section className="section projects-section">
            <div className="container">
                <div className="project-titles">
                    <h2 className="text-sb">Our Projects</h2>
                    <p className="text-18">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
                </div>

                <div className="projects-lists-wrapper">
                    <div className="projects-lists">
                        {PROJECT_DATA.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                ref={(el) => { cardRefs.current[index] = el; }}
                                project={project}
                                index={index}
                                isActive={index === activeIndex}
                                isLast={activeIndex === PROJECT_DATA.length - 1}
                                direction={direction}
                                onSetActive={handleSetActive}
                            />
                        ))}
                    </div>
                </div>

                <div className="project-controls" style={{ display: "flex" }}>
                    <button aria-label="Previous slide" onClick={handlePrev} disabled={activeIndex === 0} className="project-control-btn prev-btn" style={{ cursor: activeIndex === 0 ? "not-allowed" : "pointer", opacity: activeIndex === 0 ? 0.5 : 1 }}>
                        <span className="icon-hero-cta-arrow"></span>
                    </button>

                    <button aria-label="Next slide" onClick={handleNext} disabled={activeIndex === PROJECT_DATA.length - 1} className="project-control-btn next-btn" style={{ cursor: activeIndex === PROJECT_DATA.length - 1 ? "not-allowed" : "pointer", opacity: activeIndex === PROJECT_DATA.length - 1 ? 0.5 : 1 }}>
                        <span className="icon-hero-cta-arrow"></span>
                    </button>
                </div>
            </div>
        </section>
    );
}

interface ProjectCardProps {
    project: ProjectItem;
    index: number;
    isActive: boolean;
    isLast: boolean;
    direction: 1 | -1;
    onSetActive: (index: number) => void;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(({
    project,
    index,
    isActive,
    isLast,
    onSetActive
}, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    const cursorXTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
    const cursorYTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    useEffect(() => {
        if (!videoRef.current) return;

        if (isActive) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsVideoPlaying(true);
                    })
                    .catch(() => {
                        setIsVideoPlaying(false);
                    });
            }
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setIsVideoPlaying(false);
        }
    }, [isActive]);

    useLayoutEffect(() => {
        const cursor = cursorRef.current;
        if (!isHovering || !cursor) return;

        cursorXTo.current = gsap.quickTo(cursor, "left", { duration: 0.6, ease: "power3.out" });
        cursorYTo.current = gsap.quickTo(cursor, "top", { duration: 0.6, ease: "power3.out" });

        gsap.fromTo(
            cursor,
            { opacity: 0, scale: 0.75 },
            { opacity: 1, scale: 1, duration: 0.25, ease: "power3.out", overwrite: "auto" }
        );

        return () => {
            gsap.killTweensOf(cursor);
            cursorXTo.current = null;
            cursorYTo.current = null;
        };
    }, [isHovering]);

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const cardRect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - cardRect.left;
        const mouseY = event.clientY - cardRect.top;

        const cursor = cursorRef.current;

        if (cursor) {
            gsap.killTweensOf(cursor);
            cursorXTo.current?.(mouseX);
            cursorYTo.current?.(mouseY);

            gsap.to(cursor, {
                opacity: 1,
                scale: 1,
                duration: 0.25,
                ease: "power3.out",
                overwrite: "auto",
            });

            return;
        }
        setCursorPosition({ x: mouseX, y: mouseY });
        setIsHovering(true);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const cardRect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - cardRect.left;
        const mouseY = event.clientY - cardRect.top;

        if (cursorXTo.current && cursorYTo.current) { 
            cursorXTo.current(mouseX); 
            cursorYTo.current(mouseY); 
        } else { 
            gsap.set(cursor, { left: mouseX, top: mouseY }); 
        }
    };

    const handleMouseLeave = () => {
        const cursor = cursorRef.current;
        if (!cursor) { setIsHovering(false); return; }

        gsap.killTweensOf(cursor);
        gsap.to(cursor, {
            opacity: 0,
            scale: 0.75,
            duration: 0.2,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: () => { setIsHovering(false); },
        });
    };

    const handleClick = () => {
        if (!isActive) {
            onSetActive(index);
        }
    };

    return (
        <div ref={ref} className={`project-list ${isActive ? "active" : ""}`}
            style={{ position: "relative", overflow: "hidden" }}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick} >

            {/* Native HTML poster attribute for initial load */}
            <video  ref={videoRef}  className="project-video"  src={project.videoSrc}  poster={project.thumbNail} loop  muted  playsInline />

            {/* Thumbnail Overlay when video is paused/inactive */}
            {!isVideoPlaying && (
                <img src={project.thumbNail} alt={project.title} 
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 1,
                        pointerEvents: "none"
                    }}
                />
            )}

            {isActive && (
                <h3 className="h4 active-project-title text-md" style={{ color: project.foreGroundColor, zIndex: 2 }}>
                    {project.title}
                </h3>
            )}
        </div>
    );
});

ProjectCard.displayName = "ProjectCard";