"use client";

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const timelineData = [
    {
        year: "2024",
        title: "The Launch of RarePixels",
        image: "/images/aboutpage/about-timeline/timeline-2024.svg",
        description:
            "From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.",
    },
    {
        year: "2025",
        title: "Purposeful Growth",
        image: "/images/aboutpage/about-timeline/timeline-2025.svg",
        description:
            "Every project brought new challenges, fresh perspectives, and valuable opportunities to grow. As RarePixels expanded its reach, we continued refining our approach and strengthening our expertise across multiple disciplines. The trust placed in us by growing brands allowed us to take on more ambitious projects, and create experiences that combined creativity, strategy, and technology.",
    },
    {
        year: "2026",
        title: "Shaping What's Next",
        image: "/images/aboutpage/about-timeline/timeline-2026.svg",
        description:
            "Today, RarePixels continues to evolve as a creative and technology partner for ambitious brands. We remain focused on helping businesses create meaningful experiences through innovation, collaboration, and purposeful execution. Every project we take on reflects our commitment to quality, creativity, and delivering value that extends far beyond the final deliverable.",
    },
];

export default function AboutTimelineSectionDesktop() {

    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const tabletYearsRef = useRef<HTMLSpanElement[]>([]);
    const tabletLineRef = useRef<HTMLDivElement>(null);
    const desktopDotRefs = useRef<(HTMLDivElement | null)[]>([]);
    const desktopTargetRef = useRef<HTMLDivElement>(null);
    const movingDotRef = useRef<HTMLDivElement>(null);
    const [showDesktopContent, setShowDesktopContent] = useState(false);
    const [yearIndex, setYearIndex] = useState(0);
    const desktopLineRef = useRef<HTMLDivElement>(null);
    const line1Ref = useRef<HTMLDivElement>(null);
    const line2Ref = useRef<HTMLDivElement>(null);
    const line3Ref = useRef<HTMLDivElement>(null);

    const desktopStageRef = useRef(-1);

    const updateTabletYear = (index: number) => {
        tabletYearsRef.current.forEach((year) => {
            year?.classList.remove("active");
        });

        tabletYearsRef.current[index]?.classList.add("active");

        setActiveIndex(index);
    };


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        mm.add("(min-width: 840px)", () => {
            const firstDot = desktopDotRefs.current[0];
            const secondDot = desktopDotRefs.current[1];
            const thirdDot = desktopDotRefs.current[2];

            const targetDot = desktopTargetRef.current;
            const line1 = line1Ref.current;
            const line2 = line2Ref.current;
            const line3 = line3Ref.current;

            if (
                !firstDot ||
                !secondDot ||
                !thirdDot ||
                !targetDot ||
                !line1 ||
                !line2 ||
                !line3
            ) {
                return;
            }

            let travelDistance = 0;
            let targetLineWidth = 0;

            const firstMoveStart = 0;
            const firstMoveEnd = 0.18;

            const secondMoveStart = 0.36;
            const secondMoveEnd = 0.54;

            const thirdMoveStart = 0.72;
            const thirdMoveEnd = 0.9;

            const firstLineFadeStart = secondMoveStart - 0.06;
            const secondLineFadeStart = thirdMoveStart - 0.06;

            const getStageProgress = (
                scrollProgress: number,
                start: number,
                end: number
            ) => {
                return gsap.utils.clamp(
                    0,
                    1,
                    (scrollProgress - start) / (end - start)
                );
            };

            const calculateDimensions = () => {
                const firstX = gsap.getProperty(firstDot, "x");
                const secondX = gsap.getProperty(secondDot, "x");
                const thirdX = gsap.getProperty(thirdDot, "x");

                gsap.set([firstDot, secondDot, thirdDot], {
                    x: 0,
                });

                const startRect = firstDot.getBoundingClientRect();
                const targetRect = targetDot.getBoundingClientRect();
                const wrapperRect =
                    firstDot.parentElement?.getBoundingClientRect();

                travelDistance = targetRect.left - startRect.left;

                if (wrapperRect) {
                    targetLineWidth = Math.max(
                        0,
                        targetRect.left - wrapperRect.left
                    );
                }

                gsap.set(firstDot, {
                    x: firstX,
                });

                gsap.set(secondDot, {
                    x: secondX,
                });

                gsap.set(thirdDot, {
                    x: thirdX,
                });
            };

            calculateDimensions();

            const moveFirstDot = gsap.quickTo(firstDot, "x", {
                duration: 0.8,
                ease: "power2.out",
            });

            const moveSecondDot = gsap.quickTo(secondDot, "x", {
                duration: 0.8,
                ease: "power2.out",
            });

            const moveThirdDot = gsap.quickTo(thirdDot, "x", {
                duration: 0.8,
                ease: "power2.out",
            });

            const moveFirstDotOpacity = gsap.quickTo(
                firstDot,
                "opacity",
                {
                    duration: 0.25,
                    ease: "power1.out",
                }
            );

            const moveSecondDotOpacity = gsap.quickTo(
                secondDot,
                "opacity",
                {
                    duration: 0.25,
                    ease: "power1.out",
                }
            );

            const moveThirdDotOpacity = gsap.quickTo(
                thirdDot,
                "opacity",
                {
                    duration: 0.25,
                    ease: "power1.out",
                }
            );

            const moveLine1Width = gsap.quickTo(line1, "width", {
                duration: 0.8,
                ease: "power2.out",
            });

            const moveLine2Width = gsap.quickTo(line2, "width", {
                duration: 0.8,
                ease: "power2.out",
            });

            const moveLine3Width = gsap.quickTo(line3, "width", {
                duration: 0.8,
                ease: "power2.out",
            });

            const moveLine1Opacity = gsap.quickTo(line1, "opacity", {
                duration: 0.25,
                ease: "power1.out",
            });

            const moveLine2Opacity = gsap.quickTo(line2, "opacity", {
                duration: 0.25,
                ease: "power1.out",
            });

            const moveLine3Opacity = gsap.quickTo(line3, "opacity", {
                duration: 0.25,
                ease: "power1.out",
            });

            const trigger = ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=3600",
                scrub: 4,
                invalidateOnRefresh: true,

                onRefresh: () => {
                    calculateDimensions();
                },

                onUpdate: (self) => {
                    const progress = self.progress;

                    const firstDotProgress = getStageProgress(
                        progress,
                        firstMoveStart,
                        firstMoveEnd
                    );

                    const secondDotProgress = getStageProgress(
                        progress,
                        secondMoveStart,
                        secondMoveEnd
                    );

                    const thirdDotProgress = getStageProgress(
                        progress,
                        thirdMoveStart,
                        thirdMoveEnd
                    );

                    moveFirstDot(
                        travelDistance * firstDotProgress
                    );

                    moveSecondDot(
                        travelDistance * secondDotProgress
                    );

                    moveThirdDot(
                        travelDistance * thirdDotProgress
                    );

                    let line1Width = 0;
                    let line1Opacity = 0;

                    if (
                        progress > firstMoveStart &&
                        progress < firstMoveEnd
                    ) {
                        line1Width =
                            targetLineWidth * firstDotProgress;

                        line1Opacity = 1;
                    } else if (
                        progress >= firstMoveEnd &&
                        progress < secondMoveStart
                    ) {
                        line1Width = targetLineWidth;

                        if (progress < firstLineFadeStart) {
                            line1Opacity = 1;
                        } else {
                            const line1FadeProgress =
                                gsap.utils.clamp(
                                    0,
                                    1,
                                    (progress - firstLineFadeStart) /
                                    (
                                        secondMoveStart -
                                        firstLineFadeStart
                                    )
                                );

                            line1Opacity =
                                1 - line1FadeProgress;
                        }
                    }

                    moveLine1Width(line1Width);
                    moveLine1Opacity(line1Opacity);
                    moveFirstDotOpacity(line1Opacity);

                    let line2Width = 0;
                    let line2Opacity = 0;

                    if (
                        progress >= secondMoveStart &&
                        progress < secondMoveEnd
                    ) {
                        line2Width =
                            targetLineWidth * secondDotProgress;

                        line2Opacity = 1;
                    } else if (
                        progress >= secondMoveEnd &&
                        progress < thirdMoveStart
                    ) {
                        line2Width = targetLineWidth;

                        if (progress < secondLineFadeStart) {
                            line2Opacity = 1;
                        } else {
                            const line2FadeProgress =
                                gsap.utils.clamp(
                                    0,
                                    1,
                                    (progress - secondLineFadeStart) /
                                    (
                                        thirdMoveStart -
                                        secondLineFadeStart
                                    )
                                );

                            line2Opacity =
                                1 - line2FadeProgress;
                        }
                    }

                    moveLine2Width(line2Width);
                    moveLine2Opacity(line2Opacity);
                    moveSecondDotOpacity(line2Opacity);

                    let line3Width = 0;
                    let line3Opacity = 0;

                    if (
                        progress >= thirdMoveStart &&
                        progress < thirdMoveEnd
                    ) {
                        line3Width =
                            targetLineWidth * thirdDotProgress;

                        line3Opacity = 1;
                    } else if (progress >= thirdMoveEnd) {
                        line3Width = targetLineWidth;
                        line3Opacity = 1;
                    }

                    moveLine3Width(line3Width);
                    moveLine3Opacity(line3Opacity);
                    moveThirdDotOpacity(line3Opacity);

                    let newStage = -1;

                    if (progress >= thirdMoveEnd) {
                        newStage = 2;
                    } else if (progress >= secondMoveEnd) {
                        newStage = 1;
                    } else if (progress >= firstMoveEnd) {
                        newStage = 0;
                    }

                    if (desktopStageRef.current !== newStage) {
                        desktopStageRef.current = newStage;

                        if (newStage === -1) {
                            setShowDesktopContent(false);
                            setActiveIndex(0);
                            setYearIndex(0);
                        } else if (newStage === 0) {
                            setShowDesktopContent(true);
                            setActiveIndex(0);
                            setYearIndex(1);
                        } else if (newStage === 1) {
                            setShowDesktopContent(true);
                            setActiveIndex(1);
                            setYearIndex(2);
                        } else if (newStage === 2) {
                            setShowDesktopContent(true);
                            setActiveIndex(2);
                            setYearIndex(0);
                        }
                    }
                },
            });

            return () => {
                trigger.kill();

                desktopStageRef.current = -1;

                gsap.killTweensOf([
                    firstDot,
                    secondDot,
                    thirdDot,
                    line1,
                    line2,
                    line3,
                ]);

                gsap.set(
                    [
                        firstDot,
                        secondDot,
                        thirdDot,
                        line1,
                        line2,
                        line3,
                    ],
                    {
                        clearProps: "transform,width,opacity",
                    }
                );
            };
        });

        mm.add("(max-width: 839px)", () => {
            const trigger = ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=2000",
                scrub: 2,

                onUpdate: (self) => {
                    const progress = self.progress;

                    if (progress < 0.33) {
                        updateTabletYear(0);

                        gsap.to(tabletLineRef.current, {
                            width: "6%",
                            duration: 1,
                            overwrite: true,
                        });

                        gsap.to(movingDotRef.current, {
                            left: "6%",
                            duration: 1,
                            overwrite: true,
                        });

                    } else if (progress < 0.66) {
                        updateTabletYear(1);

                        gsap.to(tabletLineRef.current, {
                            width: "50%",
                            duration: 1,
                            overwrite: true,
                        });

                        gsap.to(movingDotRef.current, {
                            left: "50%",
                            duration: 1,
                            overwrite: true,
                        });

                    } else {
                        updateTabletYear(2);

                        gsap.to(tabletLineRef.current, {
                            width: "94%",
                            duration: 1,
                            overwrite: true,
                        });

                        gsap.to(movingDotRef.current, {
                            left: "94%",
                            duration: 1,
                            overwrite: true,
                        });
                    }
                }

            });

            return () => trigger.kill();
        });

        return () => mm.revert();
    }, []);

    useEffect(() => {
        if (!showDesktopContent) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                {
                    opacity: 0,
                    scale: 0,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 2,
                }
            );

            gsap.fromTo(
                imageRef.current,
                {
                    opacity: 0,
                    scale: 0.5,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [activeIndex, showDesktopContent]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".timeline-tablet-image-wrapper",
                {
                    opacity: 0,
                    scale: 0.5,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                }
            );

            gsap.fromTo(
                ".timeline-text-wrapper-desktop",
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [activeIndex]);

    return (
        <>
            <section ref={sectionRef} className="section section-bg-blue abt-time-line-desktop-sticky">
                <div className="abt-timeline-desktop-inner">
                    <div className="container">
                        <div className="abt-timeline-title-desktop">
                            <div className="abt-timeline-title-left">
                                <h2 className="text-sb text-white">Our story is more than a timeline of milestones.</h2>

                                <h3 className="text-sb h5 text-white">It&apos;s a journey of learning, growing, and continuously evolving to create work that truly matters.</h3>
                            </div>
                            <div className="abt-timeline-title-right">
                                <p className="text-rg text-18 text-white">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                            </div>
                        </div>

                        <div className="time-line-hr-wrapper">
                            <div className="timeline-hr"></div>
                            <div ref={desktopLineRef} className="timeline-desktop-hr"></div>

                            <div ref={tabletLineRef} className="timeline-active-hr" ></div>
                            <div ref={line1Ref} className="timeline-line-active line-1"></div>
                            <div ref={line2Ref} className="timeline-line-active line-2"></div>
                            <div ref={line3Ref} className="timeline-line-active line-3"></div>

                            <div ref={movingDotRef} className="timeline-dot-active" ></div>

                            <div ref={desktopTargetRef} className="desktop-dot-target" ></div>
                            <div
                                ref={(el) => { desktopDotRefs.current[0] = el; }}
                                className={`timeline-dot desktop-timeline-dot ${showDesktopContent ? "reached" : ""
                                    }`}
                            />
                            <div
                                ref={(el) => { desktopDotRefs.current[1] = el; }}
                                className={`timeline-dot desktop-timeline-dot ${activeIndex >= 1 ? "reached" : ""
                                    }`}
                            />

                            <div
                                ref={(el) => { desktopDotRefs.current[2] = el; }}
                                className={`timeline-dot desktop-timeline-dot ${activeIndex >= 2 ? "reached" : ""
                                    }`}
                            />
                        </div>

                        <div className="abt-timeline-desktop-wrapper">
                            <div className="abt-timeline-desktop-date">
                                <span className="h3 abt-timeline-titledate text-sb active">
                                    {timelineData[yearIndex].year}
                                </span>
                            </div>

                            {showDesktopContent && (
                                <div className="abt-timeline-content-wrapper">
                                    <div ref={imageRef} className="abt-timeline-content-left">
                                        <Image src={timelineData[activeIndex].image} alt="timeline-img" width={291} height={278}></Image>

                                    </div>

                                    <div ref={contentRef} className="abt-timeline-content-right">
                                        <span className="text-sb text-white">
                                            {timelineData[activeIndex].year}
                                        </span>

                                        <div className="timeline-content">
                                            <h6 className="text-sb text-upper-case text-white">
                                                {timelineData[activeIndex].title}
                                            </h6>

                                            <p className="text-18 text-rg text-light-grey">
                                                {timelineData[activeIndex].description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        <div className="abt-timeline-tablet">
                            <div className="timeline-tablet-dates">
                                <span
                                    ref={(el) => {
                                        if (el) tabletYearsRef.current[0] = el;
                                    }}
                                    className="h5 text-sb"
                                >
                                    2024
                                </span>

                                <span
                                    ref={(el) => {
                                        if (el) tabletYearsRef.current[1] = el;
                                    }}
                                    className="h5 text-sb"
                                >
                                    2025
                                </span>

                                <span
                                    ref={(el) => {
                                        if (el) tabletYearsRef.current[2] = el;
                                    }}
                                    className="h5 text-sb"
                                >
                                    2026
                                </span>
                            </div>

                            <div className="timeline-content-wrapper-tablet">
                                <div className="timeline-tablet-image-wrapper">
                                    <Image
                                        src={timelineData[activeIndex].image}
                                        alt=""
                                        width={291}
                                        height={278}
                                    />
                                </div>

                                <div className="timeline-text-wrapper-desktop">
                                    <h6 className="text-sb text-upper-case text-white">
                                        {timelineData[activeIndex].title}
                                    </h6>

                                    <p className="text-18 text-rg text-light-grey">
                                        {timelineData[activeIndex].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}