"use client";

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function AboutOurValuesSectionDesktop() {

    useEffect(() => {
        gsap.fromTo(".abt-our-values-pointer", {
            opacity: 0,
            scale: 0.5,
            y: 50,
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".our-values-section",
                start: "top 60%",
                end: "top -40%",
                once: true,
            }
        })

        
    }, []);

    return (
        <>
            <section className="section our-values-section">
                <div className="container">
                    <div className="abt-our-values-desktop">
                        <div className="abt-our-values-right">
                            <h2 className="h1 text-sb">Our Values</h2>

                            <p>A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one. A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>

                            <Image className="our-values-image" src="/images/aboutpage/abt-our-values/our-values.webp" alt="our-values" width={692} height={458}></Image>
                        </div>

                        <div className="abt-our-values-left">
                            <div className={`abt-our-values-pointer`}>
                                <div className="abt-our-values-pointer-left">
                                    <span>
                                        <Image src="/images/aboutpage/abt-our-values/creative-1.svg" alt="our-values" width={24} height={24}></Image>
                                    </span>
                                </div>
                                <div className="abt-our-values-pointer-right">
                                    <h3 className="text-sb h4">Creative Excellence</h3>

                                    <p className="text-18 text-rg">Delivering thoughtful, refined work that balances creativity, functionality, and impact.</p>
                                </div>
                            </div>

                            <div className={`abt-our-values-hr`}></div>

                            <div className={`abt-our-values-pointer`}>
                                <div className="abt-our-values-pointer-left">
                                    <span>
                                        <Image src="/images/aboutpage/abt-our-values/strategic-1.svg" alt="our-values" width={24} height={24}></Image>
                                    </span>
                                </div>
                                <div className="abt-our-values-pointer-right">
                                    <h3 className="text-sb h4">Strategic Thinking</h3>

                                    <p className="text-18 text-rg">Approaching every challenge with clarity, insight, and a long term perspective.</p>
                                </div>
                            </div>

                            <div className={`abt-our-values-hr`}></div>

                            <div className={`abt-our-values-pointer`}>
                                <div className="abt-our-values-pointer-left">
                                    <span>
                                        <Image src="/images/aboutpage/abt-our-values/communications-1.svg" alt="our-values" width={24} height={24}></Image>
                                    </span>
                                </div>
                                <div className="abt-our-values-pointer-right">
                                    <h3 className="text-sb h4">Open Communication</h3>

                                    <p className="text-18 text-rg">Building trust through transparency, collaboration, and meaningful conversations.</p>
                                </div>
                            </div>

                            <div className={`abt-our-values-hr`}></div>

                            <div className={`abt-our-values-pointer`}>
                                <div className="abt-our-values-pointer-left">
                                    <span>
                                        <Image src="/images/aboutpage/abt-our-values/ownership-1.svg" alt="our-values" width={24} height={24}></Image>
                                    </span>
                                </div>

                                <div className="abt-our-values-pointer-right">
                                    <h3 className="text-sb h4">Shared Ownership</h3>

                                    <p className="text-18 text-rg">Taking collective responsibility for every decision, detail, and outcome.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}