'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        video: "/images/homepage/industries/technology-and-saas.mp4",
        title: "Technology & SaaS",
        desc1: "The best software isn't the one with the most features. It's the one people understand instantly.",
        desc2: "We design intuitive SaaS platforms that improve adoption, reduce friction, and keep users coming back.",
        desc3: "Complex products deserve experiences that feel simple.",
    },
    {
        video: "/images/homepage/industries/finance.mp4",
        title: "Finance & FinTech",
        desc1: "Financial decisions begin with credibility, long before transactions happen.",
        desc2: "We create secure, intuitive digital experiences that inspire confidence and simplify complex financial journeys.",
        desc3: "Trust isn't optional when every click involves confidence.",
    },
    {
        video: "/images/homepage/industries/healthcare.mp4",
        title: "Healthcare & MedTech",
        desc1: "Healthcare experiences should reduce uncertainty, not create it.",
        desc2: "We design patient-first platforms that make information accessible, interactions seamless, and care easier to navigate.",
        desc3: "When people need clarity most, every interaction matters.",
    },
    {
        video: "/images/homepage/industries/e-commerce.mp4",
        title: "E-commerce & Retail",
        desc1: "Every unnecessary click is a missed opportunity.",
        desc2: "We build shopping experiences that remove friction, increase confidence, and turn visitors into loyal customers.",
        desc3: "The shortest path from browsing to buying wins.",
    },
    {
        video: "/images/homepage/industries/real-estate.mp4",
        title: "Real Estate & PropTech",
        desc1: "People invest in confidence before they invest in property.",
        desc2: "We craft digital experiences that showcase value, build trust, and encourage meaningful enquiries.",
        desc3: "Properties attract attention. Experiences create decisions.",
    },
    {
        video: "/images/homepage/industries/education-industry.mp4",
        title: "Education & EdTech",
        desc1: "Great learning platforms feel effortless for every learner.",
        desc2: "We design engaging educational experiences that improve accessibility, participation, and long-term engagement.",
        desc3: "Learning works best when technology stays out of the way.",
    },
    {
        video: "/images/homepage/industries/ai-industry.mp4",
        title: "AI & Emerging Tech",
        desc1: "Innovation succeeds when people know how to use it.",
        desc2: "We simplify advanced technologies through intuitive interfaces that make innovation feel approachable.",
        desc3: "The future moves fast. Great experiences help people keep up.",
    },
    {
        video: "/images/homepage/industries/food-industry.mp4",
        title: "Food & Lifestyle",
        desc1: "People remember experiences before they remember products.",
        desc2: "We create brands and digital experiences that spark curiosity, build loyalty, and keep customers coming back.",
        desc3: "Great brands satisfy long before the first purchase.",
    }
];

export default function IndustriesSectionDesktop() {

    const sectionRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;

        if (!section || !track) return;

        const container = section.querySelector<HTMLDivElement>(
            ".industries-scroll-container"
        );

        if (!container) return;

        const scrollDistance =
            track.scrollWidth - container.offsetWidth;

        const ctx = gsap.context(() => {
            gsap.to(track, {
                x: -scrollDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${scrollDistance}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={sectionRef} className="industries-section-sticky section industries-section">
                <div className="industirs-section-inner">
                    <div className="container">
                        <div className="industries-text-title">
                            <h2 className="text-sb">Industries We Serve</h2>
                            <p className="text-rg text-18 text-grey">
                                <span>Every industry is different.</span>
                                <span>But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
                            </p>
                        </div>

                        <div className="industries-scroll-container">
                            <div ref={trackRef} className="industries-card-wrapper">
                                {industries.map((industry, index) => (
                                    <div className="industry-item" key={index}>
                                        <div className="industries-image-wrapper">
                                            <video className="industries-video prev-video" autoPlay muted loop playsInline src={industry.video} width={1000} height={600} />

                                            <Image className="industries-desktop-pixel-1" src="images/homepage/industries/industries-pixel-desktop-1.svg" alt="desktop pixel" width={170} height={150}></Image>
                                            <Image className="industries-desktop-pixel-2" src="images/homepage/industries/industries-pixel-desktop-2.svg" alt="desktop pixel" width={132} height={100}></Image>
                                            <Image className="industries-desktop-pixel-3" src="images/homepage/industries/industries-pixel-desktop-3.svg" alt="desktop pixel" width={50} height={50}></Image>
                                        </div>

                                        <div className="industries-text-wrapper industry-content" >
                                            <span className="text-sb industries-title-name">
                                                {industry.title}
                                            </span>

                                            <p className="text-18 text-grey industry-detailtext">
                                                <span className="text-sb">{industry.desc3}</span>
                                                <span className="text-rg"> {industry.desc1} </span>
                                                <span className="text-rg"> {industry.desc2} </span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}