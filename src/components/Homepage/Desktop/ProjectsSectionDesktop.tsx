// 'use client'

// import { useState, useRef, useEffect } from "react";
// import "@/assets/css/desktop-custom.css";
// import "@/assets/css/responsive/desktop-responsive.css";

// const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

// const PROJECT_DATA = [
//     { id: "proj-1", title: "DJK", videoSrc: `${CDN_URL}/images/homepage/projects/djk-project.mp4`, foreGroundColor:"black" },
//     { id: "proj-2", title: "A.U.T.O.B.O.T", videoSrc: `${CDN_URL}/images/homepage/projects/autobot-project.mp4`, foreGroundColor:"white" },
//     { id: "proj-3", title: "Cameriz", videoSrc: `${CDN_URL}/images/homepage/projects/cameriz-project.mp4`, foreGroundColor:"black" },
//     { id: "proj-4", title: "RA", videoSrc: `${CDN_URL}/images/homepage/projects/ra-project.mp4`, foreGroundColor:"white" },
//     { id: "proj-5", title: "steamOvap", videoSrc: `${CDN_URL}/images/homepage/projects/steamovap-project.mp4`, foreGroundColor:"black" },
//     { id: "proj-6", title: "DJK", videoSrc: `${CDN_URL}/images/homepage/projects/djk-project.mp4`, foreGroundColor:"black" },
//     { id: "proj-7", title: "RA", videoSrc: `${CDN_URL}/images/homepage/projects/ra-project.mp4`, foreGroundColor:"white" },
// ];

// export default function ProjectsSectionDesktop() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [direction, setDirection] = useState<1 | -1>(1);

//     const handleNext = () => {
//         setActiveIndex((prev) => {
//             // Reached the end: bounce back to previous
//             if (prev >= PROJECT_DATA.length - 1) {
//                 setDirection(-1);
//                 return prev - 1;
//             }
//             // Reached the beginning: move forward
//             if (prev <= 0) {
//                 setDirection(1);
//                 return prev + 1;
//             }
//             return prev + direction;
//         });
//     };

//     const handleSetActive = (index: number) => {
//         setActiveIndex(index);
//         // Adjust direction based on selected card position
//         if (index === PROJECT_DATA.length - 1) {
//             setDirection(-1);
//         } else if (index === 0) {
//             setDirection(1);
//         }
//     };

//     return (
//         <section className="section projects-section">
//             <div className="container">
//                 <div className="project-titles">
//                     <h2 className="text-sb">Our Projects</h2>
//                     <p className="text-18">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
//                 </div>

//                 <div className="projects-lists-wrapper">
//                     <div className="projects-lists" style={{ ['--active-index' as any]: activeIndex }}>
//                         {PROJECT_DATA.map((project, index) => (
//                             <ProjectCard 
//                                 key={project.id} 
//                                 project={project} 
//                                 index={index} 
//                                 isActive={index === activeIndex} 
//                                 isLast={activeIndex === PROJECT_DATA.length - 1}
//                                 direction={direction}
//                                 onNext={handleNext} 
//                                 onSetActive={handleSetActive} 
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// interface ProjectCardProps { 
//     project: any; 
//     index: number; 
//     isActive: boolean; 
//     isLast: boolean;
//     direction: 1 | -1;
//     onNext: () => void; 
//     onSetActive: (index: number) => void; 
// }

// function ProjectCard({ project, index, isActive, isLast, direction, onNext, onSetActive }: ProjectCardProps) {
//     const cardRef = useRef<HTMLDivElement>(null);
//     const videoRef = useRef<HTMLVideoElement>(null);
//     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//     const [isHovering, setIsHovering] = useState(false);

//     useEffect(() => {
//         if (!videoRef.current) return;
//         if (isActive) { 
//             videoRef.current.play().catch(() => {});
//         } else {
//             videoRef.current.pause();
//             videoRef.current.currentTime = 0;
//         }
//     }, [isActive]);

//     const handleMouseMove = (e: React.MouseEvent) => {
//         if (!cardRef.current) return;
//         const rect = cardRef.current.getBoundingClientRect();
//         setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//     };

//     const handleClick = () => { 
//         if (isActive) { 
//             onNext(); 
//         } else { 
//             onSetActive(index); 
//         } 
//     };

//     // Label determination for custom cursor
//     const getCursorLabel = () => {
//         if (!isActive) return "View";
//         if (isLast || direction === -1) return "Prev";
//         return "Next";
//     };

//     return (
//         <div ref={cardRef} className={`project-list ${isActive ? 'active' : ''}`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onMouseMove={handleMouseMove} onClick={handleClick}>
//             {isHovering && (
//                 <div className="custom-cursor-box" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}>
//                     <span className="text-sb">
//                         {getCursorLabel()}
//                     </span>
//                 </div>
//             )}

//             <video ref={videoRef} className="project-video" src={project.videoSrc} loop muted autoPlay playsInline></video>

//             {isActive && (
//                 <h3 className="h4 active-project-title text-md" style={{ color: project.foreGroundColor }}>{project.title}</h3>
//             )}
//         </div>
//     );
// }

































'use client'

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

const PROJECT_DATA = [
    { id: "proj-1", title: "DJK", videoSrc: `${CDN_URL}/images/homepage/projects/djk-project.mp4`, foreGroundColor:"black" },
    { id: "proj-2", title: "A.U.T.O.B.O.T", videoSrc: `${CDN_URL}/images/homepage/projects/autobot-project.mp4`, foreGroundColor:"white" },
    { id: "proj-3", title: "Cameriz", videoSrc: `${CDN_URL}/images/homepage/projects/cameriz-project.mp4`, foreGroundColor:"black" },
    { id: "proj-4", title: "RA", videoSrc: `${CDN_URL}/images/homepage/projects/ra-project.mp4`, foreGroundColor:"white" },
    { id: "proj-5", title: "steamOvap", videoSrc: `${CDN_URL}/images/homepage/projects/steamovap-project.mp4`, foreGroundColor:"black" },
    { id: "proj-6", title: "DJK", videoSrc: `${CDN_URL}/images/homepage/projects/djk-project.mp4`, foreGroundColor:"black" },
    { id: "proj-7", title: "RA", videoSrc: `${CDN_URL}/images/homepage/projects/ra-project.mp4`, foreGroundColor:"white" },
];

export default function ProjectsSectionDesktop() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const prevIndexRef = useRef<number>(0);

    const handleNext = () => {
        setActiveIndex((prev) => {
            // Reached the end: bounce back to previous
            if (prev >= PROJECT_DATA.length - 1) {
                setDirection(-1);
                return prev - 1;
            }
            // Reached the beginning: move forward
            if (prev <= 0) {
                setDirection(1);
                return prev + 1;
            }
            return prev + direction;
        });
    };

    const handleSetActive = (index: number) => {
        if (index > activeIndex) {
            setDirection(1);
        } else if (index < activeIndex) {
            setDirection(-1);
        }
        
        setActiveIndex(index);

        // Adjust direction edge cases
        if (index === PROJECT_DATA.length - 1) {
            setDirection(-1);
        } else if (index === 0) {
            setDirection(1);
        }
    };

    // Staggered Wave Animation with GSAP
    useEffect(() => {
        if (cardRefs.current.length === 0) return;

        const previousIndex = prevIndexRef.current;
        const isMovingForward = activeIndex >= previousIndex;

        // Dynamically compute offset distance from the first card and gap
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

            // Kill active animations on this card before starting a new sequence
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
                                onSetActive={handleSetActive} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

interface ProjectCardProps { 
    project: any; 
    index: number; 
    isActive: boolean; 
    isLast: boolean;
    direction: 1 | -1;
    onNext: () => void; 
    onSetActive: (index: number) => void; 
}

import { forwardRef } from "react";

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(({ 
    project, 
    index, 
    isActive, 
    isLast, 
    direction, 
    onNext, 
    onSetActive 
}, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (!videoRef.current) return;
        if (isActive) { 
            videoRef.current.play().catch(() => {});
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isActive]);

    // const handleMouseMove = (e: React.MouseEvent) => {
    //     if (!ref || typeof ref === "function" || !ref.current) return;
    //     const rect = ref.current.getBoundingClientRect();
    //     setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    // };

    // const handleMouseMove = (e: React.MouseEvent) => {
    //     setMousePos({ x: e.clientX, y: e.clientY });
    // };


    const handleClick = () => { 
        if (isActive) { 
            onNext(); 
        } else { 
            onSetActive(index); 
        } 
    };

    const getCursorLabel = () => {
        if (!isActive) return "View";
        if (isLast || direction === -1) return "Prev";
        return "Next";
    };

    return (
        <div 
            ref={ref} 
            className={`project-list ${isActive ? 'active' : ''}`} 
            onMouseEnter={() => setIsHovering(true)} 
            onMouseLeave={() => setIsHovering(false)} 
            // onMouseMove={handleMouseMove} 
            onClick={handleClick}
        >
            {/* {isHovering && (
                <div className="custom-cursor-box" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}>
                    <span className="text-sb">
                        {getCursorLabel()}
                    </span>
                </div>
            )} */}

            <video ref={videoRef} className="project-video" src={project.videoSrc} loop muted autoPlay playsInline></video>

            {isActive && (
                <h3 className="h4 active-project-title text-md" style={{ color: project.foreGroundColor }}>{project.title}</h3>
            )}
        </div>
    );
});

ProjectCard.displayName = "ProjectCard";