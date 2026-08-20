'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function WhyChooseUsSectionDesktop() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section ref={sectionRef} className="section bg-black why-choose-us-desktop">
                <div className="container">
                    <div className="why-choose-us-text-wrapper text-white">
                        <h2 className="text-sb">Why Choose Us</h2>
                        <p className="text-18 text-rg">We bring together strategy, design, technology, and creativity to build experiences that are easy to use, hard to ignore, and built to perform.</p>
                    </div>

                    <div className="container-sm">
                        <div className="why-choose-us-content-wrapper why-choose-us-for-desktop">
                            <div className="why-choose-us-pointer-wrapper">
                                <div className="why-choose-us-pointer-cards">
                                    <div className="why-choose-us-card why-choose-us-card-1 text-white">
                                        <h3 className="h6 text-sb">Built, Not Borrowed</h3>

                                        <p className="text-18 text-rg">We don&apos;t believe in templates or recycled thinking. Every solution is created from the ground up to fit your business, your users, and your ambitions.</p>
                                    </div>

                                    <div className="why-choose-us-card why-choose-us-card-2 text-white">
                                        <h3 className="h6 text-sb">Simplicity With Purpose</h3>

                                        <p className="text-18 text-rg">Great experiences feel effortless. We remove complexity, sharpen every interaction, and design with clarity at the center of every decision.</p>
                                    </div>
                                </div>

                                <div className="why-choose-us-pointer-cards">
                                    <div className="why-choose-us-card why-choose-us-card-3 text-white">
                                        <h3 className="h6 text-sb">Ideas That Get Built</h3>

                                        <p className="text-18 text-rg">A vision means little without execution. From first sketch to final launch, every detail is delivered with precision, consistency, and care.</p>
                                    </div>

                                    <div className="why-choose-us-card why-choose-us-card-4 text-white">
                                        <h3 className="h6 text-sb">Partners In The Process</h3>

                                        <p className="text-18 text-rg">We work alongside you, not around you. The best outcomes come from trust, collaboration, and relationships that grow beyond a single project.</p>
                                    </div>

                                    <div className="why-choose-us-card why-choose-us-card-5 text-white">
                                        <h3 className="h6 text-sb">Measured By Impact</h3>

                                        <p className="text-18 text-rg">Beautiful work is only the beginning. We create solutions that drive adoption, strengthen brands, and deliver meaningful business outcomes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-choose-us-image-wrapper">
                                <div className="why-choose-us-images">
                                    <div className={`why-choose-us-eclipse-1 why-choose-us-eclipse ${isVisible ? "animate-left" : ""}`}>
                                        {/* <svg width="354" height="212" viewBox="0 0 354 212" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="177" cy="177" r="176" stroke="url(#paint0_linear_2609_3174)" stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2609_3174" x1="177" y1="0" x2="177" y2="239.494" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0A0A0A" />
                                                    <stop offset="1" stop-color="#01030D" />
                                                </linearGradient>
                                            </defs>
                                        </svg> */}
                                    </div>

                                    <div className={`why-choose-us-eclipse-2 why-choose-us-eclipse ${isVisible ? "animate-right" : ""}`}>
                                        {/* <svg width="490" height="280" viewBox="0 0 490 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="245" cy="245" r="243.5" stroke="url(#paint0_linear_2609_3173)" stroke-width="3" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2609_3173" x1="245" y1="0" x2="245" y2="331.504" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0A0A0A" />
                                                    <stop offset="1" stop-color="#01030D" />
                                                </linearGradient>
                                            </defs>
                                        </svg> */}
                                    </div>

                                    <div className={`why-choose-us-eclipse-3 why-choose-us-eclipse ${isVisible ? "animate-left" : ""}`}>
                                        {/* <svg width="625" height="348" viewBox="0 0 625 348" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="312.5" cy="312.5" r="310.5" stroke="url(#paint0_linear_2609_3172)" stroke-width="4" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2609_3172" x1="312.5" y1="0" x2="312.5" y2="422.836" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0A0A0A" />
                                                    <stop offset="1" stop-color="#01030D" />
                                                </linearGradient>
                                            </defs>
                                        </svg> */}
                                    </div>

                                    <div className={`why-choose-us-eclipse-4 why-choose-us-eclipse ${isVisible ? "animate-right" : ""}`}>
                                        {/* <svg width="760" height="415" viewBox="0 0 760 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="380" cy="380" r="377.5" stroke="url(#paint0_linear_2609_3171)" stroke-width="5" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2609_3171" x1="380" y1="0" x2="380" y2="514.169" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0A0A0A" />
                                                    <stop offset="1" stop-color="#01030D" />
                                                </linearGradient>
                                            </defs>
                                        </svg> */}
                                    </div>

                                    <div className={`why-choose-us-eclipse-5 why-choose-us-eclipse ${isVisible ? "animate-left" : ""}`}>
                                        {/* <svg width="896" height="483" viewBox="0 0 896 483" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="448" cy="448" r="445" stroke="url(#paint0_linear_2609_3170)" stroke-width="6" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2609_3170" x1="448" y1="0" x2="448" y2="606.178" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0A0A0A" />
                                                    <stop offset="1" stop-color="#01030D" />
                                                </linearGradient>
                                            </defs>
                                        </svg> */}
                                    </div>

                                    <div className={`why-choose-us-eclipse-6 why-choose-us-eclipse ${isVisible ? "animate-right" : ""}`}>
                                        {/* <svg width="1026" height="546" viewBox="0 0 1026 546" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="513" cy="513" r="509.5" stroke="url(#paint0_linear_2609_3177)" stroke-width="7" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2609_3177" x1="513" y1="0" x2="513" y2="694.128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0A0A0A" />
                                                    <stop offset="1" stop-color="#01030D" />
                                                </linearGradient>
                                            </defs>
                                        </svg> */}
                                    </div>

                                    <div className={`why-choose-us-eclipse-7 why-choose-us-eclipse ${isVisible ? "animate-left" : ""}`}>
                                        {/* <svg width="1164" height="616" viewBox="0 0 1164 616" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="582" cy="582" r="578" stroke="url(#paint0_linear_2609_3175)" stroke-width="8" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2609_3175" x1="582" y1="0" x2="582" y2="787.49" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0A0A0A" />
                                                    <stop offset="1" stop-color="#01030D" />
                                                </linearGradient>
                                            </defs>
                                        </svg> */}
                                    </div>

                                    <div className={`why-choose-us-eclipse-8 why-choose-us-eclipse ${isVisible ? "animate-right" : ""}`}>
                                        {/* <svg width="1300" height="684" viewBox="0 0 1300 684" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="650" cy="650" r="645.5" stroke="url(#paint0_linear_2609_3176)" stroke-width="9" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2609_3176" x1="650" y1="0" x2="650" y2="879.499" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#0A0A0A" />
                                                    <stop offset="1" stop-color="#01030D" />
                                                </linearGradient>
                                            </defs>
                                        </svg> */}
                                    </div>
                                </div>

                                <div className={`why-choose-us-hand-image ${isVisible ? "hand-scale-up" : ""}`}>
                                    <Image src="/images/homepage/why-choose-us/why-choose-us-hand.png" alt="why-choose-us-hand-image" width={412} height={684}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}