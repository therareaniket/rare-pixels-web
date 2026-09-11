'use client';
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTimelineMobile(){

    useGSAP(() => {
        gsap.set(".mob-year-dot", { color: "rgba(253, 253, 253, 0.2)" });
        gsap.set(".mob-the-dot", { backgroundColor: "#363E5E" });
        gsap.set(".mob-yr-details img, .mob-yr-details .h4, .mob-yr-details p", { scale: 0.5, opacity: 0 });


        // TIMELINE ANIMATION FOR YEAR 2024
        gsap.fromTo(".mob-tl-colored-line", 
            { width: "0%", },
            {
                width: "8%",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".about-timeline-mobile",
                    start: "top top",
                    end: "top -40%",
                    scrub: true,
                }
            }
        )

        gsap.to(".mob-year-dot-2024", 
            {
                color: "#FFFFFF",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".about-timeline-mobile",
                    start: "top -20%",
                    end: "top -40%",
                    scrub: true,
                }
            }
        )

        gsap.to(".mob-the-dot-2024", 
            {
                backgroundColor: "#ED0180",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".about-timeline-mobile",
                    start: "top -20%",
                    end: "top -40%",
                    scrub: true,
                }
            }
        )

        gsap.to(".mob-yr-details-2024 img, .mob-yr-details-2024 .h4, .mob-yr-details-2024 p", 
            {
                scale: 1,
                opacity: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".about-timeline-mobile",
                    start: "top -20%",
                    end: "top -40%",
                    scrub: true,
                }
            }
        )

        // TIMELINE ANIMATION FOR YEAR 2025
        gsap.fromTo(".mob-tl-colored-line", 
            {width: "8%"},
            {
                width: "50%",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".about-timeline-mobile",
                    start: "top -50%",
                    end: "top -130%",
                    scrub: true,
                }
            }
        )

        gsap.to(".mob-year-dot-2025", 
            {
                color: "#FFFFFF",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".about-timeline-mobile",
                    start: "top -110%",
                    end: "top -130%",
                    scrub: true,
                }
            }
        )

        gsap.to(".mob-the-dot-2025", 
            {
                backgroundColor: "#ED0180",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".about-timeline-mobile",
                    start: "top -110%",
                    end: "top -130%",
                    scrub: true,
                }
            }
        )

        gsap.to(".mob-yr-details-2024 img, .mob-yr-details-2024 .h4, .mob-yr-details-2024 p", 
            {
                scale: 0.5,
                opacity: 0,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".about-timeline-mobile",
                    start: "top -70%",
                    end: "top -110%",
                    scrub: true,
                }
            }
        )

        
    })

    return (
        <>
            <section className="about-timeline-mobile" style={{ backgroundColor: "#040E36", color: "white" }}>
                <div className="container">
                    <div className="section">
                        <div className="timeline-headings">
                            <h2 className="text-sb">Our story is more than a timeline of milestones.</h2>

                            <p className="h5 text-sb">It's a journey of learning, growing, and continuously evolving to create work that truly matters.</p>

                            <p>A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                        </div>

                        <div className="mob-tl-wrapper">
                            <div className="mob-tl-line">
                                <span className="mob-tl-colored-line"></span>

                                <div className="mob-dots-wrapper">
                                    <div className="mob-year-dot mob-year-dot-2024 text-sb">2024<span className="mob-the-dot mob-the-dot-2024"></span></div>

                                    <div className="mob-year-dot mob-year-dot-2025 text-sb">2025<span className="mob-the-dot mob-the-dot-2025"></span></div>

                                    <div className="mob-year-dot mob-year-dot-2026 text-sb">2026<span className="mob-the-dot mob-the-dot-2026"></span></div>
                                </div>

                                <div className="mob-year-details-wrapper">
                                    <div className="mob-yr-details mob-yr-details-2024">
                                        <Image src="/images/aboutpage/about-timeline/timeline-2024.svg" width={147} height={180} className="mob-tl-img" alt="" />

                                        <h3 className="h4 text-sb">The Launch of RarePixels</h3>

                                        <p className="text-18">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                                    </div>

                                    <div className="mob-yr-details mob-yr-details-2025">
                                        <Image src="/images/aboutpage/about-timeline/timeline-2025.svg" width={147} height={180} className="mob-tl-img" alt="" />

                                        <h3 className="h4 text-sb">Purposeful Growth</h3>

                                        <p className="text-18">Every project brought new challenges, fresh perspectives, and valuable opportunities to grow. As RarePixels expanded its reach, we continued refining our approach and strengthening our expertise across multiple disciplines. The trust placed in us by growing brands allowed us to take on more ambitious projects, and create experiences that combined creativity, strategy, and technology.</p>
                                    </div>

                                    <div className="mob-yr-details mob-yr-details-2025">
                                        <Image src="/images/aboutpage/about-timeline/timeline-2026.svg" width={147} height={180} className="mob-tl-img" alt="" />

                                        <h3 className="h4 text-sb">Shaping What's Next</h3>

                                        <p className="text-18">Today, RarePixels continues to evolve as a creative and technology partner for ambitious brands. We remain focused on helping businesses create meaningful experiences through innovation, collaboration, and purposeful execution. Every project we take on reflects our commitment to quality, creativity, and delivering value that extends far beyond the final deliverable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}