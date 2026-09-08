'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutRpdSectionDesktop() {
    const rpdSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1200px)", () => {
            const css = getComputedStyle(document.documentElement);

            const card1Text = document.querySelector<HTMLElement>(
                ".abt-rpd-card-1 .abt-card-text"
            );

            const card2Text = document.querySelector<HTMLElement>(
                ".abt-rpd-card-2 .abt-card-text"
            );

            const card3Text = document.querySelector<HTMLElement>(
                ".abt-rpd-card-3 .abt-card-text"
            );

            if (!card1Text || !card2Text || !card3Text) return;

            const card1TextHeight = getComputedStyle(card1Text).height;
            const card2TextHeight = getComputedStyle(card2Text).height;
            const card3TextHeight = getComputedStyle(card3Text).height;

            gsap.set(".abt-rpd-card-1", {
                width: css.getPropertyValue("--card-1-start-width").trim(),
                x: css.getPropertyValue("--card-1-start-x").trim(),
                y: css.getPropertyValue("--card-1-start-y").trim()
            });

            gsap.set(".abt-rpd-card-2", {
                width: css.getPropertyValue("--card-2-start-width").trim(),
                marginTop: css.getPropertyValue("--card-2-start-mt").trim()
            });

            gsap.set(".abt-rpd-card-3", {
                width: css.getPropertyValue("--card-3-start-width").trim(),
                marginTop: css.getPropertyValue("--card-3-start-mt").trim(),
                x: css.getPropertyValue("--card-3-start-x").trim(),
                y: css.getPropertyValue("--card-3-start-y").trim()
            });

            gsap.set(card1Text, {
                height: 0,
                overflow: "hidden",
                opacity: 0,
                y: css.getPropertyValue("--text-up-start").trim()
            });

            gsap.set(card2Text, {
                height: 0,
                overflow: "hidden",
                opacity: 0,
                y: css.getPropertyValue("--text-down-start").trim()
            });

            gsap.set(card3Text, {
                height: 0,
                overflow: "hidden",
                opacity: 0,
                y: css.getPropertyValue("--text-up-start").trim()
            });

            const tl = gsap.timeline({
                defaults: {
                    ease: "none"
                },
                scrollTrigger: {
                    trigger: ".abt-rpd-section-desktop",
                    start: "top top",
                    end: "+=5000",
                    scrub: 2,
                    invalidateOnRefresh: true
                }
            });

            tl.to(".about-rpd-desktop-content-wrapper", {
                scale: 1,
                duration: 1
            });

            tl.to({}, {
                duration: 1
            });

            tl.addLabel("cardExpansion");

            tl.to(
                ".abt-rpd-card-1",
                {
                    width: css.getPropertyValue("--card-final-width").trim(),
                    x: css.getPropertyValue("--card-1-x").trim(),
                    y: css.getPropertyValue("--card-1-y").trim(),
                    duration: 2
                },
                "cardExpansion"
            );

            tl.to(
                ".abt-rpd-card-2",
                {
                    width: css.getPropertyValue("--card-final-width").trim(),
                    marginTop: 0,
                    duration: 2
                },
                "cardExpansion"
            );

            tl.to(
                ".abt-rpd-card-3",
                {
                    width: css.getPropertyValue("--card-final-width").trim(),
                    marginTop: css.getPropertyValue("--card-3-mt").trim(),
                    x: css.getPropertyValue("--card-3-x").trim(),
                    y: css.getPropertyValue("--card-3-y").trim(),
                    duration: 2
                },
                "cardExpansion"
            );

            tl.to(
                card1Text,
                {
                    height: card1TextHeight,
                    duration: 1
                },
                "cardExpansion+=1"
            );

            tl.to(
                card2Text,
                {
                    height: card2TextHeight,
                    duration: 1
                },
                "cardExpansion+=1"
            );

            tl.to(
                card3Text,
                {
                    height: card3TextHeight,
                    duration: 1
                },
                "cardExpansion+=1"
            );

            tl.to(card1Text, {
                opacity: 1,
                y: 0,
                overflow: "visible",
                duration: 1
            });

            tl.to(card2Text, {
                opacity: 1,
                y: 0,
                overflow: "visible",
                duration: 1
            });

            tl.to(card3Text, {
                opacity: 1,
                y: 0,
                overflow: "visible",
                duration: 1
            });

            return () => {
                tl.kill();
            };
        });

        mm.add("(max-width: 1199px)", () => {
            const css = getComputedStyle(document.documentElement);

            const wrapper = document.querySelector<HTMLElement>(
                ".about-rpd-desktop-content-wrapper"
            );

            const card1 = document.querySelector<HTMLElement>(
                ".abt-rpd-card-1"
            );

            const card2 = document.querySelector<HTMLElement>(
                ".abt-rpd-card-2"
            );

            const card3 = document.querySelector<HTMLElement>(
                ".abt-rpd-card-3"
            );

            const cardTexts = gsap.utils.toArray<HTMLElement>(
                ".abt-card-text"
            );

            if (
                !wrapper ||
                !card1 ||
                !card2 ||
                !card3 ||
                cardTexts.length === 0
            ) {
                return;
            }

            const card1StartWidth = css
                .getPropertyValue("--card-1-start-width")
                .trim();

            const card2StartWidth = css
                .getPropertyValue("--card-2-start-width")
                .trim();

            const card3StartWidth = css
                .getPropertyValue("--card-3-start-width")
                .trim();

            const card2StartMarginTop = css
                .getPropertyValue("--card-2-start-mt")
                .trim();

            const card3StartMarginTop = css
                .getPropertyValue("--card-3-start-mt")
                .trim();

            const card1ExpandedWidth = css
                .getPropertyValue("--card-1-width")
                .trim();

            const card2ExpandedWidth = css
                .getPropertyValue("--card-2-width")
                .trim();

            const card3ExpandedWidth = css
                .getPropertyValue("--card-3-width")
                .trim();

            const card2ExpandedMarginTop = css
                .getPropertyValue("--card-2-mt")
                .trim();

            const card3ExpandedMarginTop = css
                .getPropertyValue("--card-3-mt")
                .trim();

            gsap.set(wrapper, {
                scale: 4,
                opacity: 1,
                width: "",
                flexDirection: "row",
                justifyContent: "",
                transformOrigin: "center center"
            });

            gsap.set(card1, {
                width: card1StartWidth,
                height: "",
                marginTop: 0,
                x: 0,
                opacity: 1
            });

            gsap.set(card2, {
                width: card2StartWidth,
                height: "",
                marginTop: card2StartMarginTop,
                x: 0,
                opacity: 1
            });

            gsap.set(card3, {
                width: card3StartWidth,
                height: "",
                marginTop: card3StartMarginTop,
                x: 0,
                opacity: 1
            });

            gsap.set(cardTexts, {
                display: "none",
                width: "",
                opacity: 0,
                y: 40
            });

            const tl = gsap.timeline({
                paused: true,
                defaults: {
                    ease: "none"
                }
            });

            tl.to(wrapper, {
                scale: 1,
                duration: 0.8
            });

            tl.to({}, {
                duration: 0.6
            });

            tl.addLabel("cardExpansion");

            tl.to(
                card1,
                {
                    width: card1ExpandedWidth,
                    duration: 1
                },
                "cardExpansion"
            );

            tl.to(
                card2,
                {
                    width: card2ExpandedWidth,
                    marginTop: card2ExpandedMarginTop,
                    duration: 1
                },
                "cardExpansion"
            );

            tl.to(
                card3,
                {
                    width: card3ExpandedWidth,
                    marginTop: card3ExpandedMarginTop,
                    duration: 1
                },
                "cardExpansion"
            );

            tl.to(wrapper, {
                width: "100%",
                justifyContent: "space-between",
                duration: 0.8
            });

            tl.to({}, {
                duration: 1
            });

            tl.to([card1, card2, card3, wrapper], {
                opacity: 0,
                duration: 0.6
            });

            tl.set(wrapper, {
                flexDirection: "column",
                justifyContent: "flex-start",
                opacity: 1
            });

            tl.set([card1, card2, card3], {
                width: "100%",
                height: "var(--rpd-card-height)",
                marginTop: 0,
                x: "-100%",
                opacity: 0
            });

            tl.set(cardTexts, {
                display: "block",
                width: "100%",
                opacity: 1,
                y: 0
            });

            tl.to(card1, {
                x: "0%",
                opacity: 1,
                duration: 0.7
            });

            tl.to(card2, {
                x: "0%",
                opacity: 1,
                duration: 0.7
            });

            tl.to(card3, {
                x: "0%",
                opacity: 1,
                duration: 0.7
            });

            const tabletScrollTrigger = ScrollTrigger.create({
                trigger: ".abt-rpd-section-desktop",
                start: "top top",
                end: "+=6000",
                // pin: true,
                // anticipatePin: 1,
                invalidateOnRefresh: true,

                onUpdate: (self) => {
                    gsap.to(tl, {
                        progress: self.progress,
                        duration: 0.35,
                        ease: "power1.out",
                        overwrite: true
                    });
                },

                onLeave: () => {
                    gsap.killTweensOf(tl);
                    tl.progress(1);
                },

                onEnterBack: (self) => {
                    gsap.killTweensOf(tl);

                    gsap.set(tl, {
                        progress: self.progress
                    });
                }
            });

            return () => {
                gsap.killTweensOf(tl);

                tabletScrollTrigger.kill(true);
                tl.kill();

                gsap.set(wrapper, {
                    clearProps:
                        "transform,opacity,width,flexDirection,justifyContent,transformOrigin"
                });

                gsap.set([card1, card2, card3], {
                    clearProps:
                        "transform,opacity,width,height,marginTop"
                });

                gsap.set(cardTexts, {
                    clearProps:
                        "display,width,opacity,transform"
                });
            };
        });

        return () => mm.revert();

    }, []);

    return (
        <>
            <section ref={rpdSectionRef} className="bg-light-black abt-rpd-section-desktop" >
                <div className="abt-rpd-inner">
                    <div className="container-sm">
                        <div className="about-rpd-desktop-content-wrapper">
                            <div className="abt-rpd-card abt-rpd-card-1">
                                <div className="rpd-card-title-1">
                                    {/* <Image className="rare-logo" src="/images/aboutpage/about-rpd/rare.svg" alt="rare" width={55} height={68}></Image> */}
                                    <span className="text-pop-sb text-white">Rare</span>
                                </div>

                                <div className="abt-card-text">
                                    <h2 className="text-sb h5 text-white">Results Before Recognition</h2>

                                    <p className="text-rg text-18 text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                                </div>
                            </div>

                            <div className="abt-rpd-card abt-rpd-card-2">
                                {/* <Image className="pixels-logo" src="/images/aboutpage/about-rpd/pixels.svg" alt="rare" width={281} height={100}></Image> */}
                                <span className="text-pop-sb text-white">Pixels</span>

                                <div className="abt-card-text">
                                    <h2 className="text-sb h5 text-white">Precision in Every Detail</h2>

                                    <p className="text-rg text-18 text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                                </div>
                            </div>

                            <div className="abt-rpd-card abt-rpd-card-3">
                                {/* <Image className="design-logo" src="/images/aboutpage/about-rpd/design.svg" alt="rare" width={347} height={100}></Image> */}
                                <span className="text-pop-sb text-white">Design</span>

                                <div className="abt-card-text">
                                    <h2 className="text-sb h5 text-white">Direction Before Decoration</h2>

                                    <p className="text-rg text-18 text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Image className="rpd-pixel-left" src="/images/aboutpage/about-rpd/rpd-left-pixel.svg" alt="pixel" width={167} height={211}></Image>
                <Image className="rpd-pixel-right" src="/images/aboutpage/about-rpd/rpd-right-pixel.svg" alt="pixel" width={167} height={211}></Image>
            </section>
            <div className="abt-strip-animation bg-light-black">
                <div className="abt-rpd-strip bg-light-black">
                    <p className="h2 text-sb">Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * </p>
                </div>
            </div>
        </>
    );
}