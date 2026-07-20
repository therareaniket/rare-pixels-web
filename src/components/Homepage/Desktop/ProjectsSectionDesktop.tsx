'use client'

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

            mm.add("(min-width: 1025px)", () => {
                const cardWidth = cards[0].offsetWidth;

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
                        start: "top -80px",
                        end: () => `+=${cards.length * 1000}`,
                        pin: true,
                        scrub: true,
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
            });

            mm.add("(max-width: 1024px)", () => {
                const cardHeight = cards[0].offsetHeight;

                let peek = 0;

                if (peekValue.includes("%")) {
                    peek = cardHeight * (parseFloat(peekValue) / 100);
                } else {
                    peek = parseFloat(peekValue);
                }

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
                        start: "top -30px",
                        end: () => `+=${cards.length * 800}`,
                        pin: true,
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });

                for (let activeIndex = 1; activeIndex < cards.length; activeIndex++) {
                    tl.to(cards.slice(activeIndex), {
                        y: `-=${step}`,
                        ease: "none",
                        duration: 1,
                    });
                }
            });

            return () => mm.revert();
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={projectSectionRef} className="section projects-section-desktop projects-section-sticky">
            <div className="project-section-desktop-inner">
                <div className="container">
                    <div className="hm-project-container">
                        <div className="hm-projects-text">
                            <h2 className="text-sb">Our Projects</h2>
                            <p className="text-rg text-18">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
                        </div>

                        <div className="hm-projects-horizontal-pin-viewport">
                            <div className="hm-projects-card-wrapper">
                                <div ref={addToRefs} className="hm-projects-card-lg hm-projects-card-1">
                                    <div className="hm-projects-images-lg site-radius-20 bg-purple-shade">
                                        <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/AutoBot_proj.mp4" width={523} height={423} autoPlay loop muted></video>
                                    </div>
                                    <div className="hm-projects-desc site-radius-20 bg-purple-shade text-black">
                                        <h3 className="text-sb text-black">DJK</h3>
                                        <p className="text-rg text-18 text-black">DJK has delivered trusted HVAC solutions for pharma and food sectors.</p>
                                    </div>
                                </div>

                                <div ref={addToRefs} className="hm-projects-card-sm hm-projects-card-2">
                                    <div className="hm-projects-images-sm site-radius-20 bg-light-green">
                                        <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/steamovap-video.mp4" width={523} height={423} autoPlay loop muted></video>
                                    </div>
                                    <div className="hm-projects-desc site-radius-20 bg-light-green text-black">
                                        <h3 className="text-sb text-black">S.ART</h3>
                                        <p className="text-rg text-18 text-black">A modern logo designed for S.Art, blending abstract style with a touch of tradition.</p>
                                    </div>
                                </div>

                                <div ref={addToRefs} className="hm-projects-card-lg hm-projects-card-3">
                                    <div className="hm-projects-images-lg site-radius-20 bg-light-pink">
                                        <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/AutoBot_proj.mp4" width={523} height={423} autoPlay loop muted></video>
                                    </div>
                                    <div className="hm-projects-desc site-radius-20 bg-light-pink text-black">
                                        <h3 className="text-sb text-black">COVRIZE</h3>
                                        <p className="text-rg text-18 text-black">Transform your business with our platform, providing tailored software solutions to meet your unique needs.</p>
                                    </div>
                                </div>

                                <div ref={addToRefs} className="hm-projects-card-sm hm-projects-card-4">
                                    <div className="hm-projects-images-sm site-radius-20 bg-light-yellow">
                                        <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/steamovap-video.mp4" width={523} height={423} autoPlay loop muted></video>
                                    </div>
                                    <div className="hm-projects-desc site-radius-20 bg-light-yellow text-black">
                                        <h3 className="text-sb text-black">4SEAHUB</h3>
                                        <p className="text-rg text-18 text-black">4SEAHUB is a purpose driven logistics and import-export company, setting new standards in trust and quality.</p>
                                    </div>
                                </div>

                                <div ref={addToRefs} className="hm-projects-card-lg hm-projects-card-5">
                                    <div className="hm-projects-images-lg site-radius-20 bg-skin">
                                        <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/AutoBot_proj.mp4" width={523} height={423} autoPlay loop muted></video>
                                    </div>
                                    <div className="hm-projects-desc site-radius-20 bg-skin text-black">
                                        <h3 className="text-sb text-black">SALES DASHBOARD</h3>
                                        <p className="text-rg text-18 text-black">Enhanced decision making, and improved performance tracking.</p>
                                    </div>
                                </div>

                                {/* <div ref={addToRefs} className="hm-projects-card-sm hm-projects-card-6">
                                    <div className="hm-projects-images-sm site-radius-20 bg-light-green">
                                        <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/steamovap-video.mp4" width={523} height={423} autoPlay loop muted></video>
                                    </div>
                                    <div className="hm-projects-desc site-radius-20 bg-light-green text-black">
                                        <h3 className="text-sb text-black">S.ART</h3>
                                        <p className="text-rg text-18 text-black">A modern logo designed for S.Art, blending abstract style with a touch of tradition.</p>
                                    </div>
                                </div>

                                <div ref={addToRefs} className="hm-projects-card-lg hm-projects-card-7">
                                    <div className="hm-projects-images-lg site-radius-20 bg-purple-shade">
                                        <video className="site-radius-20 desktop-projects-videos" src="/images/homepage/projects/AutoBot_proj.mp4" width={523} height={423} autoPlay loop muted></video>
                                    </div>
                                    <div className="hm-projects-desc site-radius-20 bg-purple-shade text-black">
                                        <h3 className="text-sb text-black">DJK</h3>
                                        <p className="text-rg text-18 text-black">DJK has delivered trusted HVAC solutions for pharma and food sectors.</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
