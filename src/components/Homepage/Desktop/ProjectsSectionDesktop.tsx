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
    foreGroundColor: "black" | "white";
};

const PROJECT_DATA: ProjectItem[] = [
    { id: "proj-1", title: "DJK", videoSrc: `${CDN_URL}/images/homepage/projects/djk-project.mp4`, foreGroundColor: "black" },
    { id: "proj-2", title: "A.U.T.O.B.O.T", videoSrc: `${CDN_URL}/images/homepage/projects/autobot-project.mp4`, foreGroundColor: "white" },
    { id: "proj-3", title: "Cameriz", videoSrc: `${CDN_URL}/images/homepage/projects/cameriz-project.mp4`, foreGroundColor: "black" },
    { id: "proj-4", title: "RA", videoSrc: `${CDN_URL}/images/homepage/projects/ra-project.mp4`, foreGroundColor: "white" },
    { id: "proj-5", title: "steamOvap", videoSrc: `${CDN_URL}/images/homepage/projects/steamovap-project.mp4`, foreGroundColor: "black" },
    { id: "proj-6", title: "DJK", videoSrc: `${CDN_URL}/images/homepage/projects/djk-project.mp4`, foreGroundColor: "black" },
    { id: "proj-7", title: "RA", videoSrc: `${CDN_URL}/images/homepage/projects/ra-project.mp4`, foreGroundColor: "white" },
];

export default function ProjectsSectionDesktop() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const prevIndexRef = useRef<number>(0);

    const handleNext = () => {
        setDirection(1);

        setActiveIndex((prev) =>
            Math.min(prev + 1, PROJECT_DATA.length - 1)
        );
    };

    const handlePrev = () => {
        setDirection(-1);

        setActiveIndex((prev) =>
            Math.max(prev - 1, 0)
        );
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

            const tiltAngle = isMovingForward ? -3 : 3;

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
                                onNext={handleNext}
                                onPrev={handlePrev}
                                onSetActive={handleSetActive}
                            />
                        ))}
                    </div>
                </div>

                <div className="project-controls" style={{ display: "flex", }}>
                    <button onClick={handlePrev} disabled={activeIndex === 0} className="project-control-btn prev-btn" style={{ cursor: activeIndex === 0 ? "not-allowed" : "pointer", opacity: activeIndex === 0 ? 0.5 : 1 }}>
                        <span className="icon-hero-cta-arrow"></span>
                    </button>

                    <button onClick={handleNext} disabled={activeIndex === PROJECT_DATA.length - 1} className="project-control-btn next-btn" style={{ cursor: activeIndex === PROJECT_DATA.length - 1 ? "not-allowed" : "pointer", opacity: activeIndex === PROJECT_DATA.length - 1 ? 0.5 : 1 }}>
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
    onNext: () => void;
    onPrev: () => void;
    onSetActive: (index: number) => void;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(({
    project,
    index,
    isActive,
    isLast,
    onNext,
    onPrev,
    onSetActive
}, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    const cursorXTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
    const cursorYTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, });

    useEffect(() => {
        if (!videoRef.current) return;
        if (isActive) { videoRef.current.play().catch(() => { }); }
        else { videoRef.current.pause(); videoRef.current.currentTime = 0; }
    }, [isActive]);

    useLayoutEffect(() => {
        const cursor = cursorRef.current;
        if (!isHovering || !cursor) return;

        cursorXTo.current = gsap.quickTo(cursor, "left", { duration: 0.6, ease: "power3.out", });
        cursorYTo.current = gsap.quickTo(cursor, "top", { duration: 0.6, ease: "power3.out", });

        gsap.fromTo(
            cursor,
            { opacity: 0, scale: 0.75, },
            { opacity: 1, scale: 1, duration: 0.25, ease: "power3.out", overwrite: "auto", }
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
        setCursorPosition({ x: mouseX, y: mouseY, });
        setIsHovering(true);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const cardRect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - cardRect.left;
        const mouseY = event.clientY - cardRect.top;

        if (cursorXTo.current && cursorYTo.current) { cursorXTo.current(mouseX); cursorYTo.current(mouseY); }
        else { gsap.set(cursor, { left: mouseX, top: mouseY, }); }
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
            return;
        }

        if (isLast) {
            onPrev();
            return;
        }

        onNext();
    };

    const getCursorLabel = () => {
        if (!isActive) return "View";
        if (isLast) return "Prev";

        return "Next";
    };

    return (
        <div ref={ref} className={`project-list ${isActive ? "active" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick} >
            {isHovering && (
                <div ref={cursorRef} className="project-card-hover" style={{ left: cursorPosition.x, top: cursorPosition.y, }} aria-hidden="true">
                    <span className="text-sb h6">
                        {getCursorLabel()}
                    </span>
                </div>
            )}

            <video ref={videoRef} className="project-video" src={project.videoSrc} loop muted autoPlay playsInline></video>

            {isActive && (
                <h3 className="h4 active-project-title text-md" style={{ color: project.foreGroundColor, }}>
                    {project.title}
                </h3>
            )}
        </div>
    );
});

ProjectCard.displayName = "ProjectCard";