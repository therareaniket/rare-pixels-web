'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

export default function WhyChooseUsSectionDesktop() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); } }, { threshold: 0.3, }
        );
        if (sectionRef.current) { observer.observe(sectionRef.current); }
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section ref={sectionRef} className="section why-choose-us-desktop">
                <div className="container">
                    <div className="why-choose-us-text-wrapper  ">
                        <h2 className="text-sb">Why Choose Us</h2>
                        <p className="text-18 text-rg">We bring together strategy, design, technology, and creativity to build experiences that are easy to use, hard to ignore, and built to perform.</p>
                    </div>

                    <div className="container-sm">
                        <div className="why-choose-us-content-wrapper why-choose-us-for-desktop">
                            <div className="why-choose-us-pointer-wrapper">
                                <div className="why-choose-us-pointer-cards">
                                    <div className="why-choose-us-card why-choose-us-card-1  ">
                                        <h3 className="h6 text-sb">Built, Not Borrowed</h3>

                                        <p className="text-18 text-rg">We don&apos;t believe in templates or recycled thinking. Every solution is created from the ground up to fit your business, your users, and your ambitions.</p>
                                    </div>

                                    <div className="why-choose-us-card why-choose-us-card-2  ">
                                        <h3 className="h6 text-sb">Simplicity With Purpose</h3>

                                        <p className="text-18 text-rg">Great experiences feel effortless. We remove complexity, sharpen every interaction, and design with clarity at the center of every decision.</p>
                                    </div>
                                </div>

                                <div className="why-choose-us-pointer-cards">
                                    <div className="why-choose-us-card why-choose-us-card-3  ">
                                        <h3 className="h6 text-sb">Ideas That Get Built</h3>

                                        <p className="text-18 text-rg">A vision means little without execution. From first sketch to final launch, every detail is delivered with precision, consistency, and care.</p>
                                    </div>

                                    <div className="why-choose-us-card why-choose-us-card-4  ">
                                        <h3 className="h6 text-sb">Partners In The Process</h3>

                                        <p className="text-18 text-rg">We work alongside you, not around you. The best outcomes come from trust, collaboration, and relationships that grow beyond a single project.</p>
                                    </div>

                                    <div className="why-choose-us-card why-choose-us-card-5  ">
                                        <h3 className="h6 text-sb">Measured By Impact</h3>

                                        <p className="text-18 text-rg">Beautiful work is only the beginning. We create solutions that drive adoption, strengthen brands, and deliver meaningful business outcomes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-choose-us-image-wrapper">
                                <div className={`why-choose-us-hand-image ${isVisible ? "hand-scale-up" : ""}`}>
                                    <Image src={`${CDN_URL}/images/homepage/why-choose-us/why-choose-us-hand.png`} alt="why-choose-us-hand-image" width={412} height={684}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}