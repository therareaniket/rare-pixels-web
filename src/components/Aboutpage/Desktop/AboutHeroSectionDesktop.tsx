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

    const targetHeight = window.innerWidth < 480? "15vh" : window.innerWidth < 1200 ? "15vh" : "15vh";

    useGSAP(() => {
        gsap.fromTo(".abt-hero-video",
            { height: "100vh" },
            { 
                height: targetHeight,
                duration: 1,
                scrollTrigger: {
                    trigger: ".about-hero-section-desktop",
                    start: "top top",
                    end: "top -1600px",
                    scrub: true,
                }
            }
        );


        gsap.fromTo(".abt-hero-video",
            { opacity: 1 },
            { 
                opacity: 0, 
                duration: 1,
                scrollTrigger: {
                    trigger: ".about-hero-section-desktop",
                    start: "top -300px",
                    end: "top -600px",
                    scrub: true,
                }
            }
        );


        gsap.fromTo(".about-hero-txt",
            { "--bg-opacity": 1 },
            { 
                "--bg-opacity": 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".about-hero-section-desktop",
                    start: "top -300px",
                    end: "top -600px",
                    scrub: true,
                }
            }
        );
    });

    return (
        <section id="first-section" className="about-hero-section-desktop">
            <div className="about-hero-inner">
                <div className="abt-hero-video">
                    <video src="/images/aboutpage/about-hero/rare-second-anniversary.mp4" autoPlay playsInline muted loop></video>
                </div>

                <div className="about-text-vid-clip">
                    <span className="h2 text-extra-bold about-hero-txt">ABOUT US</span>
                </div>

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
                </div>
            </div>
        </section>
    );
}