"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function WhyRarePixelsMobile() {

    useEffect(() => {
        gsap.fromTo(
            ".tree-reveal",
            {
                clipPath: "inset(100% 0 0 0)",
            },
            {
                clipPath: "inset(0% 0 0 0)",
                ease: "none",
                scrollTrigger: {
                    trigger: ".why-rare-mobile-sticky",
                    start: "top 10%",
                    end: "top -15%",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".why-rare-point",
            {
                y: 100,
            },
            {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: ".abt-why-rare-desktop-pointers",
                    start: "top 10%",
                    end: "top -15%",
                    // scrub: true,
                },
            }
        );
    }, []);

    return (
        <>
            <section className="section section-bg-blue why-rare-mobile-sticky">
                <div className="why-rare-mobile-inner">
                    <div className="container">
                        <h2 className="text-sb text-white">Why you would Love to work at RarePixels</h2>

                        <p className="text-16 text-rg text-light-grey">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>

                        <div className="why-rare-mobile-tree">
                            <div className="tree-reveal">
                                <Image src="/images/aboutpage/abt-why-rare/rare-tree.svg" alt="rare-tree" width={525} height={500}></Image>
                            </div>
                        </div>

                        <div className="abt-why-rare-desktop-pointers">
                            <div className="why-rare-point why-rare-point-1">
                                <div className="why-rare-pointers why-rare-pointers-1">
                                    <span className="why-rare-pixel"></span>

                                    <div className="why-rare-desc why-rare-desc-1">
                                        <h3 className="text-sb text-18">Creative, Chill Environment</h3>

                                        <p className="text-rg text-16 text-white">We take the work seriously not ourselves. Our studio is built on creative freedom, good energy, and a culture where ideas flow without ego getting in the way.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-rare-point why-rare-point-2">
                                <div className="why-rare-pointers why-rare-pointers-2">
                                    <span className="why-rare-pixel"></span>

                                    <div className="why-rare-desc why-rare-desc-2">
                                        <h3 className="text-sb text-18">Trust Over Timelines</h3>

                                        <p className="text-rg text-16 text-white">We hire people we believe in, then let them do their thing. No micromanagement, no hand-holding just clear goals and the autonomy to reach them your way.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-rare-point why-rare-point-3">
                                <div className="why-rare-pointers why-rare-pointers-3">
                                    <span className="why-rare-pixel"></span>

                                    <div className="why-rare-desc why-rare-desc-3">
                                        <h3 className="text-sb text-18">Ideas Over Hierarchy</h3>

                                        <p className="text-rg text-16 text-white">The best idea wins, regardless of who it comes from. Whether you&apos;re a junior designer or a senior strategist, your voice has weight here.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-rare-point why-rare-point-4">
                                <div className="why-rare-pointers why-rare-pointers-4">
                                    <span className="why-rare-pixel"></span>

                                    <div className="why-rare-desc why-rare-desc-4">
                                        <h3 className="text-sb text-18">People Before Processes</h3>

                                        <p className="text-rg text-16 text-white">Systems exist to support people, not the other way around. We adapt, we listen, and we make sure the humans on our team always come first.</p>
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