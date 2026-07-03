'use client';


import { useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSectionDesktop() {
    const sectionRef = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const cards = gsap.utils.toArray<HTMLElement>('.hm-projects-card-lg, .hm-projects-card-sm');

        const wrapper = section.querySelector('.hm-projects-card-wrapper');

        const buildAnimation = () => {

            ScrollTrigger.getAll().forEach(st => st.kill());

            gsap.set(cards, { clearProps: 'all' });

            const sectionStyles = getComputedStyle(section);
            const peekRatio = parseFloat(
                sectionStyles.getPropertyValue('--card-peek')
            ) || 0.45;

            cards.forEach((card, index) => {
                gsap.set(card, {
                    zIndex: index + 1
                });
            });

            const firstCardWidth = cards[0].offsetWidth;

            const visiblePart =
                firstCardWidth * peekRatio;

            const overlapDistance =
                firstCardWidth - visiblePart;

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
                }
            });

            cards.slice(1).forEach((card, index) => {

                const level = index + 1;

                tl.to(card, {
                    x: -overlapDistance * level,
                    ease: 'none',
                    duration: 4
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

            window.removeEventListener(
                'resize',
                onResize
            );

            ScrollTrigger.getAll().forEach(st => st.kill());
        };

    }, []);

    const sliderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const section = sectionRef.current;

        if (!slider || !section) return;

        const totalScroll = slider.scrollWidth - window.innerWidth;

        const tween = gsap.to(slider, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: `+=${totalScroll}`,
                scrub: 1,
                pin: true,
            },
        });

        return () => {
            tween.kill();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="section projects-section-desktop">
            <div className="container">
                <div className="hm-project-container">
                    <div className="hm-projects-text">
                        <h2 className="text-sb">Our Projects</h2>
                        <p className="text-rg text-18">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
                    </div>

                    <div className="hm-projects-horizontal-pin-viewport hm-projects-desktop">
                        <div className="hm-projects-card-wrapper">
                            <div className="hm-projects-card-lg hm-projects-card-1">
                                <div className="hm-projects-images-lg site-radius-20 bg-purple-shade">
                                    <Image className="site-radius-20" src="/images/homepage/djk-project.png" alt="rare-projects" width={523} height={423} priority></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-purple-shade">
                                    <h3 className="text-sb text-black">DJK</h3>
                                    <p className="text-rg text-18 text-black">DJK has delivered trusted HVAC solutions for pharma and food sectors.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-sm hm-projects-card-2">
                                <div className="hm-projects-images-sm site-radius-20 bg-light-green">
                                    <Image className="site-radius-20" src="/images/homepage/sart-project.png" alt="rare-projects" width={523} height={423}></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-light-green">
                                    <h3 className="text-sb text-black">S.ART</h3>
                                    <p className="text-rg text-18 text-black">A modern logo designed for S.Art, blending abstract style with a touch of tradition.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-lg hm-projects-card-3">
                                <div className="hm-projects-images-lg site-radius-20 bg-light-pink">
                                    <Image className="site-radius-20" src="/images/homepage/coverize-project.png" alt="rare-projects" width={523} height={423}></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-light-pink">
                                    <h3 className="text-sb text-black">COVRIZE</h3>
                                    <p className="text-rg text-18 text-black">Transform your business with our platform, providing tailored software solutions to meet your unique needs.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-sm hm-projects-card-4">
                                <div className="hm-projects-images-sm site-radius-20 bg-light-yellow">
                                    <Image className="site-radius-20" src="/images/homepage/seahub-project.png" alt="rare-projects" width={523} height={423}></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-light-yellow">
                                    <h3 className="text-sb text-black">4SEAHUB</h3>
                                    <p className="text-rg text-18 text-black">4SEAHUB is a purpose driven logistics and import-export company, setting new standards in trust and quality.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-lg hm-projects-card-5">
                                <div className="hm-projects-images-lg site-radius-20 bg-skin">
                                    <Image className="site-radius-20" src="/images/homepage/sales-project.png" alt="rare-projects" width={523} height={423}></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-skin">
                                    <h3 className="text-sb text-black">SALES DASHBOARD</h3>
                                    <p className="text-rg text-18 text-black">Enhanced decision making, and improved performance tracking.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hm-projects-tablet process-card-wrapper-tablet" ref={sliderRef}>
                        <div className="hm-projects-card-lg hm-projects-card-1">
                            <div className="hm-projects-images-lg site-radius-20 bg-purple-shade">
                                <Image className="site-radius-20" src="/images/homepage/djk-project.png" alt="rare-projects" width={523} height={423} priority></Image>
                            </div>
                            <div className="hm-projects-desc site-radius-20 bg-purple-shade">
                                <h3 className="text-sb text-black">DJK</h3>
                                <p className="text-rg text-18 text-black">DJK has delivered trusted HVAC solutions for pharma and food sectors.</p>
                            </div>
                        </div>

                        <div className="hm-projects-card-sm hm-projects-card-2">
                            <div className="hm-projects-images-sm site-radius-20 bg-light-green">
                                <Image className="site-radius-20" src="/images/homepage/sart-project.png" alt="rare-projects" width={523} height={423}></Image>
                            </div>
                            <div className="hm-projects-desc site-radius-20 bg-light-green">
                                <h3 className="text-sb text-black">S.ART</h3>
                                <p className="text-rg text-18 text-black">A modern logo designed for S.Art, blending abstract style with a touch of tradition.</p>
                            </div>
                        </div>

                        <div className="hm-projects-card-lg hm-projects-card-3">
                            <div className="hm-projects-images-lg site-radius-20 bg-light-pink">
                                <Image className="site-radius-20" src="/images/homepage/coverize-project.png" alt="rare-projects" width={523} height={423}></Image>
                            </div>
                            <div className="hm-projects-desc site-radius-20 bg-light-pink">
                                <h3 className="text-sb text-black">COVRIZE</h3>
                                <p className="text-rg text-18 text-black">Transform your business with our platform, providing tailored software solutions to meet your unique needs.</p>
                            </div>
                        </div>

                        <div className="hm-projects-card-sm hm-projects-card-4">
                            <div className="hm-projects-images-sm site-radius-20 bg-light-yellow">
                                <Image className="site-radius-20" src="/images/homepage/seahub-project.png" alt="rare-projects" width={523} height={423}></Image>
                            </div>
                            <div className="hm-projects-desc site-radius-20 bg-light-yellow">
                                <h3 className="text-sb text-black">4SEAHUB</h3>
                                <p className="text-rg text-18 text-black">4SEAHUB is a purpose driven logistics and import-export company, setting new standards in trust and quality.</p>
                            </div>
                        </div>

                        <div className="hm-projects-card-lg hm-projects-card-5">
                            <div className="hm-projects-images-lg site-radius-20 bg-skin">
                                <Image className="site-radius-20" src="/images/homepage/sales-project.png" alt="rare-projects" width={523} height={423}></Image>
                            </div>
                            <div className="hm-projects-desc site-radius-20 bg-skin">
                                <h3 className="text-sb text-black">SALES DASHBOARD</h3>
                                <p className="text-rg text-18 text-black">Enhanced decision making, and improved performance tracking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
