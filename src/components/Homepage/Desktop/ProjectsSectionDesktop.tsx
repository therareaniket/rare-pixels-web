'use client'

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function ProjectsSectionDesktop() {

    const sectionRef = useRef(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".project-card");
            const extraScrollAfterLastCard = 1;

            const mm = gsap.matchMedia();

            mm.add("(min-width: 1200px)", () => {
                const wrapper = wrapperRef.current;
                if (!wrapper) return;

                const shift =
                    parseFloat(
                        getComputedStyle(wrapper).getPropertyValue("--card-shift")
                    ) || 800;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: `+=${(cards.length + extraScrollAfterLastCard) * 1000}`,
                        scrub: 2,
                        pin: true,
                        anticipatePin: 1,
                    }
                });

                tl.to({}, { duration: 2 });

                cards.forEach((_, index) => {
                    if (index === 0) return;

                    const overlay =
                        cards[index - 1].querySelector(".project-cards-overlay");

                    tl.to(
                        cards.slice(index),
                        {
                            x: index * -shift,
                            duration: 2,
                            ease: "none"
                        }
                    )
                        .to(
                            cards[index - 1],
                            {
                                scale: 0.95,
                                duration: 0.3,
                                onStart: () => {
                                    const video = cards[index - 1].querySelector("video");
                                    video?.pause();
                                },
                                onReverseComplete: () => {
                                    const video = cards[index - 1].querySelector("video");
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
                        );
                });

                tl.to(
                    cards[cards.length - 1],
                    {
                        scale: 0.95,
                        duration: 0.3,
                        ease: "power2.out"
                    }
                );

                tl.fromTo(
                    ".project-last-card-overlay",
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 0.1,
                        ease: "power1.out"
                    }
                );
            });

            mm.add("(max-width: 1199px)", () => {
                const wrapper = wrapperRef.current;
                if (!wrapper) return;

                const cardHeight = cards[0].offsetHeight;
                const stackVisiblePart =
                    parseFloat(
                        getComputedStyle(wrapper).getPropertyValue("--card-peek")
                    ) || 120;
                const initialGap = 20;


                cards.forEach((card, index) => {
                    gsap.set(card, {
                        top: index * (cardHeight + initialGap),
                        zIndex: cards.length + index
                    });
                });

                const totalHeight =
                    cardHeight +
                    (cards.length - 1) * (cardHeight + initialGap);

                wrapper.style.height = `${totalHeight}px`;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: `+=${cards.length * 1000}`,
                        scrub: 2,
                        // pin: true,
                        // anticipatePin: 1,
                    }
                });

                cards.forEach((_, index) => {
                    if (index === 0) return;

                    const overlay =
                        cards[index - 1].querySelector(".project-cards-overlay");

                    tl.to(
                        cards.slice(index),
                        {
                            top: `-=${cardHeight + initialGap - stackVisiblePart}`,
                            duration: 2,
                            ease: "none"
                        }
                    )
                        .to(
                            cards[index - 1],
                            {
                                scale: 1,
                                duration: 1,
                                onStart: () => {
                                    const video = cards[index - 1].querySelector("video");
                                    video?.pause();
                                },
                                onReverseComplete: () => {
                                    const video = cards[index - 1].querySelector("video");
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
                        );
                });

                tl.to(
                    cards[cards.length - 1],
                    {
                        scale: 1,
                        duration: 1,
                        ease: "power2.out"
                    }
                );

                tl.fromTo(
                    ".project-last-card-overlay",
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out"
                    }
                );
            });
            return () => mm.revert();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={sectionRef} className="section project-section-desktop project-section-tablet-sticky">
                <div className="project-section-tablet-inner">
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
                                {/* <div className="project-cards-overlay">
                                <h2 className="h2 text-sb">CAMERIZ</h2>
                            </div> */}

                                <div className="project-last-card-overlay">
                                    <h2 className="h2 text-sb">CAMERIZ</h2>
                                </div>

                                <div className="project-section-video">
                                    <video className="project-video-desktop" src="/images/homepage/projects/cameriz-project.mp4" width={1920} height={1080} autoPlay loop playsInline muted></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}