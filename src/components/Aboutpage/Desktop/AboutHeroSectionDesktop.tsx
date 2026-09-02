"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutHeroSectionDesktop() {
    const containerRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                },
            });

            // tl.fromTo(
            //     ".about-hero-section-title",
            //     { y: 100, opacity: 0 },
            //     { y: 0, opacity: 1, duration: 1, ease: "power1.out" },
            //     0
            // )

             tl.to(
                ".abt-hero-video",
                {
                    height: "var(--abt-hero-target-height)",
                    opacity: 0,
                    duration: 2,
                    ease: "none",
                },
                ">"
            )

            .to({}, { duration: 1 });
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} id="first-section" className="about-hero-section-desktop">
            <div className="about-hero-inner">
                <div className="container">
                    <div className="about-section section">
                        <div className="container-sm">
                            <div className="about-hero-section-title">
                                <h1 className="text-sb">
                                    The People, Purpose, and Principles Behind RarePixels.
                                </h1>

                                <p className="text-18 text-rg">
                                    <span>
                                        RarePixels is more than a creative agency. It&apos;s a collective of thinkers, creators, and problem-solvers united by a passion for meaningful work. Through collaboration, innovation, and a commitment to excellence, we help transform ideas into experiences that leave a lasting impression.
                                    </span>
                                    <span>
                                        We believe that great work is built on strong partnerships, shared vision, and a genuine understanding of the people behind every brand. By bringing together diverse perspectives and expertise, we create solutions that are not only visually compelling but also purposeful, strategic, and designed to deliver long-term value.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about-video-text-practice">
                        <div className="town">
                            <video autoPlay playsInline muted loop>
                                <source src="/images/aboutpage/about-hero/rare-second-anniversary.mp4" />
                            </video>
                            <h2 className="text-extra-bold">ABOUT US</h2>
                        </div>
                    </div>

                    <div className="abt-hero-video">
                        <video autoPlay playsInline muted loop>
                            <source src="/images/aboutpage/about-hero/rare-second-anniversary.mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}