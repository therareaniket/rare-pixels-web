"use client"

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTimeline () {

    useGSAP( () => {

        const dotPosition =  window.innerWidth < 768 ? "300px" : window.innerWidth < 840 ? "400px" : window.innerWidth < 1200 ? "450px" : window.innerWidth < 1440 ? "400px" : "500px";
        const yearFontSize = window.innerWidth < 576 ? "26px" : "40px"
        const yearFontSizeActive = window.innerWidth < 576 ? "40px" : "64px"

        gsap.set(".years-dot", { right: "100%", fontSize: yearFontSize, color: "rgba(253, 253, 253, 0.2)", });
        gsap.set(".the-dot", { backgroundColor: "#363E5E" });
        gsap.set(".year-detail-info .h4, .details-info-text img,  .details-info-text p", { opacity: 0, scale: 0.5 });


        // FOR TIMELINE OF YEAR 2024
        gsap.to(".years-dot-2024",
            {   right: dotPosition,
                fontSize: yearFontSizeActive,
                color: "rgba(253, 253, 253, 1)",
                duration: 1,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top top",
                    end: "top -60%",
                    scrub: 1,
                }
            }
        )

        gsap.to(".years-dot-2024 .the-dot",
            {   backgroundColor: "#ED0180",
                duration: 1,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top top",
                    end: "top -60%",
                    scrub: 1,
                }
            }
        )

        gsap.fromTo(".year-detail-info-2024 .h4, .year-detail-info-2024 .details-info-text img, .year-detail-info-2024 .details-info-text p", 
            { scale: 0.5, opacity: 0, }, 
            {
                scale: 1,
                opacity: 1,
                ease: "power3.out",
                duration: 1,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top -40%",
                    end: "top -60%",
                    scrub: 1,
                }
            }
        )


        // FOR TIMELINE OF YEAR 2025
        gsap.to(".years-dot-2025",
            {   right: dotPosition,
                fontSize: yearFontSizeActive,
                color: "rgba(253, 253, 253, 1)",
                duration: 1,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top -70%",
                    end: "top -130%",
                    scrub: 1,
                }
            }
        )

        gsap.to(".years-dot-2025 .the-dot",
            {   backgroundColor: "#ED0180",
                duration: 1,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top -70%",
                    end: "top -130%",
                    scrub: 1,
                }
            }
        )

        gsap.to(".years-dot-2024",
            {   opacity: 0,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top -80%",
                    end: "top -100%",
                    scrub: 1,
                }
            }
        )

        gsap.fromTo(".year-detail-info-2024 .h4, .year-detail-info-2024 .details-info-text img, .year-detail-info-2024 .details-info-text p", 
            { scale: 1, }, 
            {
                scale: 0.5,
                opacity: 0,
                ease: "power3.out",
                duration: 1,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top -80%",
                    end: "top -100%",
                    scrub: 1,
                }
            }
        )

        gsap.fromTo(".year-detail-info-2025 .h4, .year-detail-info-2025 .details-info-text img, .year-detail-info-2025 .details-info-text p", 
            { scale: 0.5, opacity: 0, }, 
            {
                scale: 1,
                opacity: 1,
                ease: "power3.out",
                duration: 1,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top -110%",
                    end: "top -130%",
                    scrub: 1,
                }
            }
        )


        // FOR TIMELINE OF YEAR 2026
        gsap.to(".years-dot-2026",
            {   right: dotPosition,
                fontSize: yearFontSizeActive,
                color: "rgba(253, 253, 253, 1)",
                duration: 1,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top -140%",
                    end: "top -200%",
                    scrub: 1,
                }
            }
        )

        gsap.to(".years-dot-2026 .the-dot",
            {   backgroundColor: "#ED0180",
                duration: 1,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top -140%",
                    end: "top -200%",
                    scrub: 1,
                }
            }
        )

        gsap.to(".years-dot-2025",
            {   opacity: 0,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top -140%",
                    end: "top -160%",
                    scrub: 1,
                }
            }
        )

        gsap.fromTo(".year-detail-info-2025 .h4, .year-detail-info-2025 .details-info-text img, .year-detail-info-2025 .details-info-text p", 
            { scale: 1, }, 
            {
                scale: 0.5,
                opacity: 0,
                ease: "power3.out",
                duration: 1,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top -140%",
                    end: "top -160%",
                    scrub: 1,
                }
            }
        )

        gsap.fromTo(".year-detail-info-2026 .h4, .year-detail-info-2026 .details-info-text img, .year-detail-info-2026 .details-info-text p", 
            { scale: 0.5, opacity: 0, }, 
            {
                scale: 1,
                opacity: 1,
                ease: "power3.out",
                duration: 1,
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top -180%",
                    end: "top -200%",
                    scrub: 1,
                }
            }
        )
    });


    return (
        <>
            <section className="timeline-section" style={{ backgroundColor: "#040E36" }}>
                <div className="section container">
                    <div className="timeline-titles">
                        <h2 className="text-sb text-white">Our story is more than a timeline of milestones.</h2>

                        <div className="timeline-subtitles">
                            <div className="bold-subtitle">
                                <p className="h5 text-sb text-white">It's a journey of learning, growing, and continuously evolving to create work that truly matters.</p>
                            </div>

                            <div className="regular-subtitle">
                                <p className="text-18 text-white">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                            </div>
                        </div>
                    </div>

                    <div className="year-timeline-line">
                        <div className="tl-baseline">
                            <div className="years-dot years-dot-2024 active h1 text-sb text-white">2024 <span className="the-dot" /></div>
                            <div className="years-dot years-dot-2025 h1 text-sb text-white">2025<span className="the-dot" /></div>
                            <div className="years-dot years-dot-2026 h1 text-sb text-white">2026<span className="the-dot" /></div>
                        </div>
                    </div>

                    <div className="year-description year-description-desktop">
                        <div className="year-detail-info year-detail-info-2024">
                            <h3 className="h4 text-sb text-white">The Launch of RarePixels</h3>

                            <div className="details-info-text"> 
                                <Image src="/images/aboutpage/about-timeline/timeline-2024.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

                                <p className="text-18 text-white">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                            </div>
                        </div>

                        <div className="year-detail-info year-detail-info-2025">
                            <h3 className="h4 text-sb text-white">Purposeful Growth</h3>

                            <div className="details-info-text"> 
                                <Image src="/images/aboutpage/about-timeline/timeline-2025.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

                                <p className="text-18 text-white">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                            </div>
                        </div>

                        <div className="year-detail-info year-detail-info-2026">
                            <h3 className="h4 text-sb text-white">Shaping What's Next</h3>

                            <div className="details-info-text"> 
                                <Image src="/images/aboutpage/about-timeline/timeline-2026.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

                                <p className="text-18 text-white">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                            </div>
                        </div>
                    </div>

                    <div className="year-description year-description-tablet">
                        <div className="year-detail-info year-detail-info-2024">
                            <div className="details-info-text"> 
                                <Image src="/images/aboutpage/about-timeline/timeline-2024.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>
                                
                                <div>
                                    <h3 className="h4 text-sb text-white">The Launch of RarePixels</h3>

                                    <p className="text-18 text-white">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                                </div>
                            </div>
                        </div>

                        <div className="year-detail-info year-detail-info-2025">
                            <div className="details-info-text"> 
                                <Image src="/images/aboutpage/about-timeline/timeline-2025.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

                                <div>
                                    <h3 className="h4 text-sb text-white">Purposeful Growth</h3>
            
                                    <p className="text-18 text-white">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                                </div>
                            </div>
                        </div>

                        <div className="year-detail-info year-detail-info-2026">
                            <div className="details-info-text"> 
                                <Image src="/images/aboutpage/about-timeline/timeline-2026.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

                                <div>
                                    <h3 className="h4 text-sb text-white">Shaping What's Next</h3>

                                    <p className="text-18 text-white">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}