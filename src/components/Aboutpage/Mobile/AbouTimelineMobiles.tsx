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
        // LINE OF TIMELINE ANIMATION
        gsap.fromTo(".mob-tl-clr-line", { width: "50%" }, { width: "92%", ease: "power2.inOut", scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -130%", end: "top -170%", scrub: true } });
        gsap.fromTo(".mob-tl-clr-line", { width: "8%" }, { width: "50%", scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -80%", end: "top -120%", scrub: true } });
        gsap.fromTo(".mob-tl-clr-line", { width: "0%" }, { width: "8%", scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -30%", end: "top -70%", scrub: true } });

        // ANIMATION OF YEAR 2026
        gsap.fromTo(".mob-tl-dot-2026", { backgroundColor: "#656A7E" }, { backgroundColor: "#ED0180", scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -150%", end: "top -170%", scrub: true }})
        gsap.fromTo(".mob-tl-year-2026", { color: "#656A7E" }, {  color: "#FFFFFF", scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -150%", end: "top -170%", scrub: true }})
        gsap.fromTo(".mob-tl-detls-2025", { scale: 1, opacity: 1, y:0 }, { scale: 0.5, opacity: 0, y:-50, scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -130%", end: "top -150%", scrub: true }})
        gsap.fromTo(".mob-tl-detls-2026", { scale: 0.5, opacity: 0, y: 50 }, { scale: 1, opacity: 1, y: 0, scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -150%", end: "top -170%", scrub: true }})

        // ANIMATION OF YEAR 2025
        gsap.fromTo(".mob-tl-dot-2025", { backgroundColor: "#656A7E" }, { backgroundColor: "#ED0180", scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -100%", end: "top -120%", scrub: true }})
        gsap.fromTo(".mob-tl-year-2025", { color: "#656A7E" }, {  color: "#FFFFFF", scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -100%", end: "top -120%", scrub: true }})
        gsap.fromTo(".mob-tl-detls-2024", { scale: 1, opacity: 1, y:0 }, { scale: 0.5, opacity: 0, y:-50, scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -80%", end: "top -100%", scrub: true }})
        gsap.fromTo(".mob-tl-detls-2025", { scale: 0.5, opacity: 0, y:50 }, { scale: 1, opacity: 1, y:0, scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -100%", end: "top -120%", scrub: true }})

        // ANIMATION OF YEAR 2024
        gsap.fromTo(".mob-tl-dot-2024", { backgroundColor: "#656A7E" }, { backgroundColor: "#ED0180", scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -50%", end: "top -70%", scrub: true }})
        gsap.fromTo(".mob-tl-year-2024", { color: "#656A7E" }, {  color: "#FFFFFF", scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -50%", end: "top -70%", scrub: true }})
        gsap.fromTo(".mob-tl-detls-2024", { scale: 0.5, opacity: 0, y:50 }, { scale: 1, opacity: 1, y:0, scrollTrigger: { trigger: ".about-timeline-mobile", start: "top -50%", end: "top -70%", scrub: true }})

    })

    return (
        <>
            <section className="about-timeline-mobile" style={{ backgroundColor: "#040E36", color: "white" }}>
                <div className="section mob-timeline">
                    <div className="container">
                        <div className="mob-tl-headings">
                            <h2 className="text-sb">Our story is more than a timeline of milestones. </h2>

                            <p className="bold-subtitle text-md">It's a journey of learning, growing, and continuously evolving to create work that truly matters.</p>

                            <p className="">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                        </div>

                        <div className="mob-tl-line-wrapper">
                            <span className="mob-tl-clr-line"></span>

                            <div className="mob-timeline-years">
                                <div className="mob-tl-year mob-tl-year-2024 text-bd">2024<span className="mob-tl-dot mob-tl-dot-2024"></span></div>
                                <div className="mob-tl-year mob-tl-year-2025 text-bd">2025<span className="mob-tl-dot mob-tl-dot-2025"></span></div>
                                <div className="mob-tl-year mob-tl-year-2026 text-bd">2026<span className="mob-tl-dot mob-tl-dot-2026"></span></div>
                            </div>                            
                        </div>

                        <div className="mob-timeline-details">
                            <div className="mob-tl-detls mob-tl-detls-2024">
                                <h3 className="h5 text-sb">The Launch of RarePixels</h3>

                                <p>From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                            </div>

                            <div className="mob-tl-detls mob-tl-detls-2025">
                                <h3 className="h5 text-sb">Purposeful Growth</h3>

                                <p>Every project brought new challenges, fresh perspectives, and valuable opportunities to grow. As RarePixels expanded its reach, we continued refining our approach and strengthening our expertise across multiple disciplines. The trust placed in us by growing brands allowed us to take on more ambitious projects, and create experiences that combined creativity, strategy, and technology.</p>
                            </div>

                            <div className="mob-tl-detls mob-tl-detls-2026">
                                <h3 className="h5 text-sb">Shaping What's Next</h3>

                                <p>Today, RarePixels continues to evolve as a creative and technology partner for ambitious brands. We remain focused on helping businesses create meaningful experiences through innovation, collaboration, and purposeful execution. Every project we take on reflects our commitment to quality, creativity, and delivering value that extends far beyond the final deliverable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}