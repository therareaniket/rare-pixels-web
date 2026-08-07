'use client';

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSectionMobile() {

    const projectMobileSectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    useLayoutEffect(() => {
        const section = projectMobileSectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            if (!cards.length) return;

            const peek = 60;
            const gap = 0;

            const cardHeight = cards[0].offsetHeight;
            const step = cardHeight + gap - peek;

            cards.forEach((card, index) => {
                gsap.set(card, {
                    position: "relative",
                    zIndex: cards.length + index,
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${step * (cards.length - 1)}`,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            });

            for (let activeIndex = 1; activeIndex < cards.length; activeIndex++) {
                tl.to(
                    cards.slice(activeIndex),
                    {
                        y: `-=${step}px`,
                        ease: "none",
                        duration: 1,
                    }
                );
            }
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={projectMobileSectionRef} className="section">
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
                    <div ref={addToRefs} className="project-card-mobile project-card-mobile-1">
                        <video className="project-card-mobile-video" src="/images/homepage/projects/djk-project.mp4" width={523} height={423} autoPlay loop muted></video>
                    </div>

                    <div ref={addToRefs} className="project-card-mobile project-card-mobile-2">
                        <video className="project-card-mobile-video" src="/images/homepage/projects/autobot-project.mp4" width={523} height={423} autoPlay loop muted></video>
                    </div>

                    <div ref={addToRefs} className="project-card-mobile project-card-mobile-3">
                        <video className="project-card-mobile-video" src="/images/homepage/projects/cameriz-project.mp4" width={523} height={423} autoPlay loop muted></video>
                    </div>

                    <div ref={addToRefs} className="project-card-mobile project-card-mobile-4">
                        <video className="project-card-mobile-video" src="/images/homepage/projects/ra-project.mp4" width={523} height={423} autoPlay loop muted></video>
                    </div>

                    <div ref={addToRefs} className="project-card-mobile project-card-mobile-5">
                        <video className="project-card-mobile-video" src="/images/homepage/projects/steamovap-project.mp4" width={523} height={423} autoPlay loop muted></video>
                    </div>
                </div>
            </div>
        </section>
    );
}