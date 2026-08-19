'use client';

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSectionMobile() {
    const section = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".project-card-mobile");
        const wrapper = section.current?.querySelector(".projects-wrapper") as HTMLElement;

        const cardHeight = 250;
        const gap = 20;

        cards.forEach((card, index) => {
            gsap.set(card, {
                top: index * (cardHeight + gap),
                zIndex: cards.length + index
            });
        });

                    const lastOverlay = wrapper?.querySelector(
                ".project-mobile-last-card-overlay"
            ) as HTMLElement;

            if (lastOverlay) {
                gsap.set(lastOverlay, {
                    opacity: 0,
                    visibility: "hidden",
                });
            }

        gsap.set(wrapper, {
            height: "--wrapper-height",
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                start: "top top",
                end: "+=2500",
                pin: true,
                scrub: 2,
                // pinSpacing: false,
            }
        });

        cards.forEach((card, index) => {
            if (index === 0) return;

            tl.to(
                cards.slice(index),
                {
                    top: `-=${200}`,
                    duration: 1,
                    ease: "none",
                },
                index - 1
            );
        });

        const step = 200;

        cards.forEach((card, index) => {
            if (index === 0) return;

            const previousCard = cards[index - 1];
            const previousOverlay =
                previousCard.querySelector(".project-mobile-desc");

            tl.to(
                cards.slice(index),
                {
                    top: `-=${step}`,
                    duration: 1,
                    ease: "none",
                },
                index - 1
            );

            if (previousOverlay) {
                tl.to(
                    previousOverlay,
                    {
                        opacity: 1,
                        duration: 0.3,
                    },
                    index - 1
                );
            }

            if (lastOverlay) {
                tl.to(
                    lastOverlay,
                    {
                        opacity: 1,
                        visibility: "visible",
                        duration: 2,
                        ease: "power1.out",
                    },
                    cards.length - 2
                );
            }
        });

        return () => ScrollTrigger.getAll().forEach(st => st.kill());
    }, []);

    return (
        <section ref={section} className="section project-mobile-section project-section-sticky">
            <div className="project-section-inner">
                <div className="container">
                    <div className="projects-title-wrapper">
                        <h2 className="text-sb">Our Projects</h2>

                        <p className="text-14 text-rg">
                            A curated selection of work that reflects how we
                            design, build, and deliver impactful digital
                            experiences.
                        </p>
                    </div>

                    <div className="projects-wrapper">
                        <div className="project-card-mobile project-card-mobile-1">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/djk-project.mp4" width={523} height={423} autoPlay loop muted></video>

                            <div className="project-mobile-desc">
                                <h3 className="text-sb h1">DJK</h3>
                            </div>
                        </div>

                        <div className="project-card-mobile project-card-mobile-2">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/autobot-project.mp4" width={523} height={423} autoPlay loop muted></video>

                            <div className="project-mobile-desc">
                                <h3 className="text-sb h1">A.U.T.O.B.O.T</h3>
                            </div>
                        </div>

                        <div className="project-card-mobile project-card-mobile-3">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/cameriz-project.mp4" width={523} height={423} autoPlay loop muted></video>

                            <div className="project-mobile-desc">
                                <h3 className="text-sb h1">CAMERIZ</h3>
                            </div>
                        </div>

                        <div className="project-card-mobile project-card-mobile-4">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/ra-project.mp4" width={523} height={423} autoPlay loop muted></video>

                            <div className="project-mobile-desc">
                                <h3 className="text-sb h1">RA</h3>
                            </div>
                        </div>

                        <div className="project-card-mobile project-card-mobile-5">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/steamovap-project.mp4" width={523} height={423} autoPlay loop muted></video>

                            <div className="project-mobile-desc">
                                <h3 className="text-sb h1">STEAMOVAP</h3>
                            </div>
                        </div>

                        <div className="project-card-mobile project-card-mobile-4">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/ra-project.mp4" width={523} height={423} autoPlay loop muted></video>

                            <div className="project-mobile-desc">
                                <h3 className="text-sb h1">RA</h3>
                            </div>
                        </div>

                        <div className="project-card-mobile project-card-mobile-2">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/autobot-project.mp4" width={523} height={423} autoPlay loop muted></video>

                            <div className="project-mobile-last-card-overlay">
                                <h3 className="text-sb h1">A.U.T.O.B.O.T</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}