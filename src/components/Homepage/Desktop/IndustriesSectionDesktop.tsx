// UPDATED LAYOUT WITH THEME CHANGE

'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        theme: "light-yellow",
        video: `${CDN_URL}/images/homepage/industries/technology-and-saas.mp4`,
        title: "Technology & SaaS",
        desc1: "The best software makes sense at a glance and feels natural from the start.",
        desc2: "We design intuitive SaaS platforms that improve adoption, reduce friction, and keep users coming back.",
        desc3: "Complex products deserve experiences that feel simple.",
    },
    {
        theme: "black",
        video: `${CDN_URL}/images/homepage/industries/finance.mp4`,
        title: "Finance & FinTech",
        desc1: "Financial decisions begin with credibility, long before transactions happen.",
        desc2: "We create secure, intuitive digital experiences that inspire confidence and simplify complex financial journeys.",
        desc3: "Trust isn't optional when every click involves confidence.",
    },
    {
        theme: "light-yellow",
        video: `${CDN_URL}/images/homepage/industries/healthcare.mp4`,
        title: "Healthcare & MedTech",
        desc1: "Healthcare experiences should reduce uncertainty, not create it.",
        desc2: "We design patient-first platforms that make information accessible, interactions seamless, and care easier to navigate.",
        desc3: "When people need clarity most, every interaction matters.",
    },
    {
        theme: "black",
        video: `${CDN_URL}/images/homepage/industries/e-commerce.mp4`,
        title: "E-commerce & Retail",
        desc1: "Every unnecessary click is a missed opportunity.",
        desc2: "We build shopping experiences that remove friction, increase confidence, and turn visitors into loyal customers.",
        desc3: "The shortest path from browsing to buying wins.",
    },
    {
        theme: "light-yellow",
        video: `${CDN_URL}/images/homepage/industries/real-estate.mp4`,
        title: "Real Estate & PropTech",
        desc1: "People invest in confidence before they invest in property.",
        desc2: "We craft digital experiences that showcase value, build trust, and encourage meaningful enquiries.",
        desc3: "Properties attract attention. Experiences create decisions.",
    },
    {
        theme: "black",
        video: `${CDN_URL}/images/homepage/industries/education-industry.mp4`,
        title: "Education & EdTech",
        desc1: "Great learning platforms feel effortless for every learner.",
        desc2: "We design engaging educational experiences that improve accessibility, participation, and long-term engagement.",
        desc3: "Learning works best when technology stays out of the way.",
    },
    {
        theme: "light-yellow",
        video: `${CDN_URL}/images/homepage/industries/ai-industry.mp4`,
        title: "AI & Emerging Tech",
        desc1: "Innovation succeeds when people know how to use it.",
        desc2: "We simplify advanced technologies through intuitive interfaces that make innovation feel approachable.",
        desc3: "The future moves fast. Great experiences help people keep up.",
    },
    {
        theme: "black",
        video: `${CDN_URL}/images/homepage/industries/food-industry.mp4`,
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

        const ctx = gsap.context(() => {
            const container =
                section.querySelector<HTMLDivElement>(
                    ".industries-scroll-container"
                );

            if (!container) return;

            const cards = gsap.utils.toArray<HTMLDivElement>(".industry-item");

            const getScrollDistance = () =>
                track.scrollWidth - container.offsetWidth;

            const getSnapPoints = () =>
                cards.map((el) => (
                    el.offsetLeft +
                    el.offsetWidth / 2 -
                    container.offsetWidth / 2
                ));

            const horizontalTween = gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getScrollDistance() + window.innerHeight}`,
                    pin: true,
                    scrub: 0.3,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,

                    onUpdate: () => {
                        gsap.to(section, {
                            duration: 0.5,
                            overwrite: true,
                        });
                    },

                    snap: {
                        snapTo: (progress: number) => {
                            const points = getSnapPoints();
                            const max = getScrollDistance();

                            const currentX = progress * max;

                            let index = points.findIndex(point => point > currentX);

                            if (index === -1) index = points.length - 1;

                            const direction =
                                horizontalTween.scrollTrigger?.direction ?? 1;

                            return direction > 0
                                ? points[index] / max
                                : points[Math.max(0, index - 1)] / max;
                        },
                        delay: 0,
                        duration: 0.3,
                        ease: "power1.out",
                    },
                },
            });

            cards.forEach((card) => {
                const theme = card.getAttribute("data-theme-color");
                
                ScrollTrigger.create({
                    trigger: card,
                    containerAnimation: horizontalTween,
                    start: "left 50%",
                    end: "right 50%",
                    onEnter: () => {
                        if (theme) document.body.setAttribute("data-theme", theme);
                    },
                    onEnterBack: () => {
                        if (theme) document.body.setAttribute("data-theme", theme);
                    },
                });
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
                            <p className="text-rg text-18">
                                <span>Every industry is different.</span>
                                <span>But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
                            </p>
                        </div>

                        <div className="industries-scroll-container">
                            <div ref={trackRef} className="industries-card-wrapper">
                                {industries.map((industry, index) => (
                                    <div 
                                        className="industry-item" 
                                        key={index} 
                                        data-theme-color={industry.theme}>
                                        <div className="industries-image-wrapper">
                                            <div className="industries-video prev-video"/>

                                            <svg className="industries-desktop-pixel-1" width="170" height="150" viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="50" height="50" fill="currentColor"/>
                                                <rect x="50" y="50" width="50" height="50" fill="currentColor"/>
                                                <rect x="100" y="100" width="40" height="40" fill="currentColor"/>
                                                <rect x="140" y="70" width="30" height="30" fill="currentColor"/>
                                                <rect y="100" width="50" height="50" fill="currentColor"/>
                                            </svg>


                                            <svg className="industries-desktop-pixel-2" width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="80" y="50" width="50" height="50" fill="currentColor"/>
                                                <rect x="30" width="50" height="50" fill="currentColor"/>
                                                <rect y="50" width="30" height="30" fill="currentColor"/>
                                            </svg>
                                            
                                            <svg className="industries-desktop-pixel-3" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="50" height="50" fill="currentColor"/>
                                            </svg>
                                        </div>

                                        <div className="industries-text-wrapper industry-content" >
                                            <span className="text-sb industries-title-name">
                                                {industry.title}
                                            </span>

                                            <p className="text-18 industry-detailtext">
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