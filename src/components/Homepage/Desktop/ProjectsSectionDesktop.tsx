'use client';


import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSectionDesktop() {
    const sectionRef = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const cards = gsap.utils.toArray<HTMLElement>(
            '.hm-projects-card-lg, .hm-projects-card-sm'
        );

        const buildAnimation = () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            gsap.set(cards, { clearProps: 'all' });

            const isTablet = window.innerWidth < 1200;

            if (isTablet) {
                cards.forEach((card, index) => {
                    gsap.set(card, {
                        zIndex: index + 1,
                    });
                });

                const cardHeight = cards[0].offsetHeight;
                const stackGap = 120;

                const overlapDistance = cardHeight - stackGap;

                const totalScrollDistance =
                    overlapDistance * (cards.length - 1);

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top top',
                        end: `+=${totalScrollDistance}`,
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                cards.slice(1).forEach((card, index) => {
                    const level = index + 1;

                    tl.to(
                        card,
                        {
                            y: -overlapDistance * level,
                            ease: 'none',
                            duration: 1,
                        },
                        0
                    );
                });
                return;
            }

            const sectionStyles = getComputedStyle(section);

            const peekRatio =
                parseFloat(
                    sectionStyles.getPropertyValue('--card-peek')
                ) || 0.45;

            const firstCardWidth = cards[0].offsetWidth;

            const visiblePart = firstCardWidth * peekRatio;
            const overlapDistance = firstCardWidth - visiblePart;

            cards.forEach((card, index) => {
                gsap.set(card, {
                    zIndex: cards.length + index,
                });
            });

            const totalScrollDistance =
                overlapDistance * (cards.length - 1);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top -30px',
                    end: `+=${totalScrollDistance}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            cards.slice(1).forEach((card, index) => {
                const level = index + 1;

                tl.to(card, {
                    x: -overlapDistance * level,
                    ease: 'none',
                    duration: 4,
                });
            });
        };

        buildAnimation();

        const onResize = () => {
            buildAnimation();
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="section projects-section-desktop projects-section-sticky">
            <div className="container">
                <div className="hm-project-container">
                    <div className="hm-projects-text">
                        <h2 className="text-sb">Our Projects</h2>
                        <p className="text-rg text-18">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
                    </div>

                    <div className="hm-projects-horizontal-pin-viewport">
                        <div className="hm-projects-card-wrapper">
                            <div className="hm-projects-card-lg hm-projects-card-1">
                                <div className="hm-projects-images-lg site-radius-20 bg-purple-shade">
                                    <Image className="site-radius-20" src="/images/homepage/djk-project.png" alt="rare-projects" width={523} height={423} priority></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-purple-shade text-black">
                                    <h3 className="text-sb text-black">DJK</h3>
                                    <p className="text-rg text-18 text-black">DJK has delivered trusted HVAC solutions for pharma and food sectors.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-sm hm-projects-card-2">
                                <div className="hm-projects-images-sm site-radius-20 bg-light-green">
                                    <Image className="site-radius-20" src="/images/homepage/sart-project.png" alt="rare-projects" width={523} height={423}></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-light-green text-black">
                                    <h3 className="text-sb text-black">S.ART</h3>
                                    <p className="text-rg text-18 text-black">A modern logo designed for S.Art, blending abstract style with a touch of tradition.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-lg hm-projects-card-3">
                                <div className="hm-projects-images-lg site-radius-20 bg-light-pink">
                                    <Image className="site-radius-20" src="/images/homepage/coverize-project.png" alt="rare-projects" width={523} height={423}></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-light-pink text-black">
                                    <h3 className="text-sb text-black">COVRIZE</h3>
                                    <p className="text-rg text-18 text-black">Transform your business with our platform, providing tailored software solutions to meet your unique needs.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-sm hm-projects-card-4">
                                <div className="hm-projects-images-sm site-radius-20 bg-light-yellow">
                                    <Image className="site-radius-20" src="/images/homepage/seahub-project.png" alt="rare-projects" width={523} height={423}></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-light-yellow text-black">
                                    <h3 className="text-sb text-black">4SEAHUB</h3>
                                    <p className="text-rg text-18 text-black">4SEAHUB is a purpose driven logistics and import-export company, setting new standards in trust and quality.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-lg hm-projects-card-5">
                                <div className="hm-projects-images-lg site-radius-20 bg-skin">
                                    <Image className="site-radius-20" src="/images/homepage/sales-project.png" alt="rare-projects" width={523} height={423}></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-skin text-black">
                                    <h3 className="text-sb text-black">SALES DASHBOARD</h3>
                                    <p className="text-rg text-18 text-black">Enhanced decision making, and improved performance tracking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
