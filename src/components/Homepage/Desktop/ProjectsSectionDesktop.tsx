'use client'

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSectionDesktop() {

    const projectSectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    useLayoutEffect(() => {
        const section = projectSectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            if (!cards.length) return;

            const wrapper = section.querySelector(
                ".hm-projects-card-wrapper"
            ) as HTMLElement;

            const styles = getComputedStyle(wrapper);

            const gap = parseFloat(
                styles.getPropertyValue("--project-stack-gap")
            );

            const peekValue = styles
                .getPropertyValue("--project-stack-peek")
                .trim();

            const mm = gsap.matchMedia();

            mm.add("(min-width: 1200px)", () => {
                const cardWidth = cards[0].offsetWidth;
                const maxOffset = Math.max(
                    ...cards.map(card =>
                        parseFloat(getComputedStyle(card).marginTop) || 0
                    )
                );

                const wrapperHeight = wrapper.offsetHeight - maxOffset;

                const cardDiff = parseFloat(
                    getComputedStyle(wrapper)
                        .getPropertyValue("--card-diff")
                );

                cards.forEach((card) => {
                    if (card.classList.contains("hm-projects-card-sm")) {
                        card.style.height = `${wrapperHeight}px`;
                    } else {
                        card.style.height = `${wrapperHeight - cardDiff}px`;
                    }
                });

                let peek = 0;

                if (peekValue.includes("%")) {
                    peek = cardWidth * (parseFloat(peekValue) / 100);
                } else {
                    peek = parseFloat(peekValue);
                }

                const step = cardWidth + gap - peek;

                cards.forEach((card, index) => {
                    gsap.set(card, {
                        zIndex: cards.length * index,
                        position: "relative",
                    });
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 0",
                        end: () => `+=${step * (cards.length - 1)}`,
                        pin: true,
                        scrub: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                for (let activeIndex = 1; activeIndex < cards.length; activeIndex++) {
                    tl.to(cards.slice(activeIndex), {
                        x: `-=${step}`,
                        ease: "none",
                        duration: 1,
                    });
                }

                cards.forEach((card) => {
                    const overlay = card.querySelector(".project-card-glass-overlay");

                    gsap.set(overlay, {
                        opacity: 0
                    });
                });

                for (let activeIndex = 1; activeIndex < cards.length; activeIndex++) {

                    const previousCard = cards[activeIndex - 1];
                    const previousOverlay = previousCard.querySelector(
                        ".project-card-glass-overlay"
                    );

                    tl.to(previousOverlay, {
                        opacity: 1,
                        duration: 0.2
                    }, activeIndex - 1);

                    tl.to(cards.slice(activeIndex), {
                        x: `-=${step}`,
                        ease: "none",
                        duration: 1
                    }, activeIndex - 1);
                }

                // cards.forEach((card) => {
                //     ScrollTrigger.create({
                //         trigger: card,
                //         start: "top center",
                //         end: "bottom center",
                //         onEnter: () => card.classList.add("active-card"),
                //         onLeave: () => card.classList.remove("active-card"),
                //         onEnterBack: () => card.classList.add("active-card"),
                //         onLeaveBack: () => card.classList.remove("active-card"),
                //     });
                // });
            });

            mm.add("(max-width: 1199px)", () => {
                const cardHeight = cards[0].offsetHeight;

                let peek = 0;

                if (peekValue.includes("%")) {
                    peek = cardHeight * (parseFloat(peekValue) / 100);
                } else {
                    peek = parseFloat(peekValue);
                }

                // const totalHeight =
                //     cards.length * cards[0].offsetHeight -
                //     (cards.length - 1) * peek;

                // gsap.set(wrapper, {
                //     height: totalHeight
                // });

                const finalHeight =
                    cardHeight + (cards.length - 1) * peek;

                gsap.set(wrapper, {
                    height: finalHeight,
                });

                const step = cardHeight + gap - peek;

                cards.forEach((card, index) => {
                    gsap.set(card, {
                        zIndex: cards.length * index,
                        position: "relative",
                    });
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 0",
                        end: () => `+=${step * (cards.length - 1)}`,
                        pin: true,
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });

                // for (let activeIndex = 1; activeIndex < cards.length; activeIndex++) {
                //     tl.to(cards.slice(activeIndex), {
                //         y: `-=${step}`,
                //         ease: "none",
                //         duration: 1,
                //     });
                // }

                cards.forEach((card) => {
                    const overlay = card.querySelector(".hm-project-desc");

                    gsap.set(overlay, {
                        opacity: 0,
                    });
                });

                for (let activeIndex = 1; activeIndex < cards.length; activeIndex++) {

                    const previousCard = cards[activeIndex - 1];
                    const previousOverlay = previousCard.querySelector(
                        ".hm-project-desc"
                    );

                    tl.to(previousOverlay, {
                        opacity: 1,
                        ease: "none",
                        duration: 1,
                    });

                    tl.to(
                        cards.slice(activeIndex),
                        {
                            y: `-=${step}`,
                            ease: "none",
                            duration: 1,
                        },
                        "<"
                    );
                }
            });

            return () => mm.revert();
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={projectSectionRef} className="section projects-section-desktop projects-section-sticky-desktop" >
            <div className="project-section-desktop-inner">
                <div className="container">
                    <div className="hm-project-container">
                        <div className="hm-projects-text">
                            <h2 className="text-sb">Our Projects</h2>
                            <p className="text-rg text-18">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
                        </div>

                        <div className="hm-projects-horizontal-pin-viewport">
                            <div className="hm-projects-card-wrapper">
                                <div ref={addToRefs} className="hm-projects-card-sm hm-projects-images-sm hm-projects-card-1 site-radius-20">
                                    <div className="project-card-glass-overlay"><h3 className="h2 text-sb">DJK</h3></div>

                                    <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/djk-project.mp4" width={523} height={423} autoPlay loop muted></video>

                                    <div className="hm-project-desc">
                                        <h3 className="h1 text-sb">DJK</h3>
                                    </div>
                                </div>

                                <div ref={addToRefs} className="hm-projects-card-sm hm-projects-images-sm hm-projects-card-2 site-radius-20">
                                    <div className="project-card-glass-overlay"><h3 className="h2 text-sb">A.U.T.O.B.O.T</h3></div>

                                    <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/autobot-project.mp4" width={523} height={423} autoPlay loop muted></video>

                                    <div className="hm-project-desc">
                                        <h3 className="h1 text-sb">A.U.T.O.B.O.T</h3>
                                    </div>
                                </div>

                                <div ref={addToRefs} className="hm-projects-card-sm hm-projects-images-sm hm-projects-card-3 site-radius-20">
                                    <div className="project-card-glass-overlay"><h3 className="h2 text-sb">CAMERIZ</h3></div>

                                    <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/cameriz-project.mp4" width={523} height={423} autoPlay loop muted></video>

                                    <div className="hm-project-desc">
                                        <h3 className="h1 text-sb">CAMERIZ</h3>
                                    </div>
                                </div>

                                <div ref={addToRefs} className="hm-projects-card-sm hm-projects-images-sm hm-projects-card-4 site-radius-20">
                                    <div className="project-card-glass-overlay"><h3 className="h2 text-sb">RA</h3></div>

                                    <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/ra-project.mp4" width={523} height={423} autoPlay loop muted></video>

                                    <div className="hm-project-desc">
                                        <h3 className="h1 text-sb">RA</h3>
                                    </div>
                                </div>

                                <div ref={addToRefs} className="hm-projects-card-sm hm-projects-images-sm site-radius-20 hm-projects-card-5">
                                    <div className="project-card-glass-overlay"><h3 className="h2 text-sb">STEAMOVAP</h3></div>

                                    <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/steamovap-project.mp4" width={523} height={423} autoPlay loop muted></video>

                                    <div className="hm-project-desc">
                                        <h3 className="h1 text-sb">STEAMOVAP</h3>
                                    </div>
                                </div>

                                <div ref={addToRefs} className="hm-projects-card-sm hm-projects-images-sm hm-projects-card-6 site-radius-20">
                                    <div className="project-card-glass-overlay"><h3 className="h2 text-sb">A.U.T.O.B.O.T</h3></div>

                                    <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/autobot-project.mp4" width={523} height={423} autoPlay loop muted></video>

                                    <div className="hm-project-desc">
                                        <h3 className="h1 text-sb">A.U.T.O.B.O.T</h3>
                                    </div>
                                </div>

                                <div ref={addToRefs} className="hm-projects-card-sm hm-projects-images-sm hm-projects-card-7 site-radius-20">
                                    <div className="project-card-glass-overlay"><h3 className="h2 text-sb">DJK</h3></div>

                                    <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/djk-project.mp4" width={523} height={423} autoPlay loop muted></video>

                                    <div className="hm-project-desc">
                                        <h3 className="h1 text-sb">DJK</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}