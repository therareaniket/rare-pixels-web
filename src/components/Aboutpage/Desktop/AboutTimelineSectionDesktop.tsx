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
    const dotRef = useRef<HTMLDivElement>(null);

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
            const trigger = ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=2000",
                scrub: 2,

                onUpdate: (self) => {
                    const progress = self.progress;

                    gsap.set(".tablet-dot-1", {
                        left: `${2 + Math.min(progress / 0.33, 1) * 72}%`,
                    });

                    gsap.set(".tablet-dot-2", {
                        left: `${2 + Math.max(0, Math.min((progress - 0.33) / 0.33, 1)) * 72}%`,
                    });

                    gsap.set(".tablet-dot-3", {
                        left: `${2 + Math.max(0, Math.min((progress - 0.66) / 0.34, 1)) * 72}%`,
                    });

                    const index = Math.min(
                        Math.floor(progress * timelineData.length),
                        timelineData.length - 1
                    );

                    setActiveIndex(index);
                }
            });

            return () => trigger.kill();
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
                    } else if (progress < 0.66) {
                        updateTabletYear(1);

                        gsap.to(tabletLineRef.current, {
                            width: "50%",
                            duration: 1,
                            overwrite: true,
                        });
                    } else {
                        updateTabletYear(2);

                        gsap.to(tabletLineRef.current, {
                            width: "100%",
                            duration: 1,
                            overwrite: true,
                        });
                    }
                },
            });

            return () => trigger.kill();
        });

        return () => mm.revert();
    }, []);

    useEffect(() => {
        gsap.fromTo(
            contentRef.current,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
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

                            <div ref={tabletLineRef} className="timeline-active-hr"></div>

                            <div className={`timeline-dot tablet-dot-1 ${activeIndex >= 0 ? "active" : ""}`}></div>
                            <div className={`timeline-dot tablet-dot-2 ${activeIndex >= 1 ? "active" : ""}`}></div>
                            <div className={`timeline-dot tablet-dot-3 ${activeIndex >= 2 ? "active" : ""}`}></div>
                        </div>

                        <div className="abt-timeline-desktop-wrapper">
                            <div className="abt-timeline-desktop-date">
                                <span className="h3 abt-timeline-titledate text-sb active">
                                    {timelineData[(activeIndex + 1) % timelineData.length].year}
                                </span>
                            </div>

                            <div className="abt-timeline-content-wrapper">
                                <div ref={imageRef} className="abt-timeline-content-left">
                                    <Image src={timelineData[activeIndex].image} alt="timeline-img" width={291} height={278}></Image>

                                </div>

                                <div className="abt-timeline-content-right">
                                    <span className="text-sb text-white">
                                        {timelineData[activeIndex].year}
                                    </span>

                                    <div ref={contentRef} className="timeline-content">
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