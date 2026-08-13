'use client'

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function ProjectsSectionDesktop() {

    const sectionRef = useRef(null);
    const wrapperRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".project-card");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${cards.length * 1000}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            cards.forEach((_, index) => {
                if (index === 0) return;

                const overlay = cards[index - 1].querySelector('.project-cards-overlay');

                tl.to(
                    cards.slice(index),
                    {
                        x: index * -800,
                        duration: 1,
                        ease: "none"
                    }
                )
                    .to(
                        cards[index - 1],
                        {
                            scale: 0.95,
                            duration: 0.3,
                            onStart: () => {
                                const video = cards[index - 1].querySelector('video');
                                video?.pause();
                            },
                            onReverseComplete: () => {
                                const video = cards[index - 1].querySelector('video');
                                video?.play();
                            }
                        },
                        "<"
                    )
                    .to(
                        overlay,
                        {
                            opacity: 1,
                            duration: 0.3
                        },
                        "<"
                    )
            });
        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (
        <>
            <section ref={sectionRef} className="section project-section-desktop">
                <div className="container">
                    <div className="project-desktop-title">
                        <h2 className="text-sb">Our Projects</h2>

                        <p className="text-rg">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
                    </div>

                    <div ref={wrapperRef} className="hm-project-card-wrapper">
                        <div className="project-card project-card-1">
                            <div className="project-cards-overlay">
                                <h2 className="h2 text-sb">DJK</h2>
                            </div>

                            <div className="project-section-video">
                                <video className="project-video-desktop" src="/images/homepage/projects/djk-project.mp4" width={1920} height={1080} autoPlay loop playsInline muted></video>
                            </div>
                        </div>

                        <div className="project-card project-card-2">
                            <div className="project-cards-overlay">
                                <h2 className="h2 text-sb">AUTOBOT</h2>
                            </div>
                            <div className="project-section-video">
                                <video className="project-video-desktop" src="/images/homepage/projects/autobot-project.mp4" width={1920} height={1080} autoPlay loop playsInline muted></video>
                            </div>
                        </div>

                        <div className="project-card project-card-3">
                            <div className="project-cards-overlay">
                                <h2 className="h2 text-sb">CAMERIZ</h2>
                            </div>

                            <div className="project-section-video">
                                <video className="project-video-desktop" src="/images/homepage/projects/cameriz-project.mp4" width={1920} height={1080} autoPlay loop playsInline muted></video>
                            </div>
                        </div>

                        <div className="project-card project-card-4">
                            <div className="project-cards-overlay">
                                <h2 className="h2 text-sb">RA</h2>
                            </div>

                            <div className="project-section-video">
                                <video className="project-video-desktop" src="/images/homepage/projects/ra-project.mp4" width={1920} height={1080} autoPlay loop playsInline muted></video>
                            </div>
                        </div>

                        <div className="project-card project-card-5">
                            <div className="project-cards-overlay">
                                <h2 className="h2 text-sb">STEAMOVAP</h2>
                            </div>

                            <div className="project-section-video">
                                <video className="project-video-desktop" src="/images/homepage/projects/steamovap-project.mp4" width={1920} height={1080} autoPlay loop playsInline muted></video>
                            </div>
                        </div>

                        <div className="project-card project-card-6">
                            <div className="project-cards-overlay">
                                <h2 className="h2 text-sb">DJK</h2>
                            </div>

                            <div className="project-section-video">
                                <video className="project-video-desktop" src="/images/homepage/projects/djk-project.mp4" width={1920} height={1080} autoPlay loop playsInline muted></video>
                            </div>
                        </div>

                        <div className="project-card project-card-7">
                            <div className="project-cards-overlay">
                                <h2 className="h2 text-sb">CAMERIZ</h2>
                            </div>

                            <div className="project-section-video">
                                <video className="project-video-desktop" src="/images/homepage/projects/cameriz-project.mp4" width={1920} height={1080} autoPlay loop playsInline muted></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}