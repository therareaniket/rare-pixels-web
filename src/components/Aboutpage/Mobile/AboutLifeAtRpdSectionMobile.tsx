'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '@/assets/css/mobile-custom.css';
import '@/assets/css/responsive/mobile-responsive.css';

export default function AboutLifeAtRpdSectionMobile() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const cardsWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const cardsWrapper = cardsWrapperRef.current;

        if (!section || !cardsWrapper) return;

        const mobileMediaQuery = window.matchMedia(
            '(max-width: 575px)'
        );

        const reducedMotionQuery = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );

        let mobileContext: gsap.Context | null = null;
        let refreshFrame: number | null = null;

        const startMobileAnimation = (): void => {
            if (!mobileMediaQuery.matches) return;
            if (reducedMotionQuery.matches) return;
            if (mobileContext) return;

            mobileContext = gsap.context(() => {
                const mobileCards = Array.from(
                    cardsWrapper.querySelectorAll<HTMLDivElement>(
                        '.life-rpd-mobile-card'
                    )
                );

                mobileCards.forEach((card, index) => {
                    const isEvenCard = index % 2 === 0;

                    gsap.set(card, {
                        transformOrigin: 'center center',
                        force3D: true,
                        willChange: 'transform, opacity',
                    });

                    gsap.fromTo(
                        card,
                        {
                            y: 180,
                            opacity: 0,
                            scale: 1.12,
                            rotate: isEvenCard ? -4 : 4,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            ease: 'power2.out',
                            force3D: true,
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 100%',
                                end: 'top 65%',
                                scrub: 2,
                                invalidateOnRefresh: true,
                            },
                        }
                    );
                });
            }, section);

            refreshFrame = window.requestAnimationFrame(() => {
                ScrollTrigger.refresh();
                refreshFrame = null;
            });
        };

        const stopMobileAnimation = (): void => {
            if (refreshFrame !== null) {
                window.cancelAnimationFrame(refreshFrame);
                refreshFrame = null;
            }

            if (mobileContext) {
                mobileContext.revert();
                mobileContext = null;
            }

            gsap.set(
                cardsWrapper.querySelectorAll(
                    '.life-rpd-mobile-card'
                ),
                {
                    clearProps:
                        'transform,opacity,visibility,willChange,transformOrigin',
                }
            );
        };

        const restartMobileAnimation = (): void => {
            stopMobileAnimation();
            startMobileAnimation();
        };

        const handleMobileBreakpointChange = (): void => {
            restartMobileAnimation();
        };

        const handleReducedMotionChange = (): void => {
            restartMobileAnimation();
        };

        startMobileAnimation();

        mobileMediaQuery.addEventListener(
            'change',
            handleMobileBreakpointChange
        );

        reducedMotionQuery.addEventListener(
            'change',
            handleReducedMotionChange
        );

        return () => {
            mobileMediaQuery.removeEventListener(
                'change',
                handleMobileBreakpointChange
            );

            reducedMotionQuery.removeEventListener(
                'change',
                handleReducedMotionChange
            );

            stopMobileAnimation();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="section"
            style={{ paddingBottom: 0 }}
        >
            <div className="container">
                <div className="life-rpd-mobile-title">
                    <h2 className="text-sb text-30">
                        Life at RarePixels
                    </h2>

                    <p className="text-18 text-sb">
                        Real people. Real Work. Real Culture.
                    </p>
                </div>

                <div
                    ref={cardsWrapperRef}
                    className="life-rpd-mob-card-wrapper"
                >
                    <div className="life-rpd-mobile-card life-rpd-mobile-card-1" />
                    <div className="life-rpd-mobile-card life-rpd-mobile-card-2" />
                    <div className="life-rpd-mobile-card life-rpd-mobile-card-3" />
                    <div className="life-rpd-mobile-card life-rpd-mobile-card-1" />
                    <div className="life-rpd-mobile-card life-rpd-mobile-card-2" />
                    <div className="life-rpd-mobile-card life-rpd-mobile-card-4" />
                    <div className="life-rpd-mobile-card life-rpd-mobile-card-4" />
                    <div className="life-rpd-mobile-card life-rpd-mobile-card-5" />
                </div>
            </div>
        </section>
    );
}