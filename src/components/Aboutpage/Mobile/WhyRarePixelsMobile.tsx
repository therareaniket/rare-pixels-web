"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

export default function WhyRarePixelsMobile() {

    const sectionRef = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const tree = section.querySelector<HTMLElement>(".tree-reveal");

        const points = Array.from(
            section.querySelectorAll<HTMLElement>(".why-rare-point")
        );

        if (!tree || !points.length) return;

        tree.style.clipPath = "inset(100% 0 0 0)";
        tree.style.setProperty("-webkit-clip-path", "inset(100% 0 0 0)");
        tree.style.transform = "scaleY(0)";
        tree.style.transformOrigin = "bottom center";
        tree.style.transition =
            "clip-path 1.8s cubic-bezier(0.22, 1, 0.36, 1), transform 1.8s cubic-bezier(0.22, 1, 0.36, 1)";
        tree.style.willChange = "clip-path, transform";

        points.forEach((point) => {
            point.style.opacity = "0";
            point.style.visibility = "hidden";
            point.style.transform = "translateY(200px)";
            point.style.transition =
                "opacity 1.2s ease, transform 1.2s ease";
            point.style.willChange = "opacity, transform";
        });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                tree.style.clipPath = "inset(0% 0 0 0)";
                tree.style.setProperty("-webkit-clip-path", "inset(0% 0 0 0)");
                tree.style.transform = "scaleY(1)";

                const treeDuration = 1800;
                const pauseAfterTree = 200;
                const pointerDelay = 500;

                points.forEach((point, index) => {
                    window.setTimeout(() => {
                        point.style.visibility = "visible";
                        point.style.opacity = "1";
                        point.style.transform = "translateY(0)";
                    }, treeDuration + pauseAfterTree + index * pointerDelay);
                });

                observer.unobserve(section);
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();

            tree.style.removeProperty("clip-path");
            tree.style.removeProperty("-webkit-clip-path");
            tree.style.removeProperty("transform");
            tree.style.removeProperty("transform-origin");
            tree.style.removeProperty("transition");
            tree.style.removeProperty("will-change");

            points.forEach((point) => {
                point.style.removeProperty("opacity");
                point.style.removeProperty("visibility");
                point.style.removeProperty("transform");
                point.style.removeProperty("transition");
                point.style.removeProperty("will-change");
            });
        };
    }, []);
    
    return (
        <section ref={sectionRef} className="section section-bg-blue why-rare-mobile-sticky" >
            <div className="why-rare-mobile-inner">
                <div className="container">
                    <h2 className="text-sb text-white">
                        Why you would Love to work at RarePixels
                    </h2>

                    <p className="text-16 text-rg text-light-grey">
                        A journey shaped by creativity, collaboration, and continuous
                        growth, reflecting the milestones, experiences, and values that
                        have defined RarePixels from day one.
                    </p>

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
                                    <h3 className="text-sb text-18">
                                        Creative, Chill Environment
                                    </h3>

                                    <p className="text-rg text-16 text-white">
                                        We take the work seriously not ourselves. Our studio is
                                        built on creative freedom, good energy, and a culture
                                        where ideas flow without ego getting in the way.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="why-rare-point why-rare-point-2">
                            <div className="why-rare-pointers why-rare-pointers-2">
                                <span className="why-rare-pixel"></span>

                                <div className="why-rare-desc why-rare-desc-2">
                                    <h3 className="text-sb text-18">
                                        Trust Over Timelines
                                    </h3>

                                    <p className="text-rg text-16 text-white">
                                        We hire people we believe in, then let them do their
                                        thing. No micromanagement, no hand-holding just clear
                                        goals and the autonomy to reach them your way.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="why-rare-point why-rare-point-3">
                            <div className="why-rare-pointers why-rare-pointers-3">
                                <span className="why-rare-pixel"></span>

                                <div className="why-rare-desc why-rare-desc-3">
                                    <h3 className="text-sb text-18">
                                        Ideas Over Hierarchy
                                    </h3>

                                    <p className="text-rg text-16 text-white">
                                        The best idea wins, regardless of who it comes from.
                                        Whether you&apos;re a junior designer or a senior
                                        strategist, your voice has weight here.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="why-rare-point why-rare-point-4">
                            <div className="why-rare-pointers why-rare-pointers-4">
                                <span className="why-rare-pixel"></span>

                                <div className="why-rare-desc why-rare-desc-4">
                                    <h3 className="text-sb text-18">
                                        People Before Processes
                                    </h3>

                                    <p className="text-rg text-16 text-white">
                                        Systems exist to support people, not the other way
                                        around. We adapt, we listen, and we make sure the humans
                                        on our team always come first.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}