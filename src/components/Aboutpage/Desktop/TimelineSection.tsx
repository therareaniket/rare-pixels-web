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
        gsap.set(".years-dot", { right: "100%", fontSize: "40px", color: "rgba(253, 253, 253, 0.2)",})

        gsap.to(".years-dot-2024",
            {   right: "500px",
                fontSize: "64px",
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

        gsap.fromTo(".year-detail-info-2024 .h4, .details-info-text img, .details-info-text p", 
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

                    <div className="year-description">
                        <div className="year-detail-info year-detail-info-2024">
                            <h3 className="h4 text-sb text-white">The Launch of RarePixels</h3>

                            <div className="details-info-text"> 
                                <Image src="/images/aboutpage/about-timeline/timeline-2024.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

                                <p className="text-18 text-white">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                            </div>
                        </div>

                        <div className="year-detail-info year-detail-info-2025"></div>
                        <div className="year-detail-info year-detail-info-2026"></div>
                    </div>
                </div>
            </section>
        </>
    );
}