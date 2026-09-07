'use client';

import { useEffect, useRef } from 'react';

import '@/assets/css/desktop-custom.css';
import '@/assets/css/responsive/desktop-responsive.css';

interface CardCssConfig {
    startX: number;
    startY: number;
    startScale: number;
    startHeight: number;
    endHeight: number;
}

export default function AboutLifeAtRpdSectionDesktop() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const desktopWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const wrapper = desktopWrapperRef.current;

        if (!section || !wrapper) return;

        const cards = Array.from(
            wrapper.querySelectorAll<HTMLDivElement>('.rpd-card')
        );

        let cardCssConfigs: CardCssConfig[] = [];
        let animationFrame: number | null = null;

        const clamp = (
            value: number,
            minimum: number,
            maximum: number
        ): number => {
            return Math.min(
                Math.max(value, minimum),
                maximum
            );
        };

        const easeOutCubic = (value: number): number => {
            return 1 - Math.pow(1 - value, 3);
        };

        const readCssNumber = (
            styles: CSSStyleDeclaration,
            propertyName: string,
            fallback: number
        ): number => {
            const parsedValue = Number.parseFloat(
                styles.getPropertyValue(propertyName).trim()
            );

            return Number.isFinite(parsedValue)
                ? parsedValue
                : fallback;
        };

        const readCardCssConfigs = (): void => {
            cardCssConfigs = cards.map((card) => {
                const styles = window.getComputedStyle(card);

                return {
                    startX: readCssNumber(
                        styles,
                        '--card-start-x',
                        0
                    ),
                    startY: readCssNumber(
                        styles,
                        '--card-start-y',
                        0
                    ),
                    startScale: readCssNumber(
                        styles,
                        '--card-start-scale',
                        1
                    ),
                    startHeight: readCssNumber(
                        styles,
                        '--card-start-height',
                        card.offsetHeight
                    ),
                    endHeight: readCssNumber(
                        styles,
                        '--card-end-height',
                        card.offsetHeight
                    ),
                };
            });
        };

        const updateCards = (): void => {
            animationFrame = null;

            const sectionRect = section.getBoundingClientRect();

            const scrollableDistance =
                section.offsetHeight - window.innerHeight;

            if (scrollableDistance <= 0) return;

            const rawProgress =
                -sectionRect.top / scrollableDistance;

            const progress = clamp(rawProgress, 0, 1);
            const easedProgress = easeOutCubic(progress);
            const remainingProgress = 1 - easedProgress;

            cards.forEach((card, index) => {
                const config = cardCssConfigs[index];

                if (!config) return;

                const floatAmount =
                    Math.sin(
                        window.scrollY * 0.006 +
                            index * 1.4
                    ) *
                    18 *
                    remainingProgress;

                const translateX =
                    config.startX * remainingProgress;

                const translateY =
                    config.startY * remainingProgress +
                    floatAmount;

                const scale =
                    config.startScale +
                    (1 - config.startScale) *
                        easedProgress;

                const height =
                    config.startHeight +
                    (config.endHeight -
                        config.startHeight) *
                        easedProgress;

                card.style.setProperty(
                    '--card-translate-x',
                    `${translateX}px`
                );

                card.style.setProperty(
                    '--card-translate-y',
                    `${translateY}px`
                );

                card.style.setProperty(
                    '--card-scale',
                    `${scale}`
                );

                card.style.setProperty(
                    '--card-current-height',
                    `${height}px`
                );
            });
        };

        const requestUpdate = (): void => {
            if (animationFrame !== null) return;

            animationFrame =
                window.requestAnimationFrame(updateCards);
        };

        const handleResize = (): void => {
            readCardCssConfigs();
            requestUpdate();
        };

        readCardCssConfigs();
        updateCards();

        window.addEventListener('scroll', requestUpdate, {
            passive: true,
        });

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener(
                'scroll',
                requestUpdate
            );

            window.removeEventListener(
                'resize',
                handleResize
            );

            if (animationFrame !== null) {
                window.cancelAnimationFrame(
                    animationFrame
                );
            }

            cards.forEach((card) => {
                card.style.removeProperty(
                    '--card-translate-x'
                );

                card.style.removeProperty(
                    '--card-translate-y'
                );

                card.style.removeProperty(
                    '--card-scale'
                );

                card.style.removeProperty(
                    '--card-current-height'
                );
            });
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="section life-at-rpd-section"
        >
            <div className="life-at-rpd-inner">
                <div className="container">
                    <div className="abt-life-rpd-desktop-title">
                        <h2 className="text-sb text-80">
                            Life at RarePixels
                        </h2>

                        <h3 className="text-sb h2">
                            Real people. Real Work. Real Culture.
                        </h3>
                    </div>

                    <div
                        ref={desktopWrapperRef}
                        className="life-at-rpd-desktop-card-wrapper desktop"
                    >
                        <div className="rpd-card-col-1 rpd-card-col">
                            <div className="rpd-card rpd-card-1" />
                            <div className="rpd-card rpd-card-2" />
                        </div>

                        <div className="rpd-card-col-2 rpd-card-col">
                            <div className="rpd-card rpd-card-3" />
                            <div className="rpd-card rpd-card-4" />
                            <div className="rpd-card rpd-card-5" />
                        </div>

                        <div className="rpd-card-col-3 rpd-card-col">
                            <div className="rpd-card rpd-card-6" />
                            <div className="rpd-card rpd-card-7" />
                            <div className="rpd-card rpd-card-8" />
                        </div>
                    </div>

                    <div className="life-at-rpd-desktop-card-wrapper tablet">
                        <div className="rpd-card-col-1 rpd-card-col">
                            <div className="rpd-card rpd-card-1" />
                            <div className="rpd-card rpd-card-2" />
                            <div className="rpd-card rpd-card-3" />
                            <div className="rpd-card rpd-card-7" />
                        </div>

                        <div className="rpd-card-col-2 rpd-card-col">
                            <div className="rpd-card rpd-card-4" />
                            <div className="rpd-card rpd-card-5" />
                            <div className="rpd-card rpd-card-6" />
                            <div className="rpd-card rpd-card-8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}