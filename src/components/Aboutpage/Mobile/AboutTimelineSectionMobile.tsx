'use client';
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const timelineData = [
    {
        year: "2024",
        image: "/images/aboutpage/about-timeline/timeline-2024.svg",
        title: "The Launch of RarePixels",
        description: "From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective."
    },
    {
        year: "2025",
        image: "/images/aboutpage/about-timeline/timeline-2025.svg",
        title: "Purposeful Growth",
        description: "Every project brought new challenges, fresh perspectives, and valuable opportunities to grow. As RarePixels expanded its reach, we continued refining our approach and strengthening our expertise across multiple disciplines. The trust placed in us by growing brands allowed us to take on more ambitious projects, and create experiences that combined creativity, strategy, and technology."
    },
    {
        year: "2026",
        image: "/images/aboutpage/about-timeline/timeline-2026.svg",
        title: "Shaping What's Next",
        description: "Today, RarePixels continues to evolve as a creative and technology partner for ambitious brands. We remain focused on helping businesses create meaningful experiences through innovation, collaboration, and purposeful execution. Every project we take on reflects our commitment to quality, creativity, and delivering value that extends far beyond the final deliverable."
    }
];

export default function AboutTimelineSectionMobile() {

    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const activeLineRef = useRef<HTMLDivElement>(null);
    const yearsRef = useRef<HTMLSpanElement[]>([]);
    const movingDotRef = useRef<HTMLDivElement>(null);

    const updateActiveYear = (index: number) => {
        yearsRef.current.forEach((year) => {
            year.classList.remove("active");
        });

        yearsRef.current[index]?.classList.add("active");

        setActiveIndex(index);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2000",
            scrub: 2,

            onUpdate: (self) => {
                const progress = self.progress;

                if (progress < 0.33) {
                    updateActiveYear(0);

                    gsap.to(activeLineRef.current, {
                        width: "6%",
                        duration: 1,
                        overwrite: true
                    });

                    gsap.to(movingDotRef.current, {
                        left: "6%",
                        duration: 1,
                        overwrite: true
                    });

                } else if (progress < 0.66) {
                    updateActiveYear(1);

                    gsap.to(activeLineRef.current, {
                        width: "50%",
                        duration: 1,
                        overwrite: true
                    });

                    gsap.to(movingDotRef.current, {
                        left: "50%",
                        duration: 1,
                        overwrite: true
                    });

                } else {
                    updateActiveYear(2);

                    gsap.to(activeLineRef.current, {
                        width: "94%",
                        duration: 1,
                        overwrite: true
                    });

                    gsap.to(movingDotRef.current, {
                        left: "94%",
                        duration: 1,
                        overwrite: true
                    });
                }
            }
        });
    }, []);

    useEffect(() => {
        gsap.fromTo(
            ".timeline-image-mobile-wrapper",
            {
                opacity: 0,
                scale: 0.5
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1
            }
        );

        gsap.fromTo(
            ".timeline-mobile-content",
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 1
            }
        );
    }, [activeIndex]);

    return (
        <>
            <section ref={sectionRef} className="section section-bg-blue timeline-mobile-sticky">
                <div className="timeline-mobile-inner">
                    <div className="container">
                        <div className="abt-timeline-mobile-title">
                            <h2 className="text-sb text-white">Our story is more than a timeline of milestones. </h2>

                            <h3 className="text-sb text-18 text-white">It&apos;s a journey of learning, growing, and continuously evolving to create work that truly matters.</h3>

                            <p className="text-light-grey text-16 text-rg">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                        </div>

                        <div className="timeline-hr-mobile">
                            <div className="time-line-hr"></div>
                            <div ref={activeLineRef} className="timeline-active-hr" ></div>

                            <div ref={movingDotRef} className="timeline-dot-active"></div>
                        </div>

                        <div className="timeline-date-wrapper">
                            <span ref={(el) => { if (el) yearsRef.current[0] = el; }} className="h4 text-sb">
                                2024
                            </span>

                            <span ref={(el) => { if (el) yearsRef.current[1] = el; }} className="h4 text-sb">
                                2025
                            </span>

                            <span ref={(el) => { if (el) yearsRef.current[2] = el; }} className="h4 text-sb">
                                2026
                            </span>
                        </div>

                        <div className="timeline-content-wrapper">
                            <div className="timeline-image-mobile-wrapper">
                                <Image src={timelineData[activeIndex].image} alt="" width={291} height={278} ></Image>
                            </div>

                            <div className="timeline-mobile-content">
                                <h3 className="text-sb text-upper-case text-white h5">{timelineData[activeIndex].title}</h3>

                                <p className="text-16 text-rg text-light-grey">{timelineData[activeIndex].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}