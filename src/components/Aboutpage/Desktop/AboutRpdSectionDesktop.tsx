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
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".abt-rpd-section-desktop",
                    start: "top top",
                    end: "+=5000",
                    scrub: 2,
                    invalidateOnRefresh: true,
                }
            });

            const css = getComputedStyle(document.documentElement);

            gsap.set(
                ".abt-rpd-card-1 .abt-card-text, .abt-rpd-card-3 .abt-card-text",
                {
                    y: css.getPropertyValue("--text-up-start")
                }
            );

            gsap.set(
                ".abt-rpd-card-2 .abt-card-text",
                {
                    y: css.getPropertyValue("--text-down-start")
                }
            );

            tl.to(".about-rpd-desktop-content-wrapper", {
                scale: 1,
            }, 0)

                .fromTo(".abt-rpd-card-1",
                    {
                        width: css.getPropertyValue("--card-1-start-width")
                    },
                    {
                        width: css.getPropertyValue("--card-1-width")
                    }, 1)

                .fromTo(".abt-rpd-card-2",
                    {
                        width: css.getPropertyValue("--card-2-start-width"),
                        marginTop: css.getPropertyValue("--card-2-start-mt")
                    },
                    {
                        width: css.getPropertyValue("--card-2-width"),
                        marginTop: css.getPropertyValue("--card-2-mt")
                    }, 1)

                .fromTo(".abt-rpd-card-3",
                    {
                        width: css.getPropertyValue("--card-3-start-width"),
                        marginTop: css.getPropertyValue("--card-3-start-mt")
                    },
                    {
                        width: css.getPropertyValue("--card-3-width"),
                        marginTop: css.getPropertyValue("--card-3-mt")
                    }, 1)

                .to(".abt-rpd-card", {
                    width: css.getPropertyValue("--card-final-width")
                }, 2)

                .fromTo(".abt-rpd-card-1",
                    {
                        x: css.getPropertyValue("--card-1-start-x"),
                        y: css.getPropertyValue("--card-1-start-y")
                    },
                    {
                        x: css.getPropertyValue("--card-1-x"),
                        y: css.getPropertyValue("--card-1-y")
                    }, 2)

                .fromTo(".abt-rpd-card-3",
                    {
                        x: css.getPropertyValue("--card-3-start-x"),
                        y: css.getPropertyValue("--card-3-start-y")
                    },
                    {
                        x: css.getPropertyValue("--card-3-x"),
                        y: css.getPropertyValue("--card-3-y")
                    }, 2)

                .fromTo(".abt-rpd-card-1 .abt-card-text",
                    {
                        opacity: 0,
                        y: css.getPropertyValue("--text-up-start")
                    },
                    {
                        opacity: 1,
                        y: 0
                    }, 3)

                .fromTo(".abt-rpd-card-2 .abt-card-text",
                    {
                        opacity: 0,
                        y: css.getPropertyValue("--text-down-start")
                    },
                    {
                        opacity: 1,
                        y: 0
                    }, 4)

                .fromTo(".abt-rpd-card-3 .abt-card-text",
                    {
                        opacity: 0,
                        y: css.getPropertyValue("--text-up-start")
                    },
                    {
                        opacity: 1,
                        y: 0
                    }, 5)
        });

        mm.add("(max-width: 1199px)", () => {

            const css = getComputedStyle(document.documentElement);

            gsap.set(".about-rpd-desktop-content-wrapper", {
                scale: 4
            });

            gsap.set(".abt-card-text", {
                opacity: 0,
                y: 40
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".abt-rpd-section-desktop",
                    start: "top top",
                    end: "+=6000",
                    scrub: 2,
                    invalidateOnRefresh: true,
                }
            });

            tl.to(".about-rpd-desktop-content-wrapper", {
                scale: 1
            }, 0)

                .fromTo(".abt-rpd-card-1",
                    { width: css.getPropertyValue("--card-1-start-width") },
                    { width: css.getPropertyValue("--card-1-width") }, 1
                )

                .fromTo(".abt-rpd-card-2",
                    {
                        width: css.getPropertyValue("--card-2-start-width"),
                        marginTop: css.getPropertyValue("--card-2-start-mt")
                    },
                    {
                        width: css.getPropertyValue("--card-2-width"),
                        marginTop: css.getPropertyValue("--card-2-mt")
                    }, 1
                )

                .fromTo(".abt-rpd-card-3",
                    {
                        width: css.getPropertyValue("--card-3-start-width"),
                        marginTop: css.getPropertyValue("--card-3-start-mt")
                    },
                    {
                        width: css.getPropertyValue("--card-3-width"),
                        marginTop: css.getPropertyValue("--card-3-mt")
                    }, 1
                )

                .to(".abt-rpd-card, .about-rpd-desktop-content-wrapper", {
                    opacity: 0,
                    duration: 1.0
                }, 3.0)

                .set(".about-rpd-desktop-content-wrapper", {
                    flexDirection: 'column',
                    opacity: 1
                }, 4.0)

                .set(".abt-rpd-card", {
                    width: "100%",
                    marginTop: 0
                }, 4.0)

                .fromTo(".abt-rpd-card-1",
                    { x: "-100%", opacity: 0 },
                    { x: "0%", opacity: 1, immediateRender: false }, 4.3
                )
                .to(".abt-rpd-card-1 .abt-card-text", {
                    opacity: 1,
                    y: 0
                }, 4.7)

                .fromTo(".abt-rpd-card-2",
                    { x: "-100%", opacity: 0 },
                    { x: "0%", opacity: 1, immediateRender: false }, 5.3
                )
                .to(".abt-rpd-card-2 .abt-card-text", {
                    opacity: 1,
                    alignItems: 'flex-end',
                    y: 0
                }, 5.7)

                .fromTo(".abt-rpd-card-3",
                    { x: "-100%", opacity: 0 },
                    { x: "0%", opacity: 1, immediateRender: false }, 6.3
                )
                .to(".abt-rpd-card-3 .abt-card-text", {
                    opacity: 1,
                    y: 0
                }, 6.7);

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
                                    <Image className="rare-logo" src="/images/aboutpage/about-rpd/rare.svg" alt="rare" width={55} height={68}></Image>
                                    <span className="text-pop-sb text-white">are</span>
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
                <div className="abt-rpd-strip">
                    <p className="h2 text-sb">Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * </p>
                </div>
            </div>
        </>
    );
}